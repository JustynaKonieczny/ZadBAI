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


/*Function form 
https://www.raymondcamden.com/2014/12/23/cordova-demo-viewing-all-contacts
and
https://cordova.apache.org/docs/en/1.5.0/phonegap/accelerometer/accelerometer.watchAcceleration.html
and*/

document.addEventListener("deviceready", init, false);
function init() {

    navigator.contacts.find(
        [navigator.contacts.fieldType.displayName],
        gotContacts,
        errorHandler);

}

function errorHandler(e) {
    console.log("errorHandler: "+e);
}

function gotContacts(c) {
    console.log("gotContacts, number of results "+c.length);
    for(var i=0, len=c.length; i<len; i++) {
        console.dir(c[i]);
    }
}
