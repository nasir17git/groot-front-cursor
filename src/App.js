import React, { useState } from 'react';
import Home from './pages/Home';
import MissionList from './pages/MissionList';
import MyPage from './pages/MyPage';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import CarbonCalculator from './pages/CarbonCalculator';
import BadgeCollection from './pages/BadgeCollection';
import BadgeDetail from './pages/BadgeDetail';
import OtherMissions from './pages/OtherMissions';
import MyMissions from './pages/MyMissions';
import MissionDetail from './pages/MissionDetail';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const pages = {
    home: <Home onPageChange={handlePageChange} />, // 홈화면
    mission: <MissionList onPageChange={handlePageChange} />, // 미션 리스트
    mypage: <MyPage onPageChange={handlePageChange} />, // 마이페이지
    onboarding: <Onboarding onPageChange={handlePageChange} />, // 온보딩
    login: <Login onPageChange={handlePageChange} />, // 로그인
    courseList: <CourseList onPageChange={handlePageChange} />, // 생태관광 코스 목록
    courseDetail: <CourseDetail onPageChange={handlePageChange} />, // 생태관광 코스 상세
    carbonCalculator: <CarbonCalculator onPageChange={handlePageChange} />, // 탄소배출량 계산
    badgeCollection: <BadgeCollection onPageChange={handlePageChange} />, // 뱃지 수집 현황
    badgeDetail: <BadgeDetail onPageChange={handlePageChange} />, // 뱃지 상세 정보
    otherMissions: <OtherMissions onPageChange={handlePageChange} />, // 다른 유저 미션 결과
    myMissions: <MyMissions onPageChange={handlePageChange} />, // 나의 미션 수행 결과
    missionDetail: <MissionDetail onPageChange={handlePageChange} />, // 미션 상세 조회
  };

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