import React, { useState } from 'react';
import { GamePage } from './pages/game-page/game-page';
import { PickSidePage } from './pages/pick-side-page/pick-side-page';

function App() {
  const [selectedSide, setSelectedSide] = useState('X');
  const [pageName, setPageName] = useState('PICK_SIDE');

  const renderScreens = () => {
    switch (pageName) {
      case 'PICK_SIDE':
        return (
          <PickSidePage
            setSelectedSide={setSelectedSide}
            selectedSide={selectedSide}
            setPageName={setPageName}
          />
        );

      case 'GAME':
        return <GamePage selectedSide={selectedSide} />;

      default:
        return;
    }
  };

  return <div>{renderScreens()}</div>;
}

export default App;
