import React from 'react';
import './home-page.css';
import ticX from '../../assets/tic-tac-toe-x.jpg';
import ticO from '../../assets/tic-tac-toe-o.jpg';
import { SettingIcon } from '../../components/setting-icon/setting-icon';

export const HomePage = (props) => {
  const { setPageName } = props;
  return (
    <div className="home-page">
      <div className="image-container">
        <img src={ticX} alt="X" width="180" height="180" />
        <img src={ticO} alt="O" width="180" height="180" />
      </div>
      <p>Choose your play mode</p>
      <div className="button-container">
        <button>Coming soon with AI</button>
        <button
          onClick={() => {
            setPageName('PICK_SIDE');
          }}
        >
          With a friend
        </button>
      </div>
      <SettingIcon />
    </div>
  );
};
