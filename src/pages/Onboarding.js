import React from 'react';

function Onboarding() {
  return (
    <div className="fade-in">
      <h2 className="section-title">📚 그루트 이용방법</h2>
      
      <div className="card">
        <div style={{
          position: 'relative',
          paddingLeft: '2rem'
        }}>
          {/* Step 1 */}
          <div style={{
            position: 'relative',
            marginBottom: '2rem',
            paddingLeft: '2rem'
          }}>
            <div style={{
              position: 'absolute',
              left: '-1rem',
              top: '0',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              1
            </div>
            <div style={{
              position: 'absolute',
              left: '0',
              top: '2rem',
              width: '2px',
              height: 'calc(100% + 2rem)',
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
            }}></div>
            <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Step 1</h3>
            <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>
              미션 선택 및 참여 방법 안내
            </p>
          </div>

          {/* Step 2 */}
          <div style={{
            position: 'relative',
            marginBottom: '2rem',
            paddingLeft: '2rem'
          }}>
            <div style={{
              position: 'absolute',
              left: '-1rem',
              top: '0',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              2
            </div>
            <div style={{
              position: 'absolute',
              left: '0',
              top: '2rem',
              width: '2px',
              height: 'calc(100% + 2rem)',
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
            }}></div>
            <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Step 2</h3>
            <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>
              GPS 인증 및 사진/내용 업로드 안내
            </p>
          </div>

          {/* Step 3 */}
          <div style={{
            position: 'relative',
            marginBottom: '2rem',
            paddingLeft: '2rem'
          }}>
            <div style={{
              position: 'absolute',
              left: '-1rem',
              top: '0',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              3
            </div>
            <h3 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>Step 3</h3>
            <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>
              뱃지 획득, 결과 공유 방법 안내
            </p>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <button className="btn btn-secondary" style={{fontSize: '1.2rem', padding: '1.5rem 3rem'}}>
            ✅ 확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding; 