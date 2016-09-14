'use strict';

exports.createLobObject = function(obj){
    console.log(obj);
    var to = Object.keys(obj);

    var temp_obj = {
        description: "Template Matias",
        to: {
            name: to,
            address_line1: '123 Test Street',
            address_line2: 'Suite 12',
            address_city: 'Mountain View',
            address_state: 'CA',
            address_zip: '94041',
            address_country: 'US',
        },
        from: {
            name: 'Your Health Clinc',
            address_line1: '123 Test Avenue',
            address_city: 'Mountain View',
            address_state: 'CA',
            address_zip: '94041',
            address_country: 'US',
        },
        file: data,
        color: false,
        double_sided: false,
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
        }
    }
}