import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { UserContext } from "../Context/user";

const SignupGeo = () => {
    const { user, errors, updateMyProfile } = useContext(UserContext);

    const [position, setPosition] = useState({ lat: 0, lng: 0 });

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    useEffect(() => {
        let map, infoWindow;

        if (isLoaded) {
            map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 0, lng: 0 },
                zoom: 1,
                disableDefaultUI: true,
            });
            infoWindow = new window.google.maps.InfoWindow();

            const locationButton = document.createElement("button");

            locationButton.textContent = "Find Me";
            locationButton.classList.add("custom-map-control-button");
            map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
                locationButton
            );
            locationButton.addEventListener("click", () => {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            };

                            setPosition(pos);

                            infoWindow.open(map);
                            map.setZoom(12)
                            map.setCenter(pos);

                        },
                        () => {
                            handleLocationError(true, infoWindow, map.getCenter());
                        }
                    );
                } else {

                    handleLocationError(false, infoWindow, map.getCenter());
                }
            });

            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(
                    browserHasGeolocation
                        ? "Error: The Geolocation service failed."
                        : "Error: Your browser doesn't support geolocation."
                );
                infoWindow.open(map);
            }
        }
    }, [isLoaded]);

    const handleUpdateLocation = () => {
        updateMyProfile(position);
    };

    return (
        <div className="signup-map-container">
            <div>
                <h2>Location</h2>

                <small>Only you can see your location. </small>
                <div id="map" style={{ height: "400px", width: "500px" }}></div>
                <br />
                <button
                    type="submit"
                    className="primary-button"
                    onClick={handleUpdateLocation}
                >
                    Save
                </button>
                <br />
                {errors.map((error, index) => (
                    <small key={index} className="errors">
                        {error}
                    </small>
                ))}
                <br />
                <br />
            </div>
        </ div>
    );
};

export default SignupGeo;