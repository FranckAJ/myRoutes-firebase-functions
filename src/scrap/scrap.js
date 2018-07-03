const requestPromise = require('request-promise');
var cheerio = require('cheerio');


exports.loadPage = function (uri) {
    const options = {
        uri: uri,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    requestPromise(options)
        .then(($) => {
            console.log($);
            return $;
        })
        .catch((err) => {
            console.error(err);
        });
};



