import { prisma } from "../../prisma.client.js";

// Existing Prisma helpers
export const createConnector = async (data) => {
  return await prisma.connector.create({ data });
};

export const getAllConnectors = async ({
  page = 1,
  limit = 10,
  sortBy = "lastStatusAt",
  sortOrder = "desc",
  status,
  chargerId,
  errorCode,
} = {}) => {
  const skip = (page - 1) * limit;

  const where = {
    ...(status && { status }),
    ...(chargerId && { chargerId }),
    ...(errorCode && { errorCode }),
  };

  return await prisma.connector.findMany({
    where,
    orderBy: {
      [sortBy]: sortOrder,
    },
    skip,
    take: limit,
    include: {
      charger: true,
    },
  });
};

export const getConnectorById = async (id) => {
  return await prisma.connector.findUnique({
    where: { id },
    include: {
      charger: true,
    },
  });
};

export const updateConnector = async (id, data) => {
  return await prisma.connector.update({
    where: { id },
    data,
  });
};

export const deleteConnector = async (id) => {
  return await prisma.connector.delete({ where: { id } });
};

// Uniform response helpers
const sendSuccess = (res, status = 200, data = null) =>
  res.status(status).json({ success: true, data });

const sendError = (res, status = 500, error) =>
  res.status(status).json({ success: false, error: error?.message || String(error) });

export const createConnectorApi = async (req, res) => {
  try {
    console.log("POST /connectors - body:", req.body);
    const created = await createConnector(req.body);
    console.log("POST /connectors - created:", created);
    return sendSuccess(res, 201, created);
  } catch (err) {
    console.error("POST /connectors - error:", err);
    return sendError(res, 500, err);
  }
};

export const getAllConnectorsApi = async (req, res) => {
  try {
    const opts = {
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      limit: req.query.limit ? parseInt(req.query.limit, 10) : undefined,
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
      status: req.query.status,
      chargerId: req.query.chargerId,
      errorCode: req.query.errorCode
    };
    const result = await getAllConnectors(opts);
    return sendSuccess(res, 200, result);
  } catch (err) {
    return sendError(res, 500, err);
  }
};

export const getConnectorByIdApi = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = await getConnectorById(id);
    if (!item) {
      return sendError(res, 404, new Error("Connector not found"));
    }
    return sendSuccess(res, 200, item);
  } catch (err) {
    return sendError(res, 500, err);
  }
};

export const updateConnectorApi = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await updateConnector(id, req.body);
    return sendSuccess(res, 200, updated);
  } catch (err) {
    return sendError(res, 500, err);
  }
};

export const deleteConnectorApi = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteConnector(id);
    return sendSuccess(res, 200, { id });
  } catch (error) {
    return sendError(res, 500, error);
  }
};
