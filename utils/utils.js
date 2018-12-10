const https = require('https');

exports.getCsvData = async function(spreadsheetPath) {
  return new Promise(function (resolve, reject) {
    https.get(spreadsheetPath, (resp) => {
      var results = { response: "" };
      resp.on('data', (chunk) => {
        results.response += chunk;
      });
      resp.on('end', () => {
        resolve(results.response);
      });
      resp.on('error', (error) => {
        reject(error);
      });
    });
  });
}