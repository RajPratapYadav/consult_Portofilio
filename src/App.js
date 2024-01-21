import logo from './logo.svg';
import './App.css';
import './Styles.css';
import Profile, { AboutMe, ContactUs, NavBar, Pricing } from './components/Profile';
import { useEffect, useState } from "react";
import { ScheduleForm } from './components/Form';

function App() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenType, setScreenType] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Attach the event listener to the window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once after the initial render
  const updateScreen = (type) => {
    setScreenType(type);

  }
  return (

    <div className="App">

      <div style={{ flex: 1 }}>
        <NavBar
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 56,
            flexDirection: 'row',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', // Add bottom elevation
          }} />


        {screenType == 0 && <Profile
          screenHeight={screenHeight - 56}
        />}
        {screenType == 1 && <ScheduleForm
        />}
        {screenType == 0 && <Pricing updateScreen={updateScreen} />}
        {screenType == 0 && <AboutMe />}
        <ContactUs />
      </div>
    </div>
  );
}


export default App;
