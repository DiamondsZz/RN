import React, {Component} from 'react';
import {Scene, Router, Lightbox, Drawer} from 'react-native-router-flux';
import Tabbar from '../components/Tabbar';
const router = () => {
  return (
    <Router>
      <Lightbox>
        <Scene key="Tabbar" component={Tabbar} />
      </Lightbox>
    </Router>
  );
};

export default router;
