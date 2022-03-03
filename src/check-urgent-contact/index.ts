const requestPromise = require("request-promise");
const cheerio = require("cheerio");

const nitkcURL = "https://www.kurume-nct.ac.jp/";

export const checkUrgentContact = async () => {
    const response = await requestPromise({
        uri: nitkcURL,
        gzip: true
    })
    const $ = cheerio.load(response);
    const emergencyColumn = $('.top-important-inner').text();
    if (emergencyColumn) return emergencyColumn;
    else return null;

}
