import { createRPCError } from "ocpp-rpc";

export const handleDefault = ({ method, params, client }) => {
  console.log(`Server got ${method} from ${client.identity}:`, params);
  throw createRPCError("NotImplemented");
};
