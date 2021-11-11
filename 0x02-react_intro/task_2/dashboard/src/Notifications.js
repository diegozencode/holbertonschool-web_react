import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';

function Notifications() {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button style={{
          float: 'right',
          marginTop: '-70px',
        }} aria-label='Close'>
          <img src={closeIcon} alt='close' />
        </button>
      </div>
    </>
  );
};

export default Notifications;
