import React from 'react';
import Header from './components/Header/Header';
import SidebarRight from './components/SidebarRight/SidebarRight';
import ListPost from './components/Post/ListPost';
import AddPost from './components/AddPost/AddPost';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import Couverture from './components/Couverture/Couverture';
import './App.css';
import { CaretDownOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>

      <aside className="sidebar sidebarleft">
        <SidebarLeft />
      </aside>

      <div className="content">
        <Couverture />
        <AddPost />
        <h5>NOUVELLE ACTIVITÉ     <CaretDownOutlined /></h5>
        <ListPost />
      </div>

      <aside className="sidebar sidebarright">
        <SidebarRight />
      </aside>

      {/* <footer className="footer">

      </footer> */}
    </div>
  );
}

export default App;
