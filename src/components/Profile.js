import React from 'react';
import colors from './Colors';
import { ContactForm } from './Form';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  // Array of image sources
  const images = [
    require('../assets/images/caro/OIG.jpeg'),
    require('../assets/images/caro/OIG1.jpeg'),
    require('../assets/images/caro/OIG2.jpeg'),
    require('../assets/images/caro/OIG3.jpeg'),
    require('../assets/images/caro/OIG4.jpeg'),
    require('../assets/images/caro/OIG5.jpeg'),
    require('../assets/images/caro/OIG6.jpeg'),
    require('../assets/images/caro/OIG7.jpeg'),
    require('../assets/images/caro/OIG8.jpeg'),
    require('../assets/images/caro/OIG9.jpeg'),
    require('../assets/images/caro/OIG10.jpeg'),
    require('../assets/images/caro/OIG11.jpeg'),
    require('../assets/images/caro/OIG12.jpeg'),
    require('../assets/images/caro/OIG13.jpeg'),
    require('../assets/images/caro/OIG14.jpeg'),
    require('../assets/images/caro/OIG15.jpeg'),
    require('../assets/images/caro/OIG16.jpeg'),
    require('../assets/images/caro/OIG17.jpeg'),
    require('../assets/images/caro/OIG18.jpeg'),
    // Add more images as needed
  ];

  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,           // Enable autoplay
  autoplaySpeed: 2000,
};

