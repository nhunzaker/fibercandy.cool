module.exports = function handler(event, context) {
  return Promise.resolve({
    statusCode: 200,
    body: JSON.stringify({
      message: "Thanks!"
    })
  });
};
