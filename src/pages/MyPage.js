import React from 'react';

function MyPage() {
  return (
    <div className="fade-in">
      <h2 className="section-title">👤 마이페이지</h2>
      
      {/* 프로필 정보 */}
      <div className="card">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white'
          }}>
            👤
          </div>
          <div>
            <h3 style={{margin: '0 0 0.5rem 0', color: '#2c3e50'}}>환영합니다!</h3>
            <p style={{margin: '0', color: '#7f8c8d'}}>레벨 3 | 🍇 영동포도 송이</p>
          </div>
        </div>
        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
          <button className="btn">✏️ 정보 수정</button>
          <button className="btn btn-secondary">🚪 로그아웃</button>
        </div>
      </div>

      {/* 누적 탄소절감량 */}
      <div className="card" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🌱 총 탄소배출 절감량</h3>
        <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
          337.9kgCO₂
        </div>
        <div style={{fontSize: '1.1rem', marginBottom: '1rem'}}>
          🌳 약 3그루의 나무가 1년간 흡수하는 양과 같아요
        </div>
        <div style={{fontSize: '1rem', opacity: 0.9}}>
          "여행 중 대중교통을 이용한 영향이 컸어요"
        </div>
      </div>

      {/* 활동별 그래프/통계 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>📊 활동별 절감 그래프</h3>
        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          height: '200px',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.2rem',
          marginBottom: '1rem'
        }}>
          그래프 영역 (트래킹, 대중교통 등)
        </div>
        <div style={{textAlign: 'center', color: '#7f8c8d', fontStyle: 'italic'}}>
          "달마다 심은 초록의 흔적"
        </div>
      </div>

      {/* 뱃지/랭킹 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🏆 뱃지 수집 현황</h3>
        <div style={{
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          padding: '1.5rem',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>
            현재 레벨: Lv.3 🍇 영동포도 송이
          </div>
          <button className="btn" style={{background: 'rgba(255,255,255,0.2)', border: '1px solid white'}}>
            🏅 뱃지 수집 현황 보기
          </button>
        </div>
        <button className="btn btn-secondary">📋 뱃지 레벨 자세히 보기</button>
      </div>

      {/* 탄소절감 순위 */}
      <div className="card">
        <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🏆 탄소절감 순위</h3>
        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          padding: '1.5rem',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
            상위 10%
          </div>
          <div style={{fontSize: '1.1rem'}}>
            전체 사용자 중 상위 10%에 위치하고 있어요!
          </div>
          <div style={{fontSize: '1rem', marginTop: '1rem', opacity: 0.9}}>
            연령대/지역별 비교
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage; 