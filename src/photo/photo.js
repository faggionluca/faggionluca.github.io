import React from 'react';
import style from './photo.module.css';

const Photo = (props) => {
  return (
    <div className={style.photo}>
      <img className={style.img} alt="profile" src={props.image}></img>
    </div>
  );
};

export default Photo;
