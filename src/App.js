import React, { useState } from 'react';
import Home from './pages/Home';
import MissionList from './pages/MissionList';
import MyPage from './pages/MyPage';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import './App.css';

const pages = {
  home: <Home />, // 홈화면
  mission: <MissionList />, // 미션 리스트
  mypage: <MyPage />, // 마이페이지
  onboarding: <Onboarding />, // 온보딩
  login: <Login />, // 로그인
};

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🌱 친환경 미션 플랫폼</h1>
          <nav className="nav">
            <button 
              className={`nav-button ${page === 'home' ? 'active' : ''}`}
              onClick={() => setPage('home')}
            >
              🏠 홈
            </button>
            <button 
              className={`nav-button ${page === 'mission' ? 'active' : ''}`}
              onClick={() => setPage('mission')}
            >
              🎯 미션
            </button>
            <button 
              className={`nav-button ${page === 'mypage' ? 'active' : ''}`}
              onClick={() => setPage('mypage')}
            >
              👤 마이페이지
            </button>
            <button 
              className={`nav-button ${page === 'onboarding' ? 'active' : ''}`}
              onClick={() => setPage('onboarding')}
            >
              📚 온보딩
            </button>
            <button 
              className={`nav-button ${page === 'login' ? 'active' : ''}`}
              onClick={() => setPage('login')}
            >
              🔐 로그인
            </button>
          </nav>
        </div>
      </header>
      <main className="main">
        {pages[page]}
      </main>
    </div>
  );
}

export default App; 