import React from 'react';
import './contact.css'; // Import CSS file for styling
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

const ContactUs = () => {
  return (
    <>
      <Topbar />
     
      <div className="contacts-container"> {/* Use the class name from contacts.css */}
        <h4>Contact Us</h4> {/* No need to add a class here, as it's styled by contacts.css */}
        <div className="contacts-content"> {/* You may remove this div if it's not necessary */}
          <p>
            Contact us for any inquiries or assistance. We are here to help you!
            Name: Ved Revadkar<br />
            Mobile: +91 95189 41300<br />
            Email: vedrevadkar@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
