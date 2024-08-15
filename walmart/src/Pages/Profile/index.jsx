import { useState } from 'react';
import profileSvg from '../../assets/img/profile.svg';
import './profile.css';
export function Profile() {
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("1234 Main St, Springfield, IL 62701");
  const [about, setAbout] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

  return (
    <div className="main">
      <div className="img-container">
        <img src={profileSvg} alt="Profile-Pic" />
      </div>
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="store">
        <button>Link Your Store</button>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>{about}</p>
      </div>
      <div className="address">
        <h3>Address</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};
