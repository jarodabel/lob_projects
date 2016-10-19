fs = require('fs');

var filePath = './templates/generic_no_table.html';

var serviceHtml = "" +
    "<div class='service-list-row'>" +
    "<div class='service-list-cell'>service one</div>" +
    "<div class='service-list-cell'>$80.00</div>" +
    "</div>" +
    "<div class='service-list-row'>" +
    "<div class='service-list-cell'>service two</div>" +
    "<div class='service-list-cell'>$40.00</div>" +
    "</div>";

// serviceHtml = JSON.stringify(serviceHtml.html)
//     .replace(new RegExp('\/', 'g'), '&#92;')
//     .replace(new RegExp('"', 'g'), '');


function getDataObj(key, fileData) {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var today = monthNames[month] + ' ' + day + ', ' + year;

    if (key === 'temp_obj_no_table') {
        fileData = fileData.replace('serviceListReplaceBlock', serviceHtml);
    }
    var dataStore = {
        temp_obj_simple: {
            description: "Generic Simple Example",
            to: {
                name: 'Nelson SM',
                address_line1: '123 Test Street',
                address_line2: 'Suite 12',
                address_city: '',
                address_state: 'CA',
                address_zip: '94041',
                address_country: 'US'
            },
            from: {
                name: 'Southwest Catus Clinic',
                address_line1: '123 Test Avenue',
                address_city: 'Kansas City',
                address_state: 'MO',
                address_zip: '64110',
                address_country: 'US'
            },
            file: fileData,
            color: false,
            double_sided: false,
            data: {
                name: 'Nelson Smith',
                balance: '$75.00',
                claimId: '123654',
                accountNumber: '3728947',
                todaysDate: today,
                visitDate: '3/26/2016',
                clinicname: 'Southwest Catus Clinic',
                providerName: "Patches O'Houlihan",
                facilityNumber: '(816) 555-5655',
                facilityName: 'Hillside',
                address_city: 'Mountain View',
                address_state: 'CA',
                today: today,
                subtotal: '$70.00',
                taxfees: '$5.00',
                email: 'info@hemmahealth.com',
                website: 'hemmahealth.com'
            }
        },
        temp_obj_no_table: {
            description: "Generic No Table Example",
            to: {
                name: 'Nelson Smith',
                address_line1: '123 Test Street',
                address_line2: 'Apt 12',
                address_city: "Lee's Summit",
                address_state: 'MO',
                address_zip: '64063',
                address_country: 'US'
            },
            from: {
                name: 'Southmoreland Clinic',
                address_line1: '5149 Oak Avenue',
                address_city: 'Kansas City',
                address_state: 'MO',
                address_zip: '64110',
                address_country: 'US'
            },
            file: fileData,
            color: false,
            double_sided: false,
            data: {
                name: 'Nelson Smith',
                balance: '$120.00',
                claimId: '123654',
                accountNumber: '3728947',
                todaysDate: today,
                visitDate: '3/26/2016',
                clinicName: 'Southmoreland Clinic',
                providerName: "Patches O'Houlihan",
                facilityNumber: '(816) 555-5655',
                facilityName: 'Gillham Park',
                address_line_1: '5149 Oak Avenue',
                address_city: 'Kansas City',
                address_state: 'MO',
                address_zip: '64110',
                today: today,
                subtotal: '$70.00',
                taxfees: '$5.00',
                email: 'info@hemmahealth.com',
                website: 'hemmahealth.com'
            }
        },
        rmhw_obj: {
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
            file: fileData,
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
    };
    return dataStore[key]
}

function readFunction(err, data) {
    if (!err) {

        var dataObj = getDataObj('temp_obj_no_table', data);

        var Lob = require('Lob')('test_546c65dfaf8aa7ce4514678e4a0bb7fae74', {
            apiVersion: '2016-06-30'
        });

        Lob.letters.create(dataObj, function (err, res) {
            console.log(err, res);
        });
    } else {
        console.log(err);
    }
}

fs.readFile(filePath, {encoding: 'utf-8'}, readFunction);


