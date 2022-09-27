/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHubProfileAsync = require('./promisification');
var pluckFirstLineFromFileAsync = require('./promiseConstructor');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
 var profile = pluckFirstLineFromFileAsync.pluckFirstLineFromFileAsync(readFilePath)
    .then((profile) => { return getGitHubProfileAsync.getGitHubProfileAsync(profile) })
    .then((object) => { return new Promise((resolve, reject) => {
      fs.writeFile(writeFilePath, JSON.stringify(object), (err) => {
        if (err) { reject(err) }
        else { resolve('Sucessfully Wrote') }
      })
    }) })
    .catch(err => {console.log(err)});
  return profile;
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
