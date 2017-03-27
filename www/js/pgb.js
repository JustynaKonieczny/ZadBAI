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


function businessCard() {
	info = 'Imie i nazwisko: JUSTYNA KONIECZNY' + '\n' +
		'Email: kojustynka@gmail.com' + '\n' +
		'Website: brak' + '\n' +
		'Grupa dziekanska: KrDUIS1012' + '\n' +
		'Kierunek studiow: Informatyka Stosowana' + '\n' +
		'Przedmiot: Bogate Aplikacje Internetowe';
	
	navigator.notification.alert(info);

}
