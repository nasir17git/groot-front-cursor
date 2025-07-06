import React from 'react';

function Home({ onPageChange }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        textAlign: 'center',
        marginBottom: '3rem',
        border: '2px solid #22c55e'
      }}>
        <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🌱</div>
        <h1 className="gradient-text" style={{fontSize: '3rem', marginBottom: '1rem'}}>
          친환경 미션 플랫폼
        </h1>
        <p style={{fontSize: '1.3rem', color: '#4a5568', lineHeight: '1.6', marginBottom: '2rem'}}>
          지구를 지키는 작은 실천이 큰 변화를 만듭니다.<br/>
          함께 시작해보세요!
        </p>
        <div style={{
          background: '#22c55e',
          padding: '2rem',
          borderRadius: '15px',
          color: 'white',
          marginBottom: '2rem'
        }}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🎉 특별 이벤트</h3>
          <p style={{fontSize: '1.2rem', margin: '0'}}>
            친환경 미션 참여 시 뱃지와 특별 혜택을 드려요!
          </p>
        </div>
      </div>

      {/* Guide Page Button */}
      <div className="card hover-card" style={{textAlign: 'center', marginBottom: '3rem'}}>
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📚</div>
        <h3 style={{color: '#2d3748', marginBottom: '1rem'}}>가이드 페이지</h3>
        <p style={{color: '#718096', marginBottom: '2rem'}}>
          친환경 미션 플랫폼 사용법을 알아보세요
        </p>
        <button className="btn">
          📖 가이드 보기
        </button>
      </div>

      {/* Login/Status Section */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        textAlign: 'center',
        marginBottom: '3rem',
        border: '2px solid #22c55e'
      }}>
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔐</div>
        <h3 style={{color: '#2d3748', marginBottom: '1rem'}}>로그인이 필요합니다</h3>
        <p style={{color: '#718096', marginBottom: '2rem'}}>
          로그인하고 친환경 미션에 참여해보세요
        </p>
        <button className="btn">
          🔐 로그인하기
        </button>
      </div>

      {/* Route Card Button Group */}
      <div className="card">
        <h2 className="section-title">🌍 주요 서비스</h2>
        <div className="grid">
          <div className="card hover-card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('courseList')}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              color: 'white',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
            }}>
              🗺️
            </div>
            <h3 style={{color: '#2d3748', marginBottom: '0.5rem', fontSize: '1.3rem'}}>그루맵 트래킹</h3>
            <p style={{color: '#718096', marginBottom: '1rem'}}>생태관광 코스 탐색</p>
            <div style={{
              background: '#22c55e',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>
              🚀 시작하기
            </div>
          </div>

          <div className="card hover-card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('mission')}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              color: 'white',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)'
            }}>
              👣
            </div>
            <h3 style={{color: '#2d3748', marginBottom: '0.5rem', fontSize: '1.3rem'}}>그루의 발자국</h3>
            <p style={{color: '#718096', marginBottom: '1rem'}}>미션 수행 및 인증</p>
            <div style={{
              background: '#16a34a',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>
              🎯 미션 시작
            </div>
          </div>

          <div className="card hover-card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('carbonCalculator')}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#15803d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              color: 'white',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 4px 12px rgba(21, 128, 61, 0.3)'
            }}>
              📊
            </div>
            <h3 style={{color: '#2d3748', marginBottom: '0.5rem', fontSize: '1.3rem'}}>그루미터</h3>
            <p style={{color: '#718096', marginBottom: '1rem'}}>탄소배출량 계산</p>
            <div style={{
              background: '#15803d',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>
              📈 계산하기
            </div>
          </div>

          <div className="card hover-card" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => onPageChange('otherMissions')}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#14532d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              color: 'white',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 4px 12px rgba(20, 83, 45, 0.3)'
            }}>
              🌲
            </div>
            <h3 style={{color: '#2d3748', marginBottom: '0.5rem', fontSize: '1.3rem'}}>챌린지 포레스트</h3>
            <p style={{color: '#718096', marginBottom: '1rem'}}>다른 유저 미션 결과</p>
            <div style={{
              background: '#14532d',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              display: 'inline-block'
            }}>
              🌿 둘러보기
            </div>
          </div>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        textAlign: 'center',
        border: '2px solid #22c55e'
      }}>
        <h3 style={{color: '#2d3748', marginBottom: '2rem', fontSize: '1.8rem'}}>📈 플랫폼 통계</h3>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem'}}>1,234</div>
            <p style={{color: '#718096', margin: '0'}}>참여 사용자</p>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.5rem'}}>5,678</div>
            <p style={{color: '#718096', margin: '0'}}>완료된 미션</p>
          </div>
          <div>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#15803d', marginBottom: '0.5rem'}}>12.3t</div>
            <p style={{color: '#718096', margin: '0'}}>절감된 탄소</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 