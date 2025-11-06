import "dotenv/config";

export const serverConfig = {
  port: process.env.PORT || 9220,
  protocols: ["ocpp1.6"],
  strictMode: true,
};
