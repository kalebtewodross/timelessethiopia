var map = L.map('map').setView([9.145, 40.4897], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Axum
var marker = L.marker([14.1211, 38.7246]).addTo(map);
marker.bindPopup("<b>Axum</b><br>Ancient city, home of the Obelisks and Queen of Sheba legends.");

// Lalibela
var marker = L.marker([12.0312, 39.0478]).addTo(map);
marker.bindPopup("<b>Lalibela</b><br>Rock-hewn churches, a UNESCO World Heritage Site.");

// Gondar
var marker = L.marker([12.61, 37.46]).addTo(map);
marker.bindPopup("<b>Gondar</b><br>Fasil Ghebbi castle complex and churches.");

// Harar
var marker = L.marker([9.3111, 42.1256]).addTo(map);
marker.bindPopup("<b>Harar</b><br>Walled city, UNESCO World Heritage Site, Islamic heritage.");

// Simien Mountains
var marker = L.marker([13.1833, 38.0667]).addTo(map);
marker.bindPopup("<b>Simien Mountains</b><br>UNESCO natural heritage site with spectacular views.");

// Tiya
var marker = L.marker([8.4333, 38.6167]).addTo(map);
marker.bindPopup("<b>Tiya</b><br>Archaeological site with ancient standing stones.");

// Debre Damo
var marker = L.marker([14.2931, 39.5828]).addTo(map);
marker.bindPopup("<b>Debre Damo</b><br>Monastery atop a cliff, accessible by rope.");

// Yeha
var marker = L.marker([14.2747, 39.1864]).addTo(map);
marker.bindPopup("<b>Yeha</b><br>Ruins of a pre-Aksumite temple.");

// Battle of Adwa Site
var marker = L.marker([14.1750, 38.9000]).addTo(map);
marker.bindPopup("<b>Battle of Adwa Site</b><br>Site of Ethiopia's 1896 victory over Italian forces.");

// Addis Ababa
var marker = L.marker([9.0300, 38.7400]).addTo(map);
marker.bindPopup("<b>Addis Ababa</b><br>Capital city with National Museum and historic landmarks.");
