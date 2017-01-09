const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

let START_URL = 'https://join.worksmobile.com/kr/joinup/basicInfo';
let SEARCH_WORD = 'WORKS MOBILE';
let contains = [];
let allAbsoluteLinks = [];
let allRelativeLinks = [];
let allAbsoluteJS = [];

crawl(START_URL, SEARCH_WORD);
function crawl(url, word) {
    request(url, (error, response, body) => {
        let $ = cheerio.load(body);
        // body.split('\n').forEach((element, index) => {
        //     if (element.toString().indexOf(SEARCH_WORD) > -1) {
        //         contains.push(element);
        //     }
        // });
        
        
        getAbsoluteLinks($);

        allAbsoluteLinks.forEach((link, index) => {
            // console.log(link);
            crawl(link, word);
        });

        allRelativeLinks.forEach((link, index) => {
            // console.log(response);
            // crawl('https://www.worksmobile.com/' + link, word);
        });

        allAbsoluteJS.forEach((link, index) => {
            crawl(link, word);
            // console.log(link);
        });

        body.split('\n').forEach((element, index) => {
            if (element.toString().toLowerCase().indexOf(SEARCH_WORD.toLowerCase()) > -1) {
                // console.log(element);
                // contains.push(element);
            }
        });
    });
}


function getAbsoluteLinks ($) {
    let absoluteLinks = $('a[href^="http"]');
    // let relativeLinks = $('a[href^="/"]');
    let relativeLinks = $('a[href^="/"]');
    let absoluteJS = $('script[src^="http"]');

    absoluteLinks.each((index, item) => {
        allAbsoluteLinks.push($(item).attr('href'));
    });
    relativeLinks.each((index, item) => {
        allRelativeLinks.push($(item).attr('href'));
    });
    absoluteJS.each((index, item) => {
        allAbsoluteJS.push($(item).attr('src'));
    });
}

// let START_URL = 'http://www.daum.net';
// let SEARCH_WORD = "Works Mobile";
// let MAX_PAGES_TO_VISIT = 10;

// let pagesVisited = {};
// let numPagesVisited = 0;
// let pagesToVisit = [];
// let url = new URL(START_URL);
// let baseUrl = url.protocol + "//" + url.hostname;

// pagesToVisit.push(START_URL);
// crawl();

// function crawl() {
//   if(numPagesVisited >= MAX_PAGES_TO_VISIT) {
//     console.log("Reached max limit of number of pages to visit.");
//     return;
//   }
//   let nextPage = pagesToVisit.pop();
//   if (nextPage in pagesVisited) {
//     // We've already visited this page, so repeat the crawl
//     crawl();
//   } else {
//     // New page we haven't visited
//     visitPage(nextPage, crawl);
//   }
// }

// function visitPage(url, callback) {
//   // Add page to our set
//   pagesVisited[url] = true;
//   numPagesVisited++;

//   // Make the request
//   console.log("Visiting page " + url);
//   request(url, function(error, response, body) {
//      // Check status code (200 is HTTP OK)
//      console.log("Status code: " + response.statusCode);
//      if(response.statusCode !== 200) {
//        callback();
//        return;
//      }
//      // Parse the document body
//      let $ = cheerio.load(body);
//      let isWordFound = searchForWord($, SEARCH_WORD);
//      if(isWordFound) {
//        console.log('Word ' + SEARCH_WORD + ' found at page ' + url);
//      } else {
//        collectInternalLinks($);
//        // In this short program, our callback is just calling crawl()
//        callback();
//      }
//   });
// }

// function searchForWord($, word) {
//   let bodyText = $('html > body').text().toLowerCase();
//   return(bodyText.indexOf(word.toLowerCase()) !== -1);
// }

// function collectInternalLinks($) {
//     let relativeLinks = $("a[href^='/']");
//     console.log("Found " + relativeLinks.length + " relative links on page");
//     relativeLinks.each(function() {
//         pagesToVisit.push(baseUrl + $(this).attr('href'));
//     });
// }




// const request = require('request');
// const cheerio = require('cheerio');
// const URL = require('url-parse');

// let pageToVisit = 'http://www.arstechnica.com';
// pageToVisit = 'https://www.worksmobile.com';
// console.log('Visiting page ' + pageToVisit);
// request(pageToVisit, (error, response, body) => {
//     if (error) {
//         console.log('Error: ' + error);
//     }
//     // Check status code (200 is HTTP OK)
//     console.log('Status code: ' + response.statuscode);
//     if(response.statusCode === 200) {
//         // Parse the document body
//         let $ = cheerio.load(body);
//         console.log('Page title: ' + $('title').text());
//         collectInternalLinks($);
//     }
// });


// function searchForWord($, word) {
//     let bodyText = $('html > body').text();
//     if (bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
//         return true;
//     }
//     return false;
// }

// function collectInternalLinks ($) {
//     let allRelativeLinks = [];
//     let allAbsoluteLinks = [];

//     let relativeLinks = $('a[href^="/"]');
//     relativeLinks.each(() => {
//         allRelativeLinks.push($(this).attr('href'));
//     });

//     let absoluteLinks = $('a[href^="http"]');
//     absoluteLinks.each(() => {
//         allAbsoluteLinks.push($(this).attr('href'));
//     });

//     console.log('Found ' + allRelativeLinks.length + ' relative links');
//     console.log('Found ' + allAbsoluteLinks.length + ' absolute links');
// }