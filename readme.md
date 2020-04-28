## Book Downloader

This script can be used to download the Springer Ebooks that are available for free in the Springer_All_Ebooks spreadshit, there are more than 400 books!
* Include the books you want in the Springer_Download_List.xsls spread sheet
* Trying to download all of them at once may not work, doing it in chunks of 100 has worked for me
* It downloads the books in pdf format and save them in a Books folder inside this directory
* It saves them with the name in the second column and uses the URL in the 5th column.

## STEPS
* Make sure you have Node.js and npm already installed in your computer, you can check this by writing `node` and `npm` in the command line and receiving a response. If not, you can download them here: https://nodejs.org/en/download/
* Navigate to '/app', open a command line or bash and execute `npm install` to install all the dependencies.
* In the same CLI execute `node main.js`, the download will start