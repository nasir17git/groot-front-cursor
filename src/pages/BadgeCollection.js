import React from 'react';

function BadgeCollection({ onPageChange }) {
  return (
    <div className="fade-in">
      {/* 헤더 */}
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
        <button 
          className="btn btn-secondary" 
          style={{marginRight: '1rem'}}
          onClick={() => onPageChange('mypage')}
        >
          ← 뒤로가기
        </button>
        <h2 className="section-title" style={{margin: '0'}}>🏅 뱃지 수집 현황</h2>
      </div>

      {/* 뱃지 그리드 */}
      <div className="card">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          padding: '1rem'
        }}>
          {/* 획득한 뱃지들 */}
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              cursor: 'pointer'
            }} onClick={() => onPageChange('badgeDetail')}>
              🥤
            </div>
            <p style={{fontSize: '0.9rem', color: '#2c3e50', margin: '0'}}>다회용기 마스터</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              cursor: 'pointer'
            }} onClick={() => onPageChange('badgeDetail')}>
              🚴
            </div>
            <p style={{fontSize: '0.9rem', color: '#2c3e50', margin: '0'}}>자전거 라이더</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              cursor: 'pointer'
            }} onClick={() => onPageChange('badgeDetail')}>
              ☕
            </div>
            <p style={{fontSize: '0.9rem', color: '#2c3e50', margin: '0'}}>텀블러 애호가</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              cursor: 'pointer'
            }} onClick={() => onPageChange('badgeDetail')}>
              🚌
            </div>
            <p style={{fontSize: '0.9rem', color: '#2c3e50', margin: '0'}}>대중교통 이용자</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              cursor: 'pointer'
            }} onClick={() => onPageChange('badgeDetail')}>
              🌱
            </div>
            <p style={{fontSize: '0.9rem', color: '#2c3e50', margin: '0'}}>친환경 실천가</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              cursor: 'pointer'
            }} onClick={() => onPageChange('badgeDetail')}>
              🏆
            </div>
            <p style={{fontSize: '0.9rem', color: '#2c3e50', margin: '0'}}>미션 완주자</p>
          </div>

          {/* 미획득 뱃지들 (회색) */}
          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              opacity: 0.5
            }}>
              🚶
            </div>
            <p style={{fontSize: '0.9rem', color: '#7f8c8d', margin: '0'}}>도보 애호가</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              opacity: 0.5
            }}>
              🌿
            </div>
            <p style={{fontSize: '0.9rem', color: '#7f8c8d', margin: '0'}}>자연 보호자</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 0.5rem auto',
              opacity: 0.5
            }}>
              🎯
            </div>
            <p style={{fontSize: '0.9rem', color: '#7f8c8d', margin: '0'}}>미션 마스터</p>
          </div>
        </div>

        {/* 통계 정보 */}
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{marginBottom: '0.5rem'}}>📊 뱃지 수집 현황</h3>
          <p style={{margin: '0', fontSize: '1.1rem'}}>
            획득: 6개 / 전체: 9개 (66.7%)
          </p>
        </div>
      </div>
    </div>
  );
}

export default BadgeCollection; 