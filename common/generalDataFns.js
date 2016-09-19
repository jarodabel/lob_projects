'use strict';

var data,
    aggregatedData,
    denConsts = {
        one: 'guarantor_name',
        two: 'facility_name',
        three: 'appointment_provider'
    };

exports.setCsvData = function(payload) {
    var promise = new Promise (function(resolve, reject){
        data = payload;
        resolve();
    });

    return promise;
};

exports.getAggregatedData = function(){
    return aggregatedData;
}

exports.parseThatData = function (){
    var promise = new Promise(function (resolve, reject){
        var headerRow = data[0],
            i,
            aggregated = {},
            row,
            modData = [],
            tempObj,
            newKey;

        for (i = 1; i < data.length; i++){
            row = data[i];
            tempObj = {};

            headerRow.forEach(function(key, k){
                newKey = key.trim().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, '_').toLowerCase();
                tempObj[newKey] = row[k];
            });
            console.log(Object.keys(tempObj))
            modData.push(tempObj);
        }

        for (i = 0; i < modData.length; i++){
            row = modData[i];

            if(!aggregated[row[denConsts.one]]){
                aggregated[row[denConsts.one]] = {};
            }

            aggregated[row[denConsts.one]]['guarantor_address_1'] = row['guarantor_address_1'];
            aggregated[row[denConsts.one]]['guarantor_address_2'] = row['guarantor_address_2'];
            aggregated[row[denConsts.one]]['city'] = row['city'];
            aggregated[row[denConsts.one]]['state'] = row['state'];
            aggregated[row[denConsts.one]]['zip'] = row['zip'];


            if(!aggregated[row[denConsts.one]][row[denConsts.two]]){
                aggregated[row[denConsts.one]][row[denConsts.two]] = {};
            }

            if(!aggregated[row[denConsts.one]][row[denConsts.two]][row[denConsts.three]]){
                aggregated[row[denConsts.one]][row[denConsts.two]][row[denConsts.three]] = [];
            }

            aggregated[row[denConsts.one]][row[denConsts.two]][row[denConsts.three]].push(row);
        }

        aggregatedData = aggregated;
        resolve();

    });

    return promise;
};
