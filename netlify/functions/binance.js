const fetch = require('node-fetch')

exports.handler = async () => {
  let statusCode, data;

  try {
    const response = await fetch('https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1h');
    data = await response.json();
    statusCode = 200;
  } catch (err) {
    statusCode = err.statusCode || 500;
    data = { error: err.message };
  }

  return {
    statusCode,
    body: JSON.stringify(data)
  }
};
