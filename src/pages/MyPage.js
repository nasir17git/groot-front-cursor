import React from 'react';

function MyPage({ onPageChange }) {
  return (
    <div>
      <h2 className="section-title">👤 마이페이지</h2>
      
      {/* 프로필 정보 */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        marginBottom: '2rem',
        border: '2px solid #22c55e'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'white',
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
          }}>
            👤
          </div>
          <div style={{flex: 1}}>
            <h3 style={{color: '#2d3748', marginBottom: '0.5rem', fontSize: '1.8rem'}}>환영합니다!</h3>
            <p style={{color: '#718096', marginBottom: '0.5rem', fontSize: '1.1rem'}}>레벨 3 | 🍇 영동포도 송이</p>
            <div style={{
              background: '#16a34a',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>
              🌱 친환경 실천가
            </div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button className="btn">
            ✏️ 정보 수정
          </button>
          <button className="btn btn-secondary">
            🚪 로그아웃
          </button>
        </div>
      </div>

      {/* 누적 탄소절감량 */}
      <div className="card" style={{
        background: '#22c55e',
        color: 'white',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌱</div>
        <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>총 탄소배출 절감량</h3>
        <div style={{fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
          337.9kgCO₂
        </div>
        <div style={{fontSize: '1.2rem', marginBottom: '1rem', opacity: 0.9}}>
          🌳 약 3그루의 나무가 1년간 흡수하는 양과 같아요
        </div>
        <div style={{fontSize: '1rem', opacity: 0.8}}>
          "여행 중 대중교통을 이용한 영향이 컸어요"
        </div>
      </div>

      {/* 활동별 그래프/통계 */}
      <div className="card">
        <h3 style={{color: '#2d3748', marginBottom: '1.5rem', fontSize: '1.5rem'}}>📊 활동별 절감 그래프</h3>
        <div style={{
          background: '#16a34a',
          height: '250px',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.3rem',
          marginBottom: '1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📈</div>
            <p style={{margin: '0', fontSize: '1.2rem'}}>그래프 영역</p>
            <p style={{margin: '0.5rem 0 0 0', fontSize: '1rem', opacity: 0.9}}>(트래킹, 대중교통 등)</p>
          </div>
        </div>
        <div style={{textAlign: 'center', color: '#718096', fontStyle: 'italic', fontSize: '1.1rem'}}>
          "달마다 심은 초록의 흔적"
        </div>
      </div>

      {/* 뱃지/랭킹 */}
      <div className="card">
        <h3 style={{color: '#2d3748', marginBottom: '1.5rem', fontSize: '1.5rem'}}>🏆 뱃지 수집 현황</h3>
        <div style={{
          background: '#15803d',
          padding: '2rem',
          borderRadius: '15px',
          color: 'white',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
            현재 레벨: Lv.3 🍇 영동포도 송이
          </div>
          <p style={{marginBottom: '1.5rem', opacity: 0.9}}>
            다음 레벨까지 62.1kg 절감이 필요해요!
          </p>
          <button className="btn" style={{
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid white',
            fontSize: '1.1rem'
          }} onClick={() => onPageChange('badgeCollection')}>
            🏅 뱃지 수집 현황 보기
          </button>
        </div>
        <button className="btn btn-secondary" onClick={() => onPageChange('badgeDetail')}>
          📋 뱃지 레벨 자세히 보기
        </button>
      </div>

      {/* 탄소절감 순위 */}
      <div className="card">
        <h3 style={{color: '#2d3748', marginBottom: '1.5rem', fontSize: '1.5rem'}}>🏆 탄소절감 순위</h3>
        <div style={{
          background: '#14532d',
          padding: '2rem',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            상위 10%
          </div>
          <div style={{fontSize: '1.3rem', marginBottom: '1rem'}}>
            전체 사용자 중 상위 10%에 위치하고 있어요!
          </div>
          <div style={{fontSize: '1.1rem', opacity: 0.9}}>
            연령대/지역별 비교
          </div>
        </div>
      </div>

      {/* 빠른 액션 */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        textAlign: 'center',
        border: '2px solid #22c55e'
      }}>
        <h3 style={{color: '#2d3748', marginBottom: '2rem', fontSize: '1.5rem'}}>⚡ 빠른 액션</h3>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
          <button className="btn hover-card" style={{height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📊</div>
            <span>탄소배출량 계산</span>
          </button>
          <button className="btn hover-card" style={{height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🎯</div>
            <span>새 미션 시작</span>
          </button>
          <button className="btn hover-card" style={{height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🌿</div>
            <span>친구 초대</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyPage; 