return (
  <div style={{ width: '50%',flex:1, margin: 'auto' }}> {/* Adjust the width and margin */}
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Demo ${index + 1}`} style={{ height: '350px', width: '100%' }} />
        </div>
      ))}
    </Slider>
  </div>
);

};

const Profile = ({ screenHeight }) => {
  return (
    <div style={{ height: screenHeight, width: '100%', alignItems: "center" }}>
      <div style={{ display: 'flex',width:'90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '5%', width: '100%' }}>
        <div style={{ display: 'flex',flex:1, flexDirection: 'column',alignItems:'center' }}>
          <text style={{ color: colors.primary, fontSize: 40, fontWeight: 'bold' }}>Hi, I'm Zannah</text>
          <text style={{ color: "black", fontSize: 20, maxWidth: 450, color: "#676767", marginTop: 20 }} >Welcome! 🚀 I'm Consultant, specializing in XYZ. Excited to get things rolling? Hit 'Book Now,' peruse my schedule, grab a slot, make a seamless payment – and that's it! Let’s connect and bring your vision to life. See you soon!</text>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, width: '100%' }}>
            <div onClick={null} style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, backgroundColor: colors.primary }}><text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Book Now</text></div>
            <div onClick={null} style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, borderColor: colors.primary, borderStyle: 'solid', borderWidth: 1 }}><text style={{ color: colors.primary, fontSize: 24, fontWeight: 'bold' }}>More About me...</text></div>

          </div>
        </div>
        <ImageCarousel/>
       
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <img style={{ height: 30, width: 30, marginRight: 20, backgroundColor: "blue" }} />

        <img style={{ height: 30, width: 30, marginRight: 20, backgroundColor: "blue" }} />

        <img style={{ height: 30, width: 30, marginEnd: 20, backgroundColor: "blue" }} />
      </div>

    </div>
  );
};

export const NavBar = ({ style }) => {
  return (
    <div style={style}>
      <div style={{ flexDirection: 'row' }}>
        <img src={require('../assets/images/logo.png')} alt="Logo 1" style={{ height: 40, paddingLeft: 40, paddingRight: 20 }} />
      </div>

      <div style={{
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        markerEnd: 20,
        alignItems: 'center',
        padding: '10px',
      }}>
        <text alt="Logo 2" style={{ fontWeight: 'bold', paddingLeft: 20, paddingRight: 20, color: colors.primary }}>
          <span style={{ cursor: 'pointer' }} onClick={null}>
            Home
          </span>
        </text>
        <text style={{ fontWeight: 'bold', paddingLeft: 10, paddingRight: 20, color: colors.primary }}>
          <span style={{ cursor: 'pointer' }} onClick={null}>
            Pricing
          </span>
        </text>
        <text style={{ fontWeight: 'bold', paddingLeft: 10, paddingRight: 20, color: colors.primary }}>
          <span style={{ cursor: 'pointer' }} onClick={null}>
            About
          </span>
        </text>
        <text style={{ fontWeight: 'bold', paddingLeft: 10, paddingRight: 20, color: colors.primary }}>
          <span style={{ cursor: 'pointer' }} onClick={null}>
            Contact Me
          </span>
        </text>
      </div>

    </div>
  );
};
const PricingItem = ({ item, updateScreen }) => {
  return (<div style={{ backgroundColor: 'white', borderRadius: 4, marginRight: 10, paddingLeft: 20, marginBottom: 50, display: 'flex', flexDirection: 'column', width: 300, alignItems: 'flex-start' }}>
    <text style={{ color: 'black', opacity: .5, marginLeft: 10, marginTop: 10 }}>Short note here</text>
    <text style={{ color: 'black', fontWeight: 'bold', fontSize: 26, marginLeft: 10, marginTop: 10, }}>Your Title here</text>

    <text style={{ color: '#676767', textAlign: 'left', fontSize: 16, marginLeft: 10, marginTop: 10, maxWidth: 250 }}>Lorem ipsum is a short paragraph that contains all the letters of the alphabet. The characters are spread out so that the reader's attention is focused on the layout of the text instead of its content</text>
    <text style={{ color: 'black', fontSize: 24, marginLeft: 10, marginTop: 20, }}>PRICE 499/-</text>
    <button onClick={() => { updateScreen(1) }} style={{ backgroundColor: colors.primary, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, color: 'white', fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-end', marginTop: 25, marginBottom: 40, marginRight: 20 }}>Book Now</button>


  </div>)
}
export const Pricing = ({ updateScreen }) => {
  var data = [1, 2, 3, 4, 5, 6, 7];

  return (<div style={{ width: '100%', backgroundColor: '#f7f7f7', paddingTop: 15 }}>
    <text style={{ color: colors.primary, fontSize: 26, fontWeight: 'bold', textAlign: 'start', width: '100%', paddingTop: 20 }}>PRICING</text>
    <ul style={{
      display: 'flex', flexDirection: 'row', overflow: 'hidden', overflow: 'hidden', // Hide the scrollbar

      width: '100%', listStyleType: 'none', paddingLeft: '5%', paddingLeft: '5%'
    }}>
      {data.map((item, index) => (
        <li key={index}><PricingItem item={item} updateScreen={updateScreen} /></li>
      ))}
    </ul>
  </div>)
}
export const AboutMe = ({ }) => {
  return (<div style={{ width: '100%', paddingBottom: 20 }}>
    <text style={{ color: colors.primary, fontSize: 26, fontWeight: 'bold', textAlign: 'start', width: '100%', paddingTop: 20 }}>ABOUT ME</text>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '5%', width: '100%' }}>
      <img src={require('../assets/images/demo.jpg')} style={{ height: 350, }} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <text style={{ color: "black", fontSize: 20, maxWidth: 450, color: "#676767", marginTop: 20 }} >Lorem ipsum is a short paragraph that contains all the letters of the alphabet. The characters are spread out so that the reader's attention is focused on the layout of the text instead of its content</text>

      </div>

    </div>
  </div>);
}
export const ContactUs = ({ }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 20, marginBottom: 20
  };

  const logoStyle = {
    height: 50,
    width: 50,
    marginBottom: 10,
  };

  const companyNameStyle = {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  };


  const textfooterStyle = {
    color: colors.black,
    fontSize: 16,
    textAlign: 'center',
  };
  const textCommonStyle = {
    color: colors.black,
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  };
  return (<div style={{ width: '100%', backgroundColor: '#f7f7f7', paddingTop: 15 }}>
    <text style={{ color: colors.primary, fontSize: 26, fontWeight: 'bold', textAlign: 'start', width: '100%', paddingTop: 20, marginTop: 15 }}>CONTACT ME</text>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '5%', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <text style={{ color: "black", fontSize: 20, maxWidth: 450, color: "#676767", marginTop: 20 }} >Lorem ipsum is a short paragraph that contains all the letters of the alphabet. The characters are spread out so that the reader's attention is focused on the layout of the text instead of its content</text>
      </div>
      <ContactForm />

    </div>
    <div style={containerStyle}>
      <img
        src={require('../assets/images/icon.png')}
        alt="Logo 1"
        style={logoStyle}
      />
      <div style={{}}>
        <div style={companyNameStyle}>ExpertEConsult</div>
        <div style={textCommonStyle}>booking@experteconsult.com</div>
        <div style={textCommonStyle}>+919000004928</div>
        <div style={textCommonStyle}>Plot no 153 , rajender reddy nagar colony,Hyderabad 500050</div>
      </div>
    </div>
    <div style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', display: 'flex', paddingTop: 20, marginBottom: 20, backgroundColor: '#ffffff' }}>
      <text style={textfooterStyle}>TERMS AND CONDITIONS</text>
      <text style={textfooterStyle}>PRIVACY POLICY</text>
      <text style={textfooterStyle}>REFUND</text>
      <text style={textfooterStyle}>CANCELLATION</text>
    </div>
  </div>)
}

export default Profile;
