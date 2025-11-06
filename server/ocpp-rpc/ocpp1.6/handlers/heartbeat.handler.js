export const handleHeartbeat = ({ params, client }) => {
  console.log(`Server got Heartbeat from ${client.identity}:`, params);

  return {
    currentTime: new Date().toISOString(),
  };
};
