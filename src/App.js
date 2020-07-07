import React, { useState } from 'react';
import { GamePage } from './pages/game-page/game-page';
import { PickSidePage } from './pages/pick-side-page/pick-side-page';
import { HomePage } from './pages/home-page/home-page';

function App() {
  const [selectedSide, setSelectedSide] = useState('X');
  const [pageName, setPageName] = useState('HOME');
  const [tie, setTie] = useState(false);

  const renderScreens = () => {
    switch (pageName) {
      case 'HOME':
        return <HomePage setPageName={setPageName} />;

      case 'PICK_SIDE':
        return (
          <PickSidePage
            setSelectedSide={setSelectedSide}
            selectedSide={selectedSide}
            setPageName={setPageName}
          />
        );

      case 'GAME':
        return (
          <GamePage selectedSide={selectedSide} setTie={setTie} tie={tie} />
        );

      default:
        return;
    }
  };

  return <div>{renderScreens()}</div>;
}

export default App;
