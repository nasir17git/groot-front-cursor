import React from 'react';

function MissionDetail({ onPageChange }) {
  return (
    <div className="fade-in">
      {/* 헤더 */}
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
        <button 
          className="btn btn-secondary" 
          style={{marginRight: '1rem'}}
          onClick={() => onPageChange('myMissions')}
        >
          ← 뒤로가기
        </button>
        <h2 className="section-title" style={{margin: '0'}}>📝 미션 상세 조회</h2>
      </div>

      {/* 미션 상세 정보 */}
      <div className="card">
        {/* 인증 사진 */}
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
          🥤
        </div>

        {/* 작성자 정보 */}
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white',
            marginRight: '1rem'
          }}>
            👤
          </div>
          <div>
            <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>환경지킴이</h3>
            <p style={{color: '#7f8c8d', margin: '0'}}>Lv.3 🍇 영동포도 송이</p>
          </div>
        </div>

        {/* 미션 정보 */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🎯 미션 분류</h3>
          <span style={{background: '#43e97b', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '1rem'}}>다회용기 사용</span>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📍 수행 위치</h3>
          <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>서울시 강남구 테헤란로 123</p>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📝 수행 내용</h3>
          <p style={{color: '#7f8c8d', lineHeight: '1.8', fontSize: '1.1rem'}}>
            오늘 카페에서 일회용 컵 대신 다회용기를 사용했습니다. 
            플라스틱 사용을 줄이고 환경을 보호하는 작은 실천을 이어가고 있어요! 
            다회용기를 사용하면서도 맛있는 커피를 즐길 수 있어서 더욱 만족스러웠습니다.
          </p>
        </div>

        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📅 수행일</h3>
          <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>2024년 12월 15일</p>
        </div>

        {/* 뱃지 정보 */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🏅 획득 뱃지</h3>
          <div style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            color: 'white',
            padding: '1rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{fontSize: '2rem'}}>🥤</div>
            <div>
              <h4 style={{margin: '0 0 0.5rem 0'}}>다회용기 마스터</h4>
              <p style={{margin: '0', fontSize: '0.9rem', opacity: 0.9}}>다회용기 사용 미션 10회 완료</p>
            </div>
          </div>
        </div>

        {/* 상호작용 */}
        <div style={{marginBottom: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <button className="btn" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              ❤️ 좋아요 24
            </button>
            <button className="btn btn-secondary">
              💬 댓글
            </button>
            <button className="btn btn-secondary">
              📤 공유
            </button>
          </div>
        </div>
      </div>

      {/* 관련 미션 목록 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🔗 같은 분류 챌린지</h3>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
          <div className="card" style={{cursor: 'pointer'}}>
            <div style={{
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              height: '150px',
              borderRadius: '10px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              🥤
            </div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>다회용기 사용</h4>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>📍 서울시 서초구</p>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 18 | 2024.12.14</p>
          </div>

          <div className="card" style={{cursor: 'pointer'}}>
            <div style={{
              background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
              height: '150px',
              borderRadius: '10px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              🥤
            </div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>다회용기 사용</h4>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>📍 서울시 마포구</p>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 32 | 2024.12.13</p>
          </div>
        </div>
      </div>

      {/* 인근 위치 챌린지 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📍 인근 위치 챌린지</h3>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
          <div className="card" style={{cursor: 'pointer'}}>
            <div style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              height: '150px',
              borderRadius: '10px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              🚴
            </div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>자전거 이용</h4>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>📍 서울시 강남구</p>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 15 | 2024.12.15</p>
          </div>

          <div className="card" style={{cursor: 'pointer'}}>
            <div style={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              height: '150px',
              borderRadius: '10px',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem'
            }}>
              ☕
            </div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>텀블러 사용</h4>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>📍 서울시 강남구</p>
            <p style={{color: '#7f8c8d', fontSize: '0.9rem'}}>❤️ 28 | 2024.12.14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetail; 