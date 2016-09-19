'use strict';

var fs = require('fs'),
    parse = require('csv-parse'),
    otherFns = require('../common/generalDataFns.js'),
    lob = require('callLob'),
    parser;

var inputFile='./test_csvs/Patient Statement Example.csv';

function error() {
    console.log('there was a terrible problem');
}

function callParseData(){
    otherFns.parseThatData().then(doLobStuff, error);
}

function doLobStuff(){
    var aggData,
        patients,
        i;

    aggData = otherFns.getAggregatedData();
    patients = Object.keys(aggData);
    console.log(letters)

    for(i = 0; i < patients.length; i++) {
        lob.createLobObject(patients[i], aggData[patients[i]])
    }
}

parser = parse({delimiter: ','}, function (err, data) {
    otherFns.setCsvData(data).then(callParseData, error)
});

fs.createReadStream(inputFile).pipe(parser);