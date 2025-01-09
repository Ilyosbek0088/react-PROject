import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-4">
          <p className="text-center text-black text-lg mb-6">
            Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
          </p>
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="name" className="block text-sm text-black mb-1">Your Name</label>
                <input type="text" id="name" name="name" className="w-full border-black rounded-md shadow-sm focus:ring-black focus:border-black" />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="email" className="block text-sm text-black mb-1">Your Email</label>
                <input type="text" id="email" name="email" className="w-full border-black rounded-md shadow-sm focus:ring-black focus:border-black" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm text-black mb-1">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full border-black rounded-md shadow-sm focus:ring-black focus:border-black" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-black mb-1">Your Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border-black rounded-md shadow-sm focus:ring-black focus:border-black"></textarea>
            </div>
            <div className="text-left">
              <button type="submit" className="px-6 py-2 bg-black text-white rounded-md shadow hover:bg-black focus:ring-2 focus:ring-black focus:ring-offset-2">Send</button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264454505!2d69.1392805926193!3d41.28251254344918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1676120109722!5m2!1sen!2s"
            className="w-full h-72 mb-4 border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex justify-around text-center">
            <div>
              <i className="fa fa-map-marker text-2xl text-black mb-2"></i>
              <p className="text-black">Tashkent, Uzbekistan</p>
            </div>
            <div>
              <i className="fa fa-phone text-2xl text-black mb-2"></i>
              <p className="text-black">+(998)-99-065-42-43</p>
            </div>
            <div>
              <i className="fa fa-envelope text-2xl text-black mb-2"></i>
              <p className="text-black">jamshidzayniev10@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
