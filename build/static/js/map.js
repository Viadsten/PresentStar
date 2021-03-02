"use strict";

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [59.932468, 30.34916],
    zoom: 11
  }),
      myPlacemark1 = new ymaps.Placemark([59.932468, 30.34916], {
    balloonContent: 'PresentStar'
  }, {
    iconLayout: 'default#image',
    iconImageClipRect: [[0, 0], [46, 64]],
    iconImageHref: 'static/images/svg/map-geo.png',
    iconImageSize: [46, 64],
    iconImageOffset: [-46, -64]
  });
  myMap.geoObjects.add(myPlacemark1);
}