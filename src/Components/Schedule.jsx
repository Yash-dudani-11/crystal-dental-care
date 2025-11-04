import React, { useEffect } from 'react';

const ScheduleAppointment = () => {
  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center  bg-gray-100  overflow-hidden ">
      <h2 className="text-3xl font-bold mb-6">Schedule an Appointment</h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/abcdgef017/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </section>
  );
};

export default ScheduleAppointment;
