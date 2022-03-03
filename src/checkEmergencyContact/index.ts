const requestPromise = require("request-promise");
const cheerio = require("cheerio");

const nitkcURL = "https://www.kurume-nct.ac.jp/";

export const checkEmergencyContact = async () => {
    const response = await requestPromise({
        uri: nitkcURL,
        gzip: true
    })
    const $ = cheerio.load(response);
    console.log($)
    const emergencyColumn = $('.top-important-inner').text();
    if (emergencyColumn) return emergencyColumn;
    else return null;

}