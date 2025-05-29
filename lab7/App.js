import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="123"
        bio="hii"
        profilePicture="1.png"
      />
    </div>
  );
};

export default App;