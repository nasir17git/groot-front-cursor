import React from 'react';

function Login() {
  return (
    <div className="fade-in">
      <h2 className="section-title">🔐 로그인</h2>
      
      <div className="card" style={{maxWidth: '500px', margin: '0 auto'}}>
        <div style={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          padding: '2rem',
          borderRadius: '15px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>🌱 친환경 미션 플랫폼</h3>
          <p style={{fontSize: '1.1rem', opacity: 0.9}}>
            지구를 지키는 작은 실천이 큰 변화를 만듭니다
          </p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <button className="btn" style={{
            background: '#4285F4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem'
          }}>
            <span style={{fontSize: '1.5rem'}}>🔍</span>
            구글로 로그인
          </button>
          
          <button className="btn" style={{
            background: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem'
          }}>
            <span style={{fontSize: '1.5rem'}}>🍎</span>
            애플로 로그인
          </button>
          
          <button className="btn" style={{
            background: '#FEE500',
            color: '#3C1E1E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem'
          }}>
            <span style={{fontSize: '1.5rem'}}>💛</span>
            카카오로 로그인
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(67, 233, 123, 0.1)',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#7f8c8d'
        }}>
          <p style={{margin: '0', fontSize: '0.9rem'}}>
            로그인 시 개인정보 처리방침 및 이용약관에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login; 