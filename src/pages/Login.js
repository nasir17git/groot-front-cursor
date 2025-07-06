import React from 'react';

function Login() {
  return (
    <div>
      <h2>로그인</h2>
      <div style={{marginBottom: '2rem'}}>
        <div style={{background: '#f0f0f0', padding: '1rem', borderRadius: '8px'}}>
          <strong>서비스 소개</strong>
          <div>친환경 미션 플랫폼에 오신 것을 환영합니다!</div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <button style={{background: '#4285F4', color: 'white', padding: '1rem'}}>구글로 로그인</button>
        <button style={{background: 'black', color: 'white', padding: '1rem'}}>애플로 로그인</button>
        <button style={{background: '#FEE500', color: '#3C1E1E', padding: '1rem'}}>카카오로 로그인</button>
      </div>
    </div>
  );
}

export default Login; 