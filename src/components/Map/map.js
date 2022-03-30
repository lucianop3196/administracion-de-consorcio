// import * as React from "react";
// import { useEffect } from "react";

// const Map = () => {
//   useEffect(() => {
//       console.log(window);
//     window.initMap = function initMap() {
//       const myLatLng = { lat: -25.363, lng: 131.044 };
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: myLatLng,
//       });

//       new window.google.maps.Marker({
//         position: myLatLng,
//         map,
//         title: "Hello World!",
//       });
//     }
//     var script = document.createElement("script");
//     script.src =
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyDhj-a3JhjkljlOczdNIHz0QG8-29V4mn4&callback=initMap&v=weekly&channel=2";
//     document.getElementsByTagName("body")[0].appendChild(script);
//   }, []);

//   return <div id="map"></div>;
// };

// export default Map;
