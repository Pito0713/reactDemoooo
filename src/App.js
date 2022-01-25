// ---- global ----
import React from 'react';
import { 
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
// ---- component ----
import HALL from './accounts/hall'
import HALLSUB from './accounts/hall-create'
import POINTS from './points/point'
import POINTSSERVE from './points/point-serve'
import WELLCOME from './welcome'
import ASIDE from './component/aside';
import HEADER from './component/header';

export default class APP extends React.Component {
  render() {
      return (
          <div className='block-container'>
            <ASIDE></ASIDE>
            <div className="side-container">
              <HEADER></HEADER>
              <Routes>
                <Route path="/" element={<WELLCOME />} />
                <Route path="accounts/hall" element={<HALL />} />
                <Route path="accounts/hall-create" element={<HALLSUB />} />
                <Route path="points/point" element={<POINTS />} />
                <Route path="points/point-serve" element={<POINTSSERVE />} />
              </Routes>
            </div>
          </div>
      );
  }
}
