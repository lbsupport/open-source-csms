import { prisma } from "../../prisma.client.js";

// Create a new Transaction
export const createTransaction = async (data) => {
  return await prisma.transaction.create({ data });
};

// Read all Transactions
export const getAllTransactions = async ({
  page = 1,
  limit = 10,
  sortBy = "startTimestamp",
  sortOrder = "desc",
  status,
  chargerId,
  startDate,
  endDate,
} = {}) => {
  const skip = (page - 1) * limit;

  const where = {
    ...(status && { status }),
    ...(chargerId && { chargerId }),
    ...(startDate &&
      endDate && {
        startTimestamp: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      }),
  };

  return await prisma.transaction.findMany({
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

// Read a single Transaction by ID
export const getTransactionById = async (id) => {
  return await prisma.transaction.findUnique({ where: { id } });
};

// Update a Transaction by ID
export const updateTransaction = async (id, data) => {
  return await prisma.transaction.update({
    where: { id },
    data,
  });
};

// Delete a Transaction by ID
export const deleteTransaction = async (id) => {
  return await prisma.transaction.delete({ where: { id } });
};

// Uniform response helpers
const sendSuccess = (res, status = 200, data = null) =>
  res.status(status).json({ success: true, data });

const sendError = (res, status = 500, error) =>
  res.status(status).json({ success: false, error: error?.message || String(error) });

export const createTransactionApi = async (req, res) => {
  try {
    console.log("POST /transactions - body:", req.body);
    const created = await createTransaction(req.body);
    console.log("POST /transactions - created:", created);
    return sendSuccess(res, 201, created);
  } catch (err) {
    console.error("POST /transactions - error:", err);
    return sendError(res, 500, err);
  }
};

export const getAllTransactionsApi = async (req, res) => {
  try {
    const opts = {
      page: req.query.page ? parseInt(req.query.page, 10) : undefined,
      limit: req.query.limit ? parseInt(req.query.limit, 10) : undefined,
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
      status: req.query.status,
      chargerId: req.query.chargerId,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
    };
    const result = await getAllTransactions(opts);
    return sendSuccess(res, 200, result);
  } catch (err) {
    return sendError(res, 500, err);
  }
};

export const getTransactionByIdApi = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = await getTransactionById(id);
    if (!item) {
      return sendError(res, 404, new Error("Transaction not found"));
    }
    return sendSuccess(res, 200, item);
  } catch (err) {
    return sendError(res, 500, err);
  }
};

export const updateTransactionApi = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await updateTransaction(id, req.body);
    return sendSuccess(res, 200, updated);
  } catch (err) {
    return sendError(res, 500, err);
  }
};

export const deleteTransactionApi = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteTransaction(id);
    return sendSuccess(res, 200, { id });
  } catch (error) {
    return sendError(res, 500, error);
  }
};
