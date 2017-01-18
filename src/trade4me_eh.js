export default (request) => {
  const xhr = require('xhr');
  const query = require('codec/query_string');

  // TODO: fill me in
  const username = ''; // Your Trade4me Username
  const password = ''; // Your Trade4me Password
  // TODO: end todo.

  const qs = {
      username: username,
      password: password,
      asset: request.message.asset,        // Asset Symbol
      direction: request.message.direction,// Direction UP or DOWN
      expiry: request.message.expiry,      // Trade expiry in minutes
      amount: request.message.amount       // Investment in $
  }

  const url = 'https://trade4.me/order.php' + '?' + query.stringify(qs);

  try {
    // create a HTTP GET request to the trade4me API
    return xhr.fetch(url).then((res) => {
        console.log(res);
        return request.ok();
    });
  } catch (e) {
      // catch and log errors
      console.log(e);
      return request.ok();
  }
}
