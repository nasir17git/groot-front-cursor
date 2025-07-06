import React from 'react';

function Home({ onPageChange }) {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="card">
        <h2 className="section-title">🚩 공지사항 & 광고</h2>
        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          padding: '2rem',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
          fontSize: '1.2rem'
        }}>
          🌱 친환경 미션에 참여하세요!<br/>
          지구를 지키는 작은 실천이 큰 변화를 만듭니다
        </div>
      </section>

      {/* Guide Page Button */}
      <section className="card">
        <button className="btn btn-secondary" style={{width: '100%', fontSize: '1.2rem'}}>
          📚 가이드 페이지로 이동
        </button>
      </section>

      {/* Login/Status Section */}
      <section className="card">
        <div style={{
          background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
          padding: '1.5rem',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center'
        }}>
          <span style={{fontSize: '1.1rem'}}>로그인이 필요합니다.</span>
          <br/>
          <button className="btn" style={{marginTop: '1rem'}}>🔐 로그인</button>
        </div>
      </section>

      {/* Route Card Button Group */}
      <section className="card">
        <h2 className="section-title">🌍 주요 서비스</h2>
        <div className="grid">
          <div className="card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('courseList')}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🗺️</div>
            <h3>그루맵 트래킹</h3>
            <p>생태관광 코스</p>
          </div>
          <div className="card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('mission')}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>👣</div>
            <h3>그루의 발자국</h3>
            <p>미션 수행</p>
          </div>
          <div className="card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('carbonCalculator')}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📊</div>
            <h3>그루미터</h3>
            <p>탄소배출량 계산</p>
          </div>
          <div className="card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('otherMissions')}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌲</div>
            <h3>챌린지 포레스트</h3>
            <p>유저 미션 결과</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 