import React, { useState } from 'react';
import './Page2.css'; // Import the new CSS file

// 1. Your FAQ data
const faqs = [
  {
    q: "What is this project?",
    a: "This is a full-stack, reactive web application built with a React frontend, a Node.js/Express backend, and a MySQL database. It features user authentication and a live grammar-correction tool."
  },
  {
    q: "How does the grammar correction work?",
    a: "The 'Analytics' page (Page 1) connects to a separate, dedicated AI microservice. This service is a Python Flask server running a fine-tuned BART transformer model. When you send text, it's processed by the AI, and the corrected version is streamed back."
  },
  {
    q: "Is my data secure?",
    a: "Yes. User authentication is handled with industry-standard practices. Passwords are 'hashed' and 'salted' using bcrypt before being stored in the database, meaning no one (not even us) can see your actual password. All communication is done over a secure API."
  },
  {
    q: "Who built this application?",
    a: "This application was built by the talented developers listed on the 'About' page. Check them out to learn more about the team!"
  }
];

function Page2() {
  // 2. State to track which item is open
  const [selected, setSelected] = useState(null);

  // 3. Function to open/close items
  const toggle = (i) => {
    if (selected === i) {
      // If you click the open one, close it
      return setSelected(null);
    }
    // Otherwise, open the one you clicked
    setSelected(i);
  };

  return (
    <div className="page-content">
      <h1>Frequently Asked Questions</h1>
      
      <div className="faq-accordion">
        {/* 4. Map over your data to create the items */}
        {faqs.map((item, i) => (
          // Add 'open' class if the item is selected
          <div className={selected === i ? 'faq-item open' : 'faq-item'} key={i}>
            
            {/* The clickable title */}
            <div className="faq-title" onClick={() => toggle(i)}>
              <h2>{item.q}</h2>
              {/* Change the icon based on the state */}
              <span>{selected === i ? '–' : '+'}</span>
            </div>

            {/* The hidden content */}
            <div className={selected === i ? 'faq-content show' : 'faq-content'}>
              {/* Use a p tag for better text styling */}
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Page2;