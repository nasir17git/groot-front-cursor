import React from 'react';

function MissionList() {
  return (
    <div className="fade-in">
      <h2 className="section-title">🎯 탄소배출 절감 미션 리스트</h2>
      
      <div className="grid">
        {/* 다회용기 사용 미션 */}
        <div className="card" style={{cursor: 'pointer'}}>
          <div style={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '4rem'
          }}>
            🥤
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>다회용기 사용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '1rem'}}>카페에서 다회용기 사용 인증</p>
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            <button className="btn">📍 GPS 인증</button>
            <button className="btn btn-secondary">✅ 인증하기</button>
          </div>
        </div>

        {/* 자전거 이용 미션 */}
        <div className="card" style={{cursor: 'pointer'}}>
          <div style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '4rem'
          }}>
            🚴
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>자전거 이용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '1rem'}}>출퇴근 자전거 이용 인증</p>
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            <button className="btn">📍 GPS 인증</button>
            <button className="btn btn-secondary">✅ 인증하기</button>
          </div>
        </div>

        {/* 텀블러 사용 미션 */}
        <div className="card" style={{cursor: 'pointer'}}>
          <div style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '4rem'
          }}>
            ☕
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>텀블러 사용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '1rem'}}>카페에서 텀블러 사용 인증</p>
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            <button className="btn">📍 GPS 인증</button>
            <button className="btn btn-secondary">✅ 인증하기</button>
          </div>
        </div>

        {/* 대중교통 이용 미션 */}
        <div className="card" style={{cursor: 'pointer'}}>
          <div style={{
            background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
            height: '200px',
            borderRadius: '15px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '4rem'
          }}>
            🚌
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>대중교통 이용</h3>
          <p style={{color: '#7f8c8d', marginBottom: '1rem'}}>버스/지하철 이용 인증</p>
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            <button className="btn">📍 GPS 인증</button>
            <button className="btn btn-secondary">✅ 인증하기</button>
          </div>
        </div>
      </div>

      {/* 미션 인증 완료 섹션 */}
      <div className="card" style={{
        background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🎉 미션 인증 완료 시</h3>
        <div style={{fontSize: '1.2rem'}}>
          뱃지 획득! (예시: 텀블러 10회 사용 뱃지)
        </div>
      </div>
    </div>
  );
}

export default MissionList; 