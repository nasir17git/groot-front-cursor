import React from 'react';

function CourseDetail({ onPageChange }) {
  return (
    <div className="fade-in">
      {/* 헤더 */}
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
        <button 
          className="btn btn-secondary" 
          style={{marginRight: '1rem'}}
          onClick={() => onPageChange('courseList')}
        >
          ← 뒤로가기
        </button>
        <h2 className="section-title" style={{margin: '0'}}>🏞️ 문경새재 도립공원</h2>
      </div>

      {/* 코스 상세 정보 */}
      <div className="card">
        {/* 대표 이미지 */}
        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          height: '300px',
          borderRadius: '15px',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '6rem'
        }}>
          🏞️
        </div>

        {/* 기본 정보 */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📍 위치</h3>
          <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>경상북도 문경시 문경읍</p>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🏷️ 카테고리</h3>
          <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
            <span style={{background: '#43e97b', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem'}}>트래킹</span>
            <span style={{background: '#11998e', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem'}}>자연</span>
            <span style={{background: '#56ab2f', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem'}}>등산</span>
          </div>
        </div>

        {/* 상세 설명 */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📝 상세 설명</h3>
          <p style={{color: '#7f8c8d', lineHeight: '1.8', fontSize: '1.1rem'}}>
            문경새재 도립공원은 다양한 생태계를 자랑하며, 등산, 트레킹, 걷기 등을 즐길 수 있습니다. 
            특히 가을철 단풍이 아름다워 많은 관광객들이 찾는 명소입니다. 
            자연 속에서 힐링할 수 있는 코스로, 가족과 함께 방문하기 좋은 곳입니다.
          </p>
        </div>

        {/* 방문 정보 */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>ℹ️ 방문 정보</h3>
          <div style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '10px'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
              <span style={{color: '#2c3e50', fontWeight: 'bold'}}>개방시간:</span>
              <span style={{color: '#7f8c8d'}}>24시간</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
              <span style={{color: '#2c3e50', fontWeight: 'bold'}}>입장료:</span>
              <span style={{color: '#7f8c8d'}}>무료</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
              <span style={{color: '#2c3e50', fontWeight: 'bold'}}>주차:</span>
              <span style={{color: '#7f8c8d'}}>유료 (1,000원)</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{color: '#2c3e50', fontWeight: 'bold'}}>문의:</span>
              <span style={{color: '#7f8c8d'}}>054-571-0700</span>
            </div>
          </div>
        </div>

        {/* 추천 코스 */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🗺️ 추천 코스</h3>
          <div style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '15px'
          }}>
            <h4 style={{marginBottom: '1rem'}}>🌿 새재길 트레킹 코스</h4>
            <p style={{margin: '0', lineHeight: '1.6'}}>
              총 거리: 3.2km | 소요시간: 약 2시간<br/>
              난이도: 초급 | 추천 계절: 봄, 가을
            </p>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button className="btn" onClick={() => onPageChange('carbonCalculator')}>
            📊 탄소배출량 계산에 추가
          </button>
          <button className="btn btn-secondary">
            ❤️ 북마크
          </button>
          <button className="btn btn-secondary">
            📍 지도에서 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail; 