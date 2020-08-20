const pdfshift = require('pdfshift')('b44586c640024e6d8114b7812deead14');
const fs = require('fs');

const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "dist/LFCurriculum/index.html"),'utf-8');

pdfshift.convert(data).then(function (binary_file) {
  fs.writeFile('result1.pdf', binary_file, "binary", function () {})
}).catch(function ({ message, code, response, errors = null }) {
	console.log({ message, code, response, errors })
})