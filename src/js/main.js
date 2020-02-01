$(document).ready(function(){

    $('.header__down').on('click', function(){        
      let dest = document.querySelector('.projects'); 
        $('html,body').animate({ 
          scrollTop: $(dest).offset().top}, 700);
    });

    $('#project').on('click', function(){        
      let dest = document.querySelector('.projects'); 
        $('html,body').animate({ 
          scrollTop: $(dest).offset().top}, 700);
    });

    $('#news').on('click', function(){        
      let dest = document.querySelector('.news'); 
        $('html,body').animate({ 
          scrollTop: $(dest).offset().top}, 700);
    });

    $('#gallery').on('click', function(){        
      let dest = document.querySelector('.gallery'); 
        $('html,body').animate({ 
          scrollTop: $(dest).offset().top}, 700);
    });

    $('#contact').on('click', function(){        
      let dest = document.querySelector('.contact'); 
        $('html,body').animate({ 
          scrollTop: $(dest).offset().top}, 700);
    });

    $("#news__slider").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        dotsEach: 1,                           
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $(".header__slider").owlCarousel({
      items: 1,
      loop: true,      
      nav: false,
      dots: true,
      dotsEach: 1,
      autoplay: true,
      mouseDrag: true,
      dotsClass: 'header__dots',
      dotClass: 'header__dot',                                 
      autoplayTimeout: 2000,
      animateIn: 'slideInUp',
      animateOut: "slideOutUp"    
  });
    
    $('.owl-prev span').html('<img src="../img/news/prev.png"></img>');
    $('.owl-next span').html('<img src="../img/news/next.png"></img>');

    $(".gallery__image").click(function(){	// Событие клика на маленькое изображение
	  	let img = $(this);	// Получаем изображение, на которое кликнули
		let src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$(".gallery").append("<div class='gallery__container'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='gallery__grey'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src="+src+" class='gallery__large' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".gallery__container").fadeIn(800); // Медленно выводим изображение
		$(".gallery__grey").click(function(){	// Событие клика на затемненный фон	   
			$(".gallery__container").fadeOut(400);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".gallery__container").remove(); // Удаляем разметку высплывающего окна
			}, 800);
		});
    });   
});

function initMap() {    
    let myLatLng = {lat: 40.677541, lng: -73.903475};    
    let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.671737, lng: -73.900000},
    zoom: 14,
    styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
    ]
    });
    

    let cityCircle = new google.maps.Circle({
      strokeColor: '#7e5aff',        
      strokeWeight: 0,        
      fillColor: '#7e5aff',
      fillOpacity: 0.4,
      map: map,
      center: myLatLng,
      radius: 250     
    });    

    let cityCircle2 = new google.maps.Circle({
        strokeColor: '#7e5aff',        
        strokeWeight: 0,        
        fillColor: '#7e5aff',
        fillOpacity: 0.2,
        map: map,
        center: myLatLng,
        radius: 450        
      });

    let cityCircle3 = new google.maps.Circle({
        strokeColor: '#7e5aff',        
        strokeWeight: 2,        
        fillColor: '#7e5aff',
        fillOpacity: 1,
        map: map,
        center: myLatLng,
        radius: 50        
      });

    cityCircle3.setMap(map);
    cityCircle3.addListener('click', showNewRect);
    infoWindow = new google.maps.InfoWindow();
    
    function showNewRect(event) {    
        let hello = '<div><p>Hello Beetroot</p></div>';
       
        infoWindow.setContent(hello);
        infoWindow.setPosition(myLatLng);
        infoWindow.open(map);
      }
}
