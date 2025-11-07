import React from "react";

const MapComponent = () => {
  return (
    <section
      id="map"
      className="relative py-16 bg-teal-100 overflow-hidden"
      aria-labelledby="map-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Inner white card */}
        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-10 text-center relative z-10">
          <h2
            id="map-heading"
            className="text-3xl md:text-4xl font-bold text-teal-700 mb-6"
          >
            Find Us on the Map
          </h2>

          {/* Static fallback address for SEO + accessibility */}
          <p className="text-gray-700 mb-6 text-lg">
            <strong>Dr. Hansa&apos;s Crystal Dental Care</strong>
            <br />
            Shop 203, 1st Floor, Vikram Tower, Sapna Sangeeta Rd, Navlakha., Indore, Madhya Pradesh
          </p>

          {/* Google Map Embed */}
          <iframe
            title="Location map of Dr. Hansa's Crystal Dental Care in Indore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.727719581179!2d75.86761387452265!3d22.701177779400222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4ac191e671%3A0x3aebd56deec95a4c!2sDr.%20Hansa&#39;s%20Crystal%20Dental%20Care!5e0!3m2!1sen!2sin!4v1723843475874!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          />

          {/* Optional schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                name: "Dr. Hansa's Crystal Dental Care",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Shop 203, 1st Floor, Vikram Tower, Sapna Sangeeta Rd, Navlakha.",
                  addressLocality: "Indore",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "India",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "22.701177779400222",
                  longitude: "75.86761387452265",
                },
                url: "https://www.google.com/maps/place/Dr.+Hansa's+Crystal+Dental+Care",
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
