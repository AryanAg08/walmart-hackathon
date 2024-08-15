import profileSvg from '../../assets/img/profile.svg';
import './profile.css';
export function Profile() {
  return (
    <div className="main">
      <div className="img-container">
        <img src={profileSvg} alt="Profile-Pic" />
      </div>
      <div className="name">
        <h2>John Doe</h2>
      </div>
      <div className="change">
        <button>Edit Profile</button>
      </div>
      <div className='store'>
        <button>Link Your Store</button>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="address">
        <h3>Address</h3>
        <p>1234 Main St, Springfield, IL 62701</p>
      </div>
    </div>
  );
};