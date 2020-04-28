const fetch = require("node-fetch");
const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");

// Define save path and excel file with books
const PATH = "./Books/";
const INPUT_FILE = "./Springer_Download_List.xlsx";

downloadPdfFromExcel();


function downloadPdfFromExcel(){
  readXlsxFile(INPUT_FILE).then((rows) => {
    rows.forEach(async (row) => {
        let {name , pdfUrl} = await readRow(row);

        name = removeSpecialCharacters(name);

        downloadFile(pdfUrl, PATH + name + ".pdf");
    });
  });
}

function removeSpecialCharacters(name){
  return name.replace(/[^a-zA-Z ]/g, " ");
}

async function readRow(row) {
  const redirectUrl = row[4];
  const name = row[1];
  
  const res = await fetch(redirectUrl);

  let webUrl = res.url;
  let pdfUrl =
    "https://link.springer.com/content/pdf" +
    webUrl.substring(webUrl.lastIndexOf("/"));

  return { name, pdfUrl };
}

async function downloadFile(url, path) {
  const res = await fetch(url);
    const fileStream = fs.createWriteStream(path);
    
    await new Promise((resolve, reject) => {
      console.log("Starting download of " + path);

      res.body.pipe(fileStream);

      res.body.on("error", (err) => {
        reject(err);
        console.log(err);
      });

      fileStream.on("finish", function () {
        console.log("Finishing download of " + path);
        resolve();
      });

    });
}
