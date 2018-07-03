const scrap = require('./scrap');
const props = require('../../config/props').getProps();

exports.getTrip = (from, to, tripDate) => {
    let uri = props.base.urls.clickBus;
    uri += from + '/' + to + '/?ida=' + tripDate;
    let content = scrap.loadPage(uri);
}