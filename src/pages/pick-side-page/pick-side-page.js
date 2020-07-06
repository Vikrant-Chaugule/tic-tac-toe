import React from 'react';
import './pick-side-page.css';
import ticX from '../../assets/tic-tac-toe-x.jpg';
import ticO from '../../assets/tic-tac-toe-o.jpg';

export const PickSidePage = (props) => {
  const { setSelectedSide, selectedSide, setPageName } = props;
  const styleX = selectedSide === 'X' ? '' : 'unselect';
  const styleO = selectedSide === 'O' ? '' : 'unselect';
  const styleButton = selectedSide === '' ? 'continue-button-disable' : '';

  return (
    <div className="pick-side-page">
      <p>Pick Your Side</p>
      <div className="side-container">
        <div className={styleX} onClick={() => setSelectedSide('X')}>
          <img src={ticX} alt="X" width="180" height="180" />
          <div className="side-circle-outer blue-color">
            <div className="side-circle-inner">
              <div className="side-circle-inner-most blue-color"></div>
            </div>
          </div>
        </div>

        <div className={styleO} onClick={() => setSelectedSide('O')}>
          <img src={ticO} alt="O" width="180" height="180" />
          <div className="side-circle-outer orange-color">
            <div className="side-circle-inner">
              <div className="side-circle-inner-most orange-color"></div>
            </div>
          </div>
        </div>
      </div>
      <button className={styleButton} onClick={() => setPageName('GAME')}>
        Continue
      </button>
    </div>
  );
};
