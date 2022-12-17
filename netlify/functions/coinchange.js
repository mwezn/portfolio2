const fetch = require('node-fetch')
exports.handler = async (event, context) => {
    const coin = event.queryStringParameters.coin;
    const itvl=event.queryStringParameters.interval

    try {
        //const response = await fetch(`https://api.binance.com/api/v1/klines?symbol=${coin}&interval=${itvl}`);
        const response = await fetch(`http://13.40.184.90:8080/coins/${coin}/${itvl}`);
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
  
}
