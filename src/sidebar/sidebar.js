import React from 'react';
import Photo from '../photo';
import style from './sidebar.module.css';
import profilePhoto from '../assets/images/photo.jpg';

const Sidebar = (props) => {
  return (
    <div className={style.['cr-sidebar']}>
      <Photo image={profilePhoto}/>
    </div>);
};

export default Sidebar;
