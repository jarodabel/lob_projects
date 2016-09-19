'use strict';

var apiKeysMethod = require('../doNotCommit/apiKeys'),
    chcsek_constants = require('chcsek_constants'),
    apiKeys,
    chcConts,
    lob = require('Lob')('', {
        apiVersion: '2016-06-30'
    });

apiKeys = apiKeysMethod.getKeys();
chcConts = chcsek_constants.getChcsekConstants();

exports.createLobObject = function(patient, obj){
    var lobObj,
        patientName = patient,
        addone = obj.guarantor_address_1,
        addtwo = obj.guarantor_address_2,
        city = obj.city,
        state = obj.state,
        zip = obj.zip,
        country = 'US',
        date = new Date(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        year = date.getFullYear(),
        monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        today;

    today = monthNames[month] + ' ' + day + ', ' + year;

    lobObj = {
        description: "",
        to: {
            name: patientName,
            address_line1: addone,
            address_line2: addtwo,
            address_city: city,
            address_state: state,
            address_zip: zip,
            address_country: country,
        },
        from: {
            name: chcConts.from_address.name,
            address_line1: chcConts.from_address.addone,
            address_city: chcConts.from_address.city,
            address_state: chcConts.from_address.state,
            address_zip: chcConts.from_address.zip,
            address_country: chcConts.from_address.country
        },
        data: {
            name: 'Nelson Cat',
            balance: '$75.00',
            claimId: '123654',
            accountNumber: '3728947',
            todaysDate: today,
            visitDate: '3/26/2016',
            providerName: "Patches O'Houlihan",
            facilityNumber: '(816) 555-5655',
            facilityName: 'Dog Spa',
            address_city: 'Mountain View',
            address_state: 'CA',
            today: today,
            subtotal: '$70.00',
            taxfees: '$5.00',
            email: 'info@hemmahealth.com',
            website: 'hemmahealth.com'
        },
        file: data,
        color: false,
        double_sided: false
    }

    testThisLobObject(lobObj)
}

function testThisLobObject(obj){
    mailThisLobObj(obj)
}

function mailThisLobObj(){

}