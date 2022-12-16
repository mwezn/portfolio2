const fetch = require('node-fetch')

exports.handler = async () => {
  let statusCode, data;

  try {
    //const response = await fetch('https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1h');
    const response=await fetch('http://13.40.184.90:8080/coins')
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
