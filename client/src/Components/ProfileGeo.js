import React, { useEffect, useContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { UserContext } from "../Context/user";

const ProfileGeo = () => {

    const { user } = useContext(UserContext);

    // const [position, setPosition] = useState({ lat: 0, lng: 0 });

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    useEffect(() => {
        //eslint-disable-next-line
        let map

        if (isLoaded) {
            //eslint-disable-next-line
            map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: user.profile.lat, lng: user.profile.lng },
                zoom: 13,
                disableDefaultUI: true,
            });
            // infoWindow = new window.google.maps.InfoWindow();

            // const locationButton = document.createElement("button");

            // locationButton.textContent = "Find Me";
            // locationButton.classList.add("custom-map-control-button");
            // map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
            //     locationButton
            // );

            // locationButton.addEventListener("click", (e) => {
            //     e.preventDefault();
            //     if (navigator.geolocation) {
            //         navigator.geolocation.getCurrentPosition(
            //             (position) => {
            //                 const pos = {
            //                     lat: position.coords.latitude,
            //                     lng: position.coords.longitude,
            //                 };
            //                 setPosition(pos);
            //                 onSetLocation(pos);
            //                 infoWindow.open(map);
            //                 map.setZoom(13)
            //                 map.setCenter(pos);

            //             },
            //             () => {
            //                 handleLocationError(true, infoWindow, map.getCenter());
            //             }
            //         );
            //     } else {

            //         handleLocationError(false, infoWindow, map.getCenter());
            //     }
            // });

            // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            //     infoWindow.setPosition(pos);
            //     infoWindow.setContent(
            //         browserHasGeolocation
            //             ? "Error: The Geolocation service failed."
            //             : "Error: Your browser doesn't support geolocation."
            //     );
            //     infoWindow.open(map);
            // }
        }
    });

    return (
        <div className="signup-map-container">
            <div>
                <small> Your location </small>
                <div id="map" style={{ height: "400px", width: "500px" }}></div>
            </div>
        </ div>
    );
};

export default ProfileGeo;