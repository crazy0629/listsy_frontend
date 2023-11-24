// import React from "react";
// import { BsArrowRight } from "react-icons/bs";
// import * as Styled from "./404.styles";

// export const NotFound: React.FC = () => {
//   return (
//     <Styled.NotFoundWrapper>
//       <h1>404</h1>
//       <h3>Oops! Page not found</h3>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
//         pretium faucibus leo nisl nulla pharetra nullam.
//       </p>
//       <>
//         <span>Go to Homepage</span>
//         <BsArrowRight />
//       </>
//     </Styled.NotFoundWrapper>
//   );
// };

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Libraries,
} from "@react-google-maps/api";

const libraries: Libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 40.7128, // default latitude
  lng: -74.006, // default longitude
};

const cities = [
  { name: "New York City", location: { lat: 40.7128, lng: -74.006 } },
  { name: "Los Angeles", location: { lat: 34.0522, lng: -118.2437 } },
  { name: "Chicago", location: { lat: 41.8781, lng: -87.6298 } },
  // Add more cities as needed
];

export const NotFound: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });

  const [googleApiKey, setGoogleApiKey] = useState("");

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleMarkerClick = (city: any) => {
    console.log(123, city);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={city.location}
            label={city.name}
            onClick={() => handleMarkerClick(city)}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
