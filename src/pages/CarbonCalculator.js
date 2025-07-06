import React, { useState } from 'react';

function CarbonCalculator({ onPageChange }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    people: 1,
    transportation: [],
    accommodation: [],
    courses: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="card">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👥</div>
              <h3 style={{color: '#2d3748', marginBottom: '1rem'}}>Step 1: 인원 수</h3>
              <p style={{color: '#718096'}}>여행에 참여할 인원을 선택해주세요</p>
            </div>
            <div style={{textAlign: 'center'}}>
              <input
                type="number"
                min="1"
                max="10"
                value={formData.people}
                onChange={(e) => handleInputChange('people', parseInt(e.target.value))}
                style={{
                  fontSize: '2rem',
                  textAlign: 'center',
                  width: '150px',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '3px solid #22c55e'
                }}
              />
              <p style={{color: '#718096', marginTop: '1rem'}}>명</p>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="card">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚗</div>
              <h3 style={{color: '#2d3748', marginBottom: '1rem'}}>Step 2: 교통수단</h3>
              <p style={{color: '#718096'}}>출발지, 도착지, 교통수단을 입력해주세요</p>
            </div>
            <div style={{
              background: '#16a34a',
              padding: '2rem',
              borderRadius: '15px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>교통수단 선택</div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
                {['자동차', '기차', '자전거', '비행기', '버스', '도보'].map(transport => (
                  <button
                    key={transport}
                    className="btn"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      border: '2px solid white',
                      fontSize: '1rem'
                    }}
                  >
                    {transport}
                  </button>
                ))}
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <input
                  type="text"
                  placeholder="출발지"
                  style={{padding: '1rem', borderRadius: '10px', border: 'none'}}
                />
                <input
                  type="text"
                  placeholder="도착지"
                  style={{padding: '1rem', borderRadius: '10px', border: 'none'}}
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="card">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏨</div>
              <h3 style={{color: '#2d3748', marginBottom: '1rem'}}>Step 3: 숙박</h3>
              <p style={{color: '#718096'}}>숙박 기간과 유형을 선택해주세요</p>
            </div>
            <div style={{
              background: '#15803d',
              padding: '2rem',
              borderRadius: '15px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>숙박 유형</div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
                {['민박', '호텔', '풀빌라', '캠핑', '게스트하우스'].map(accommodation => (
                  <button
                    key={accommodation}
                    className="btn"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      border: '2px solid white',
                      fontSize: '1rem'
                    }}
                  >
                    {accommodation}
                  </button>
                ))}
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                <input
                  type="date"
                  placeholder="체크인"
                  style={{padding: '1rem', borderRadius: '10px', border: 'none'}}
                />
                <input
                  type="date"
                  placeholder="체크아웃"
                  style={{padding: '1rem', borderRadius: '10px', border: 'none'}}
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="card">
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🗺️</div>
              <h3 style={{color: '#2d3748', marginBottom: '1rem'}}>Step 4: 관광 코스</h3>
              <p style={{color: '#718096'}}>방문할 생태관광 코스를 선택해주세요</p>
            </div>
            <div style={{
              background: '#14532d',
              padding: '2rem',
              borderRadius: '15px',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{fontSize: '1.5rem', marginBottom: '1rem'}}>생태관광 코스</div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                {['문경새재 도립공원', '청도 감나무 숲', '영양 백일홍', '울진 해안길'].map(course => (
                  <button
                    key={course}
                    className="btn"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      border: '2px solid white',
                      fontSize: '1rem',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="section-title">📊 탄소배출량 계산</h2>
      
      {/* 진행 단계 표시 */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        marginBottom: '2rem',
        border: '2px solid #22c55e'
      }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          {[1, 2, 3, 4].map(step => (
            <div key={step} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: step <= currentStep ? '#22c55e' : '#e2e8f0',
                color: step <= currentStep ? 'white' : '#a0aec0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginBottom: '0.5rem'
              }}>
                {step}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: step <= currentStep ? '#22c55e' : '#a0aec0',
                fontWeight: step <= currentStep ? 'bold' : 'normal'
              }}>
                Step {step}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 현재 단계 렌더링 */}
      {renderStep()}

      {/* 네비게이션 버튼 */}
      <div className="card" style={{textAlign: 'center'}}>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
          {currentStep > 1 && (
            <button className="btn btn-secondary" onClick={prevStep}>
              ← 이전
            </button>
          )}
          {currentStep < 4 ? (
            <button className="btn" onClick={nextStep}>
              다음 →
            </button>
          ) : (
            <button className="btn" style={{
              background: '#16a34a'
            }}>
              🧮 계산하기
            </button>
          )}
        </div>
      </div>

      {/* 정보 안내 */}
      <div className="card glass" style={{
        background: '#f0fdf4',
        textAlign: 'center',
        border: '2px solid #22c55e'
      }}>
        <h4 style={{color: '#2d3748', marginBottom: '1rem'}}>💡 안내사항</h4>
        <p style={{color: '#718096', lineHeight: '1.6'}}>
          • 비로그인 사용자도 계산을 경험할 수 있어요<br/>
          • 결과 조회를 위해서는 로그인이 필요합니다<br/>
          • 정확한 계산을 위해 모든 정보를 입력해주세요
        </p>
      </div>
    </div>
  );
}

export default CarbonCalculator; 