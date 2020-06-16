module.exports.mockResponse = (serverless) => {
 const fsPromises = require('fs').promises
 return fsPromises.readFile('mock-responses/feedback-generate-response.json', 'utf-8')
};