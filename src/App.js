import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./componants/header/header";
import SideBar from "./componants/sidebar/sideBar";
import HomeScreen from "./screen/homescreen/homescreen";
import './app.css';

function App() {
  const [ sideBar, toggleSideBar] = useState(false);

  const handleSideBarToggle = () => toggleSideBar(!sideBar);
  return (
    <>
      <Header handleSideBarToggle={handleSideBarToggle}/>
      <div className="app_container">
        <SideBar sideBar={sideBar} handleSideBarToggle={handleSideBarToggle} />
        <Container fluid className="app_main">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
