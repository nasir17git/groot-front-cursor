import React from 'react';

function OtherMissions({ onPageChange }) {
  return (
    <div className="fade-in">
      <h2 className="section-title">🌲 다른 유저 미션 결과</h2>
      
      {/* 필터 섹션 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🔍 필터</h3>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button className="btn">전체</button>
          <button className="btn btn-secondary">다회용기</button>
          <button className="btn btn-secondary">자전거</button>
          <button className="btn btn-secondary">텀블러</button>
          <button className="btn btn-secondary">대중교통</button>
        </div>
      </div>

      {/* 미션 결과 리스트 */}
      <div className="grid">
        {/* 미션 결과 1 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('missionDetail')}>
          <div style={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            🥤
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: 'white',
              marginRight: '0.5rem'
            }}>
              👤
            </div>
            <span style={{color: '#2c3e50', fontWeight: 'bold'}}>환경지킴이</span>
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>다회용기 사용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>📍 서울시 강남구</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#43e97b', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>다회용기</span>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 24</span>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>2024.12.15</span>
            </div>
          </div>
        </div>

        {/* 미션 결과 2 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('missionDetail')}>
          <div style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            🚴
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: 'white',
              marginRight: '0.5rem'
            }}>
              👤
            </div>
            <span style={{color: '#2c3e50', fontWeight: 'bold'}}>자전거러버</span>
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>자전거 이용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>📍 부산시 해운대구</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#11998e', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>자전거</span>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 18</span>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>2024.12.14</span>
            </div>
          </div>
        </div>

        {/* 미션 결과 3 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('missionDetail')}>
          <div style={{
            background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            ☕
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: 'white',
              marginRight: '0.5rem'
            }}>
              👤
            </div>
            <span style={{color: '#2c3e50', fontWeight: 'bold'}}>카페러버</span>
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>텀블러 사용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>📍 대구시 수성구</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#56ab2f', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>텀블러</span>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 32</span>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>2024.12.13</span>
            </div>
          </div>
        </div>

        {/* 미션 결과 4 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('missionDetail')}>
          <div style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            🚌
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: 'white',
              marginRight: '0.5rem'
            }}>
              👤
            </div>
            <span style={{color: '#2c3e50', fontWeight: 'bold'}}>대중교통러버</span>
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>대중교통 이용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>📍 인천시 연수구</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#4facfe', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>대중교통</span>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 15</span>
              <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>2024.12.12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherMissions; 