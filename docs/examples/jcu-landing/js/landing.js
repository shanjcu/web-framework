/* jslint browser: true, jquery: true */
/* globals google: false */
(function() {
  'use strict';

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - $('.navbar-custom').height() * 1.2
      }, 1000, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') !== 'dropdown-toggle active' &&
        $(this).attr('class') !== 'dropdown-toggle') {
      $('.navbar-toggle:visible').click();
    }
  });

  // Google Maps
  var map = null;
  var mapMarker = null;

  // When the window has finished loading create our google map below
  google.maps.event.addDomListener(window, 'load', function() {

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Get the marker's lat and long from the DOM
    var mapData = $(mapElement).data();
    mapMarker = new google.maps.LatLng(
      parseFloat(mapData.markerLat),
      parseFloat(mapData.markerLgn));

      // Basic options for a simple Google Map`
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
        zoom: 6,
        center: mapMarker,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true
      };

      // Create the Google Map using out element and options defined above
      map = new google.maps.Map(mapElement, mapOptions);

      // Custom Map Marker icon
      var image = 'img/marker.svg';
      var locationMarker = new google.maps.Marker({
        position: mapMarker,
        map: map,
        icon: image
      });
      locationMarker.addListener('click', function() {
        map.setCenter(mapMarker);
        map.setZoom(16);
      });
  });
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(mapMarker);
  });
})();
