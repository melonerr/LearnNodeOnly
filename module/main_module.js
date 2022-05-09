exports.MainData = (port, req) => {
    // import modules
    var url = require('url');
    var dt = require('./date_module');
    var uc = require('../node_modules/upper-case');

    // set paramitor
    var baseUrl = url.parse(req.url, true)
    var FullUrl = req.headers.host + baseUrl.pathname + baseUrl.search;
    var Data = {
        port: port,
        fullurl: FullUrl,
        baseUrl: req.headers.host,
        part: baseUrl.pathname,
        search: baseUrl.search,
        UrlParamID: baseUrl.query.id,
        UrlParamName: baseUrl.query.id,
        Name: uc.upperCase(dt.MyName()),
        Date: dt.DateTime()
    };
    return Data;
};

exports.LogServerStart = (port) => {
    console.log(`Server (http://localhost:${port}) started`);
};