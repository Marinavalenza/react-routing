import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./locations.module.scss";

import { roomList } from "../../mocks/locations";

console.log(roomList);

export default function () {
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);

  const onHandleClick = (id) => navigate(`/locations/${id}`);

  const onLocationRender = () =>
    roomList.map(({ imageLocation, location, id }) => (
      <img
        onClick={() => onHandleClick(id)}
        src={imageLocation}
        alt={location}
        key={location}
      />
    ));
  return (
    <div className="Location">{roomList.lenght ? onLocationRender : ""}</div>
  );
}
