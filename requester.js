const request = require('request-promise-native');

const sendRequest = function(emptyHeader, reqType) {
  const headers = {
    'custom-header-field': (emptyHeader === 'true' ? undefined : 'custom-header-field-value')
  };
  request[reqType]({ url: 'http://localhost:3000', headers: headers })
  .then(data => {
    console.log(data);
  });
}

sendRequest(process.argv[2], process.argv[3]);
