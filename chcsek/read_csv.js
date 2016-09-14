'use strict';

var fs = require('fs'),
    parse = require('csv-parse'),
    otherFns = require('../common/generalDataFns.js'),
    lob = require('../common/callLob'),
    parser;

var inputFile='./test_csvs/Patient Statement Example.csv';

function error() {
    console.log('there was a terrible problem');
}

function callParseData(){
    otherFns.parseThatData().then(doLobStuff, error);
}

function doLobStuff(){
    console.log('hello')
    var aggData,
        letters;

    aggData = otherFns.getAggregatedData();
    letters = Object.keys(aggData);
    letters.forEach(function(name){
        lob.createLobObject(aggData[name]);
    })
}

parser = parse({delimiter: ','}, function (err, data) {
    otherFns.setCsvData(data).then(callParseData, error)
});

fs.createReadStream(inputFile).pipe(parser);