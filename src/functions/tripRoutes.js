const firebase = require('./../../config/firebase');
const clickBus = require('./../scrap/clickBus');

/**
 *
 * @type {HttpsFunction}
 */
exports.getTrips = firebase.functions.https.onRequest((req, res) => {
    let from = req.query.from;
    let to = req.query.to;
    let tripDate = req.query.tripDate;
    let content = clickBus.getTrip(from, to, tripDate)
    return res.json('Ok');
});