const fetch = require("node-fetch");
const request = require('request');
const fs = require("fs");
const readXlsxFile = require('read-excel-file/node');

// Define save path and excel file with books
const path = './../Books/'
const inputFile = './../Springer_Ebooks_short.xlsx'

readXlsxFile(inputFile).then((rows) => {
    rows.forEach(row => {
        const redirectUrl = row[4];
        request(redirectUrl, (e, res) =>{
            let webUrl = res.request.uri.href;
            let pdfUrl = 'https://link.springer.com/content/pdf' + webUrl.substring(webUrl.lastIndexOf('/'))
            const name = row[1];

            downloadFile(pdfUrl, (path + name + '.pdf'));
        })

    });
})


async function downloadFile(url, path) {
  const res = await fetch(url);
  try {
    const fileStream = fs.createWriteStream(path);
    await new Promise((resolve, reject) => {
      console.log('Starting download of ' + path);
      res.body.pipe(fileStream);
      res.body.on("error", (err) => {
        reject(err);
        console.log(err);
      });
      fileStream.on("finish", function () {
        console.log('Finishing download of ' + path);
        resolve();
      });
    });
  } catch (ex) {
    console.log(ex);
  }
}
