import React from 'react';
import menuIconBtn from '../../../../assets/icons/open-menu.svg';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <img src={menuIconBtn} alt="MENU" />
    </div>
  );
};

export default drawerToggle;
