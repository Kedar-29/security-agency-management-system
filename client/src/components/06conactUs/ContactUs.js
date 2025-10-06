import React from "react";

function ContactUs() {
  return (
    <div className="bg-white-100 min-h-screen p-6 flex flex-col items-center">
      <section className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      </section>

      <section className="max-w-4xl w-full bg-white p-6 shadow-lg rounded-lg">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone text-blue-500"></i>
            <span className="text-lg text-gray-700">Phone: +91 8123950735</span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="far fa-envelope text-blue-500"></i>
            <span className="text-lg text-gray-700">Email: tacticalpanther.bgm@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-map-marker-alt text-blue-500"></i>
            <span className="text-lg text-gray-700">
              Address: Parvati Nagar, 3652. Soudagar colony, B.K.Kangrali, Belagavi, Karnataka, 590010
            </span>
          </div>
        </div>
      </section>

      <section className="text-center py-6">
        <h3 className="text-xl font-bold text-gray-800">Google Map Location</h3>
        <p className="text-gray-600">Tactical Panthers Main Office</p>
      </section>

      {/* Centered Map with 80% Width */}
      <div className="flex justify-center w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.82941067396123!2d74.50166250677529!3d15.894889743915083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf615fc7c45e07%3A0x4af1fb5acfbdbbdd!2s108%2C%20Mahadev%20Rd%2C%20Kangrali%20Khurd%2C%20Belagavi%2C%20Karnataka%20590010!5e0!3m2!1sen!2sin!4v1693297142026!5m2!1sen!2sin"
          width="80%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
