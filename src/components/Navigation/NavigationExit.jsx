import React from 'react';
import '/work/final project/rslang/src/pages/games/Savannah/style.css';
import {NavLink} from 'react-router-dom';

 const ExitButtonComponent = () => (
    <div>
      <NavLink to="/"><button className="exit-button">Exit</button></NavLink>
    </div>
    )

    export default ExitButtonComponent;