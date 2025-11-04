import { prisma } from "../../prisma.client.js";

// Create a new Charger
export const createCharger = async (data) => {
  return await prisma.charger.create({ data });
};

// Read all Chargers
export const getAllChargers = async ({
  page = 1,
  limit = 10,
  sortBy = "lastHeartbeatAt",
  sortOrder = "desc",
  connected,
  vendor,
  search,
} = {}) => {
  const skip = (page - 1) * limit;

  const where = {
    ...(connected !== undefined && { connected }),
    ...(vendor && { vendor }),
    ...(search && {
      OR: [
        { id: { contains: search, mode: "insensitive" } },
        { serialNumber: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
      ],
    }),
  };

  return await prisma.charger.findMany({
    where,
    orderBy: {
      [sortBy]: sortOrder,
    },
    skip,
    take: limit,
    include: {
      connectors: true,
      _count: {
        select: { transactions: true },
      },
    },
  });
};

// Read a single Charger by ID
export const getChargerById = async (id) => {
  return await prisma.charger.findUnique({
    where: { id },
    include: {
      connectors: true,
      transactions: {
        orderBy: { startTimestamp: "desc" },
        take: 5,
      },
    },
  });
};

// Update a Charger by ID
export const updateCharger = async (id, data) => {
  return await prisma.charger.update({
    where: { id },
    data,
  });
};

// Delete a Charger by ID
export const deleteCharger = async (id) => {
  return await prisma.charger.delete({ where: { id } });
};

// Uniform response helpers and API wrappers
const sendSuccess = (res, status = 200, data = null) =>
  res.status(status).json({ success: true, data });

const sendError = (res, status = 500, error) =>
  res
    .status(status)
    .json({ success: false, error: error?.message || String(error) });

export const createChargerApi = async (req, res) => {
  try {
    console.log("POST /chargers - body:", req.body);
    const created = await createCharger(req.body);
    console.log("POST /chargers - created:", created);
    return sendSuccess(res, 201, created);
  } catch (err) {
    console.error("POST /chargers - error:", err);
    return sendError(res, 500, err);
  }
};

export const getAllChargersApi = async (req, res) => {
  try {
    console.log("GET /chargers - query:", req.query);
    const opts = {
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      limit: req.query.limit ? parseInt(req.query.limit, 10) : undefined,
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
      connected:
        req.query.connected !== undefined
          ? req.query.connected === "true"
          : undefined,
      vendor: req.query.vendor,
      search: req.query.search,
    };
    const result = await getAllChargers(opts);
    console.log("GET /chargers - result count:", result.length);
    return sendSuccess(res, 200, result);
  } catch (err) {
    console.error("GET /chargers - error:", err);
    return sendError(res, 500, err);
  }
};

export const getChargerByIdApi = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`GET /chargers/${id}`);
    const item = await getChargerById(id);
    if (!item) {
      console.warn(`GET /chargers/${id} - not found`);
      return sendError(res, 404, new Error("Charger not found"));
    }
    console.log("GET /chargers/:id - found:", item);
    return sendSuccess(res, 200, item);
  } catch (err) {
    console.error("GET /chargers/:id - error:", err);
    return sendError(res, 500, err);
  }
};

export const updateChargerApi = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`PUT /chargers/${id} - body:`, req.body);
    const updated = await updateCharger(id, req.body);
    console.log("PUT /chargers/:id - updated:", updated);
    return sendSuccess(res, 200, updated);
  } catch (err) {
    console.error("PUT /chargers/:id - error:", err);
    return sendError(res, 500, err);
  }
};

export const deleteChargerApi = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(`DELETE /chargers/${id}`);
    await deleteCharger(id);
    console.log(`DELETE /chargers/${id} - deleted`);
    return sendSuccess(res, 200, { id });
  } catch (error) {
    console.error("DELETE /chargers/:id - error:", error);
    return sendError(res, 500, error);
  }
};
