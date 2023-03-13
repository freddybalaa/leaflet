alert('freddy!')
var map = L.map('map').setView([34.0697,-118.4432], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([33.839894, 35.534677]).addTo(map)
		.bindPopup('Freddy balaa  <br> Home')
		.openPopup();	