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

/*FUNKCJA POLACZENIA Z SIECIA https://github.com/apache/cordova-plugin-network-information*/
function checkingConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'Brak polaczenia';

navigator.notification.alert(
    'Typ polaczenia: ' + states[networkState]);
}
checkConnection();
