window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XK2XKEB0H7');

function initMap() {
    var center = { lat: 25, lng: 120 };
    var locations = [
        ['Hometown', 25.0689, 121.5909, 'TW'],
        ['Hong Kong', 22.3193, 114.1694, 'CN'],
        ['Waikato University', -37.7869, 175.3185, 'NZ'],
        ['Auckland', -36.8509, 174.7645, 'NZ'],
        ['Rotorua', -38.1446, 176.2378, 'NZ'],
        ['Raglan', -37.8232, 174.8906, 'NZ'],
        ['National Cheng Kung University', 22.9989, 120.2169, 'TW'],
        ['Alishan National Forest', 23.5113, 120.8037, 'TW'],
        ['Penghu', 23.5712, 119.5793, 'TW'],
        ['Lambai Island', 22.3404, 120.3715, 'TW'],
        ['Green Island', 22.6621, 121.4901, 'TW'],
        ['National Taiwan University', 25.0173, 121.5398, 'TW'],
        ['Madison', 43.0731, -89.4012, 'US'],
        ['Yellowstone National Park', 44.4280, -110.5885, 'US'],
        ['Grand Teton National Park', 43.7904, -100.6818, 'US'],
        ['Oshkosh', 44.0247, -88.5426, 'US'],
        ['Milwaukee', 43.0389, -87.9065, 'US'],
        ['Chicago', 41.8781, -87.6298, 'US'],
        ['Shanghai', 31.2304, 121.4737, 'CN'],
        ['Sanxiantai', 23.1261, 121.4217, 'TW'],
        ['Brown Blvd', 23.0988, 121.2126, 'TW'],
        ['Luye Highlands', 22.9164, 121.1216, 'TW'],
        ['Seoul', 37.5665, 126.9780, 'KR'],
        ['Tokyo', 35.6762, 139.6503, 'JP'],
        ['Nanbin Park', 23.9664, 121.6092, 'TW'],
        ['Chisingtan', 24.0314, 121.6272, 'TW'],
        ['Liyu Lake', 23.9278, 121.5099, 'TW'],
        ['Sun Moon Lake', 23.8573, 120.9159, 'TW'],
        ['Xitou', 23.6745, 120.7973, 'TW'],
        ['Shanlinxi Forest', 23.6368, 120.7947, 'TW'],
        ['Wufengqi Waterfall', 24.8342, 121.7470, 'TW'],
        ['Water Geothermal Square', 24.6118, 121.6366, 'TW'],
        ['Macao', 22.1987, 113.5439, 'CN'],
        ['Sydney', -33.8688, 151.2093, 'AU'],
        ['Guam', 13.4443, 144.7937, 'US'],
        ['Bangkok', 13.7563, 100.5018, 'TH'],
        ['Phuket', 7.8804, 98.3923, 'TH'],
        ['Ayutthaya', 14.3692, 100.5877, 'TH'],
        ['Amphawa', 13.3602, 99.9130, 'TH'],
        ['Osaka', 34.6937, 135.5023, 'JP'],
        ['Kyoto', 35.0116, 135.7681, 'JP'],
        ['Nara', 34.6851, 135.8048, 'JP'],
        ['Xinshe Castle', 24.1881, 120.8134, 'TW'],
        ['Qingjing Farm', 24.0585, 121.1628, 'TW'],
        ['Fushan Botanical Garden', 24.7564, 121.5946, 'TW'],
        ['Honolulu', 21.3069, -157.8583, 'US'],
        ['Big Island of Hawaii', 19.5429, -155.6659, 'US'],
        ['Sapporo', 43.0618, 141.3545, 'JP'],
        ['Otaru', 43.1902, 140.9942, 'JP'],
        ['Asahikawa', 43.7709, 142.3650, 'JP'],
        ['Bihoro', 43.8238, 144.1072, 'JP'],
        ['Lake Mashu', 43.5872, 144.5238, 'JP'],
        ['Furano', 43.3420, 142.3832, 'JP'],
        ['Lukang Old Street', 24.0559, 120.4329, 'TW'],
        ['Guanwu National Forest', 24.5059, 121.1141, 'TW'],
        ['Lalashan', 24.7303, 121.4342, 'TW'],
        ['Milan', 45.4642, 9.1900, 'IT'],
        ['Verona', 45.4384, 10.9916, 'IT'],
        ['Venice', 45.4408, 12.3155, 'IT'],
        ['Bologna', 44.4949, 11.3426, 'IT'],
        ['Florence', 43.7696, 11.2558, 'IT'],
        ['Pisa', 43.7228, 10.4017, 'IT'],
        ['Rome', 41.9028, 12.4964, 'IT'],
        ['Vatican City', 41.9029, 12.4534, 'VA'],
        ['Pompei', 40.7462, 14.4989, 'IT'],
        ['Mingchi National Forest', 24.6509, 121.4715, 'TW'],
        ['Dongyanshan National Forest', 24.8251, 121.4176, 'TW'],
        ['Xinfeng Mangrove Nature Reserve', 24.9097, 120.9720, 'TW'],
        ['Shei-Pa National Park', 24.4495, 120.8796, 'TW'],
        ['National Museum of Marine Biology & Aquarium', 22.0460, 120.6989, 'TW'],
        ['Hengchun', 22.0008, 120.7448, 'TW'],
        ['Kenting National Park', 21.9483, 120.7798, 'TW'],
        ['Wuling Farm', 24.3450, 121.3082, 'TW'],
        ['Huisun Forest', 24.0870, 121.0339, 'TW'],
        ['University of Pittsburgh', 40.4444, -79.9608, 'US'],
        ['Niagara Falls', 43.0962, -79.0377, 'US'],
        ['Watkins Glen State Park', 42.3671, -76.9017, 'US'],
        ['Blackwater Falls State Park', 39.1077, -79.4951, 'US'],
        ['Monongahela National Forest', 38.6278, -79.8297, 'US'],
        ['Washington DC', 38.9072, -77.0369, 'US'],
        ['Ohiopyle State Park', 39.8680, -79.4942, 'US'],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 1.5,
    });

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
        google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
            return function() {
                infowindow.close(map, marker);
            }
        })(marker, i));
    }
}