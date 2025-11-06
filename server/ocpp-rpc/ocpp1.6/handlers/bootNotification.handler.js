export const handleBootNotification = ({ params, client }) => {
  console.log(`Server got BootNotification from ${client.identity}:`, params);

  return {
    status: "Accepted",
    interval: 300,
    currentTime: new Date().toISOString(),
  };
};
