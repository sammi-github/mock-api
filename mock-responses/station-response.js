module.exports.mockResponse = (serverless) => {
 const fsPromises = require('fs').promises
 return fsPromises.readFile('mock-responses/station-response.json', 'utf-8')
};