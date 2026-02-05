import React from 'react';
import './Page3.css'; // Import the new CSS file

function Page3() {
  return (
    <div className="page-content">
      <h1>About the Team</h1>
      <p>Meet the talented individuals who built this application.</p>
      
      {/* --- Author 1 (Image Left) --- */}
      <div className="author-card">
        <div className="author-image">
          {/* Using a placeholder image. Replace with your own! */}
          <img src="https://picsum.photos/id/1005/200/200" alt="Venkatesh" />
        </div>
        <div className="author-details">
          <h2>Jane Doe</h2>
          <p>Venkatesh is a front-end wizard who designed the entire user experience. With a passion for clean code and responsive design, she brought the app to life.</p>
        </div>
      </div>

      {/* --- Author 2 (Image Right) --- */}
      <div className="author-card">
        <div className="author-image">
          <img src="https://picsum.photos/id/1012/200/200" alt="Vinay" />
        </div>
        <div className="author-details">
          <h2>John Smith</h2>
          <p>Vinay is the backend guru. He built the entire API, managed the database, and ensured all the data is secure and scalable. He loves coffee and debugging.</p>
        </div>
      </div>

      {/* --- Author 3 (Image Left) --- */}
      <div className="author-card">
        <div className="author-image">
          <img src="https://picsum.photos/id/1027/200/200" alt="Sagar" />
        </div>
        <div className="author-details">
          <h2>Sagar</h2>
          <p>Sagar the machine learning integration, turning complex data models into a functional part of the app. She is a data scientist with a flair for creative problem-solving.</p>
        </div>
      </div>

    </div>
  );
}

export default Page3;