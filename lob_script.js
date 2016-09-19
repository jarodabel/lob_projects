fs = require('fs');

var filePath = './rmhw/lob_patient_statement.html';



fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
    if (!err) {
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        var today = monthNames[month] + ' ' + day + ', ' + year;

        var Lob = require('Lob')('test_546c65dfaf8aa7ce4514678e4a0bb7fae74', {
            apiVersion: '2016-06-30'
        });

        var temp_obj = {
            description: "Template Matias",
            to: {
                name: 'Nelson Cat',
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

        var rmhw_obj = {
            description: "Rocky Mountain Health Wellness Example",
            to: {
                name: 'John Doe',
                address_line1: '123 Test Street',
                address_line2: 'Suite 12',
                address_city: 'Mountain View',
                address_state: 'CA',
                address_zip: '94041',
                address_country: 'US',
            },
            from: {
                name: 'Rocky Mountain Health and Wellness',
                address_line1: '951 E Plaza Dr',
                address_line2: '#110',
                address_city: 'Eagle',
                address_state: 'ID',
                address_zip: '83616',
                address_country: 'US',
            },
            file: data,
            color: false,
            double_sided: false,
            data: {
                name: 'John Doe',
                balance: '$75.00',
                claimId: '123654',
                accountNumber: '3728947',
                todaysDate: today,
                visitDate: '3/26/2016',
                providerName: "Colleen Shackelford",
                facilityNumber: '(208) 938-5680',
                facilityName: 'Rocky Mountain Health and Wellness',
                address_city: 'Eagle',
                address_state: 'ID',
                today: today,
                subtotal: '$70.00',
                taxfees: '$5.00',
                email: 'info@rmhwclinic.com',
                website: '<span>hello</span>'
            }
        }

        Lob.letters.create(rmhw_obj, function (err, res) {
            console.log(err, res);
        });
    } else {
        console.log(err);
    }
});


