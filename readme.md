## Book Downloader

This script downloads the books listed in Springer_Ebooks_short.xlsx. 
It saves them with the name in the second column and downloads them from the URL in the 5th column.

The other excel file contains the whole list of books, just copy paste the ones you are interested in. Trying to download the whole list at once may cause many of them to fail, at least in the tests I have done. I have had successful downloads in chunks of 100.

## STEPS
* Make sure you have Node.js and npm already installed in your computer, you can check this by writing `node` and `npm` in the command line and receiving a response. If not, you can download them here: https://nodejs.org/en/download/
* Navigate to '/app', open a command line or bash and execute `npm install` to install all the dependencies.
* In the same CLI execute `node main.js`, the download will start