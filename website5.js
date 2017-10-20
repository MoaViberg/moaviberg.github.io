(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v2.10';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function initMap() {
        var option = {
        	lat: 30.2735345, lng: 15.0816046};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: option
        });


	setMarkers(map);
      }

      // Data for the markers consisting of a name, a LatLng and a zIndex for the
      // order in which these markers should display on top of each other.
      var schools = [
        ['Swedish School in Nairobi', -1.299887, 36.769017, 4],
        ['Swedish School in Fuengirola', 36.551610, -4.619347, 5],
        ['Swedish School in Madrid', 40.510635, -3.614062, 3],
        ['Scandinavian School of Brussels', 50.718171, 4.430798, 2],
        ['Swedish School in London', 51.485053, -0.244365, 1],
        ['Swedish School in Paris', 48.880528, 2.302871, 6],
      ];
     function setMarkers(map) {
        var image = {
          url: 'pin.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < schools.length; i++) {
          var school = schools[i];
          var marker = new google.maps.Marker({
            position: {lat: school[1], lng: school[2]},
            map: map,
            icon: image,
            title: school[0],
            zIndex: school[3]
          });
        }
      }


var oddtrivia = []
oddtrivia[0] = "Swedish School in Paris";
oddtrivia[1] = "Swedish School in London";
oddtrivia[2] = "Scandinavian School of Brussels";
oddtrivia[3] = "Swedish School in Madrid";
oddtrivia[4] = "Swedish School in Fuengirola";
oddtrivia[5] = "Swedish School in Nairobi";

function oddTrivia() {
  var randomTrivia = Math.floor(Math.random()*(oddtrivia.length));
  document.getElementById('container').innerHTML = oddtrivia[randomTrivia];




}


