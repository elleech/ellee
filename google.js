window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XK2XKEB0H7');

function initMap() {
    var center = { lat: 25, lng: 120 };
    var locations = [
        // TW
        ['Hometown', 25.0689, 121.5909, 'TW'],
        ['National Cheng Kung University 成功大學', 22.9989, 120.2169, 'TW'],
        ['National Taiwan University 台灣大學', 25.0173, 121.5398, 'TW'],
        ['Yangmingshan National Park 陽明山', 25.1667, 121.5644, 'TW'],
        ['Wufengqi Waterfall 五峰旗', 24.8342, 121.7470, 'TW'],
        ['Fushan Botanical Garden 福山植物園', 24.7564, 121.5946, 'TW'],
        ['Water Geothermal Square 清水地熱', 24.6118, 121.6366, 'TW'],
        ['Dongyanshan National Forest 東眼山', 24.8251, 121.4176, 'TW'],
        ['Lalashan National Reserve 拉拉山', 24.7303, 121.4342, 'TW'],
        ['Mingchi National Forest 明池', 24.6509, 121.4715, 'TW'],
        ['Neidong National Forest 內洞', 24.832, 121.5268, 'TW'],
        ['Xinfeng Mangrove Nature Reserve 新豐紅樹林', 24.9097, 120.9720, 'TW'],
        ['Guanwu National Forest 觀霧', 24.5059, 121.1141, 'TW'],
        ['Shei-Pa National Park 雪霸', 24.4495, 120.8796, 'TW'],
        ['Wuling Farm 武陵農場', 24.3450, 121.3082, 'TW'],
        ['Huisun Forest 惠蓀林場', 24.0870, 121.0339, 'TW'],
        ['Qingjing Farm 清境農場', 24.0585, 121.1628, 'TW'],
        ['Gaomei Wetlands 高美濕地', 24.3121, 120.5497, 'TW'],
        ['Lukang Old Street 鹿港老街', 24.0559, 120.4329, 'TW'],
        ['Sun Moon Lake 日月潭', 23.8573, 120.9159, 'TW'],
        ['Xitou 溪頭', 23.6745, 120.7973, 'TW'],
        ['Shanlinxi Forest 杉林溪', 23.6368, 120.7947, 'TW'],
        ['Alishan National Forest 阿里山', 23.5113, 120.8037, 'TW'],
        ['Chisingtan 七星潭', 24.0314, 121.6272, 'TW'],
        ['Liyu Lake 鯉魚潭', 23.9278, 121.5099, 'TW'],
        ['Nanbin Park 南濱公園', 23.9664, 121.6092, 'TW'],
        ['Sanxiantai 三仙台', 23.1261, 121.4217, 'TW'],
        ['Luye Highlands 鹿野高台', 22.9164, 121.1216, 'TW'],
        ['Green Island 綠島', 22.6621, 121.4901, 'TW'],
        ['Penghu 澎湖', 23.5712, 119.5793, 'TW'],
        ['Lambai Island 小琉球', 22.3404, 120.3715, 'TW'],
        ['National Museum of Marine Biology & Aquarium 屏東海生館', 22.0460, 120.6989, 'TW'],
        ['Hengchun 恆春', 22.0008, 120.7448, 'TW'],
        ['Kenting National Park 墾丁', 21.9483, 120.7798, 'TW'],
        // JP & KR
        ['Sapporo', 43.0618, 141.3545, 'JP'],
        ['Otaru', 43.1902, 140.9942, 'JP'],
        ['Asahikawa', 43.7709, 142.3650, 'JP'],
        ['Bihoro', 43.8238, 144.1072, 'JP'],
        ['Lake Mashu', 43.5872, 144.5238, 'JP'],
        ['Furano', 43.3420, 142.3832, 'JP'],
        ['Tokyo', 35.6762, 139.6503, 'JP'],
        ['Osaka', 34.6937, 135.5023, 'JP'],
        ['Kyoto', 35.0116, 135.7681, 'JP'],
        ['Nara', 34.6851, 135.8048, 'JP'],
        ['Seoul', 37.5665, 126.9780, 'KR'],
        // CN
        ['Shanghai', 31.2304, 121.4737, 'CN'],
        ['Hong Kong', 22.3193, 114.1694, 'CN'],
        ['Macao', 22.1987, 113.5439, 'CN'],
        // TH
        ['Ayutthaya', 14.3692, 100.5877, 'TH'],
        ['Bangkok', 13.7563, 100.5018, 'TH'],
        ['Amphawa', 13.3602, 99.9130, 'TH'],
        ['Phuket', 7.8804, 98.3923, 'TH'],
        // NZ & AU
        ['Waikato University', -37.7869, 175.3185, 'NZ'],
        ['Auckland', -36.8509, 174.7645, 'NZ'],
        ['Rotorua', -38.1446, 176.2378, 'NZ'],
        ['Raglan', -37.8232, 174.8906, 'NZ'],
        ['Sydney', -33.8688, 151.2093, 'AU'],
        // IT
        ['Milan', 45.4642, 9.1900, 'IT'],
        ['Verona', 45.4384, 10.9916, 'IT'],
        ['Venice', 45.4408, 12.3155, 'IT'],
        ['Bologna', 44.4949, 11.3426, 'IT'],
        ['Florence', 43.7696, 11.2558, 'IT'],
        ['Pisa', 43.7228, 10.4017, 'IT'],
        ['Rome', 41.9028, 12.4964, 'IT'],
        ['Vatican City', 41.9029, 12.4534, 'VA'],
        ['Pompei', 40.7462, 14.4989, 'IT'],
        // US
        ['University of Pittsburgh', 40.4444, -79.9608, 'US'],
        ['Guam', 13.4443, 144.7937, 'US'],
        ['Honolulu', 21.3069, -157.8583, 'US'],
        ['Big Island of Hawaii', 19.5429, -155.6659, 'US'],
        ['Yellowstone National Park', 44.4280, -110.5885, 'US'],
        ['Grand Teton National Park', 43.7904, -110.6818, 'US'],
        ['Oshkosh', 44.0247, -88.5426, 'US'],
        ['Madison', 43.0731, -89.4012, 'US'],
        ['Milwaukee', 43.0389, -87.9065, 'US'],
        ['Chicago', 41.8781, -87.6298, 'US'],
        ['Cleveland', 41.4993, -81.6944, 'US'],
        ['Niagara Falls', 43.0962, -79.0377, 'US'],
        ['Presque Isle State Park', 42.1586, -80.1149, 'US'],
        ['Watkins Glen State Park', 42.3671, -76.9017, 'US'],
        ['Ohiopyle State Park', 39.8680, -79.4942, 'US'],
        ['Blackwater Falls State Park', 39.1077, -79.4951, 'US'],
        ['Monongahela National Forest', 38.6278, -79.8297, 'US'],
        ['Washington DC', 38.9072, -77.0369, 'US'],
        ['Shenandoah National Park', 38.4755, -78.4535, 'US'],
        ['Virginia Beach', 36.8529, -75.9780, 'US'],
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