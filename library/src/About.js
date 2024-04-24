import React from 'react';
import pic from '..//src//images//library2.jpg';
import pic2 from '..//src//images//elib.jpg';

const About = () => {
    return (
        <>
    <div
        style={{
            position: "relative",
            textAlign: "left",
            marginBottom: "20px",
        }}
    >
        <img
            src={pic}
            alt="Library"
            style={{ width: "100%", height: "300px" }}
        />
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "15%",
                transform: "translate(-50%, -50%)",
                color: "white",
            }}
        >
            <div>
                <h1>ABOUT US</h1>
            </div>
        </div>
    </div>
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "250px", // Adjust paddingLeft to move the text box right
            marginTop: "20px", // Adjust margin as needed
        }}
    >
        <div style={{ flex: "1", maxWidth: "700px", padding: "40px"}}>
            <h4>Welcome to Danny's Elibrary!</h4>
            <p>At Danny's Elibrary, we believe in the power of knowledge and the joy of reading. Our mission is to provide a digital sanctuary where book lovers of all ages can explore, discover, and immerse themselves in a world of literature.</p>
            <p>With an extensive collection of e-books spanning various genres, from timeless classics to contemporary bestsellers, we aim to cater to every literary taste and preference. Whether you're seeking an enthralling mystery, a heartwarming romance, or thought-provoking non-fiction, our curated selection has something for everyone.</p>
            <p>You can <a href = "mailto:dannyelibrary@gmail.com">email us</a> or call 713-555-1235 (During business hours only).</p>
            <p>Start exploring today and embark on a journey of literary discovery with Danny's Elibrary.</p>
            <p>Happy reading!</p>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
            <img
                src={pic2}
                style={{ width: "600px", height: "400px" }} // Adjust dimensions as needed
            />
        </div>
    </div>
</>

    )
}

export default About;
