function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Czesc, to ja, Twoja apka na telefonie o parametrach :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function meInfo() {
	info = 	'Imie i nazwisko: JUSTYNA KONIECZNY' + '\n' +
		'Kierunek: Informatyka Stosowana' + '\n' +
		'Uczelnie: UEK dzienne SUM' + '\n' +
		'Przedmiot: BOGATE APLIKACJE INTERNETOWE' + '\n' + 
		+ '\n' + '\n' + 
		'#JavaScript' + '\n' + 
		'Programuje w JavaScript';
	
	navigator.notification.alert(info);
}


/*PLUGIN DO WYSYLANIA SMSOW ZE STRONY
https://github.com/cordova-sms/cordova-sms-plugin*/

var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};
