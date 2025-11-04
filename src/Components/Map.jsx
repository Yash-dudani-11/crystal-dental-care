import React from 'react';

const MapComponent = () => {
  return (
    <div id='map' className="map-container mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.727719581179!2d75.86761387452265!3d22.701177779400222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4ac191e671%3A0x3aebd56deec95a4c!2sDr.%20Hansa&#39;s%20Crystal%20Dental%20Care!5e0!3m2!1sen!2sin!4v1723843475874!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '10px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  );
};

export default MapComponent;
