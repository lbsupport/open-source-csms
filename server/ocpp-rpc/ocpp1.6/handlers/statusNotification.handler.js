export const handleStatusNotification = ({ params, client }) => {
  console.log(`Server got StatusNotification from ${client.identity}:`, params);
  return {};
};
