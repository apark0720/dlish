export const createOrder = order => {
  return $.ajax({
    method: "POST",
    url: "/api/orders",
    data: {order}
  });
};
