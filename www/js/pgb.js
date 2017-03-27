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

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};


/*FUNKCJA WYKRYWANIA RUCHU URZADZENIA ZE STRONY
https://cordova.apache.org/docs/en/1.5.0/phonegap/accelerometer/accelerometer.watchAcceleration.html*/

function onError() {
    alert('onError!');
};

var options = { frequency: 1000 };  // Update every 1 second

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
