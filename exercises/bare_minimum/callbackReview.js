/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      cb(err, null);
    } else {
      console.log(content.toString().split('\n')[0])
      cb(null, content.toString().split('\n')[0])
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request(url, (err, resp) => {
    if (err) {
      cb(err);
    } else {
      cb(null, resp.statusCode)
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
