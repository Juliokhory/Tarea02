function iniciar() {
var mapOptions = {
        center: new google.maps.LatLng(-17.385248, -66.143916),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

var mapa = new google.maps.Map(document.getElementById("mapa"),mapOptions);

var ubimm = new google.maps.LatLng(-17.377062, -66.144172);
var marca1 = new google.maps.Marker({
        position: ubimm,
        map: mapa,
        title: 'Centro de Operaciones MOKAMINT',
    });

function MostrarInfo() {
var infowindow = new google.maps.InfoWindow({
        content: 'Centro de operaciones MOKAMINT <a href="http://www.mokamint.com/">MOKAMINT</a>'
    });

infowindow.open(mapa,marca1);}

//Dispara accion al dar un clic en el marcador
google.maps.event.addListener(marca1, 'click', MostrarInfo);

var casa = new google.maps.LatLng(-17.394803, -66.138385);
var marca2 = new google.maps.Marker({
        position: casa,
        title: 'Ex casa del DEV mas OP',
        map: mapa,
    });
var infomarca = new google.maps.InfoWindow({
        content: 'Ex casa del DEV mas OP'
    });
    infomarca.open(mapa, marca2);
}
