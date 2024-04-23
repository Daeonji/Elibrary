import React from "react";
import pic from ".//images/library.jpg";
import anotherPic from ".//images/building.jpg"; // Import the second image

function Home() {
  return (
    <div>
      {/* First Row: Image and Text */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: "50px", // Add margin to create space
        }}
      >
        <img
          src={pic}
          alt="Library"
          style={{ width: "100%", height: "400px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1>Welcome to Danny's Elibrary Website</h1>
            <h4>Where creativity blooms, possibilities flourish</h4>
          </div>
        </div>
      </div>

      {/* Second Row: Another Picture */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>How can we help you ?</h1>
        <div>
          <p>
            If the options above aren't what you're looking for, try emailing us
          </p>
        </div>
        <div style={{ maxWidth: "600px", paddingLeft: "30px" }}>
          <img src={anotherPic} alt="Building" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
