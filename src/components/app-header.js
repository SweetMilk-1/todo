import React from "react";
import './app-header.css'

const AppHeader = () => {
    return (
      <div className="row app-header">
        <h1 className="app-header-h1">Todo list</h1>
        <p className="app-header-p">1 more to do, 3 done</p>
      </div>
    );
  }

export default AppHeader;