

const ContactPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-400 text-center mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div className="card bg-base-100 shadow-xl p-6">
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-gray-800">Our Contact Information</h2>
            <p className="text-gray-600">📍 Address: 123 Motijheeel C/A Dhaka-1200</p>
            <p className="text-gray-600">📞 Phone: +015 2120 3296</p>
            <p className="text-gray-600">✉ Email: hello@studystream.io</p>
            <p className="text-gray-600">⏰ Office Hours: Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Embedded Location */}
        <div className="lg:shadow-xl  p-6">
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-gray-800">Our Location</h2>
            <iframe
              title="Google Map"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902472266737!2d90.39126241429795!3d23.75098498458801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894ab0e8f57%3A0x5f0e3f3f3f3f3f3f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
