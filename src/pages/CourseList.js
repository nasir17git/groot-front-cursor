import React from 'react';

function CourseList({ onPageChange }) {
  return (
    <div className="fade-in">
      <h2 className="section-title">🗺️ 생태관광 코스 목록</h2>
      
      {/* 광고 배너 */}
      <div className="card" style={{
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        color: 'white',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🎉 특별 이벤트</h3>
        <p style={{fontSize: '1.1rem'}}>경북 생태관광 코스 20% 할인!</p>
      </div>

      {/* 필터 섹션 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🔍 필터</h3>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button className="btn">전체</button>
          <button className="btn btn-secondary">트래킹</button>
          <button className="btn btn-secondary">식도락</button>
          <button className="btn btn-secondary">문화체험</button>
        </div>
      </div>

      {/* 코스 목록 */}
      <div className="grid">
        {/* 문경새재 도립공원 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('courseDetail')}>
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
            🏞️
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>문경새재 도립공원</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>다양한 생태계를 자랑하며, 등산, 트레킹, 걷기 등을 즐길 수 있습니다.</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#43e97b', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>트래킹</span>
            <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>조회수: 1,234</span>
          </div>
        </div>

        {/* 안동 하회마을 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('courseDetail')}>
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
            🏘️
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>안동 하회마을</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>전통문화와 자연이 조화를 이루는 아름다운 마을입니다.</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#11998e', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>문화체험</span>
            <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>조회수: 2,156</span>
          </div>
        </div>

        {/* 청도 감나무 숲 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('courseDetail')}>
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
            🌳
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>청도 감나무 숲</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>자연 속에서 힐링할 수 있는 감나무 숲 트래킹 코스입니다.</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#56ab2f', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>트래킹</span>
            <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>조회수: 987</span>
          </div>
        </div>

        {/* 영양 오일장 */}
        <div className="card" style={{cursor: 'pointer'}} onClick={() => onPageChange('courseDetail')}>
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
            🍜
          </div>
          <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>영양 오일장</h3>
          <p style={{color: '#7f8c8d', marginBottom: '0.5rem'}}>전통 시장에서 지역 특산품과 맛있는 음식을 즐겨보세요.</p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{background: '#4facfe', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.9rem'}}>식도락</span>
            <span style={{color: '#7f8c8d', fontSize: '0.9rem'}}>조회수: 1,567</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseList; 