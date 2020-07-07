import React from 'react';
import settings from '../../assets/settings.png';
import './setting-icon.css';

export const SettingIcon = () => {
  return (
    <div className="setting-icon">
      <img src={settings} alt="settings" width="50" height="50" />
    </div>
  );
};
