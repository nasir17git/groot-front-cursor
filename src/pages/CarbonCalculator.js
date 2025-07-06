import React, { useState } from 'react';

function CarbonCalculator({ onPageChange }) {
  const [step, setStep] = useState(1);

  return (
    <div className="fade-in">
      <h2 className="section-title">📊 탄소배출량 계산</h2>
      
      {/* 진행 단계 표시 */}
      <div className="card">
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: step >= 1 ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            1
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: step >= 2 ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            2
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: step >= 3 ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            3
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: step >= 4 ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' : '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            4
          </div>
        </div>

        {/* Step 1: 인원 수 */}
        {step === 1 && (
          <div className="card">
            <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>👥 인원 수</h3>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👥</div>
              <input 
                type="number" 
                placeholder="인원 수를 입력하세요"
                style={{
                  padding: '1rem',
                  fontSize: '1.2rem',
                  border: '2px solid #43e97b',
                  borderRadius: '10px',
                  width: '200px',
                  textAlign: 'center'
                }}
              />
            </div>
            <button className="btn" onClick={() => setStep(2)}>다음 단계</button>
          </div>
        )}

        {/* Step 2: 출발지-도착지, 교통 */}
        {step === 2 && (
          <div className="card">
            <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🚗 교통 정보</h3>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚗</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <input 
                  placeholder="출발지"
                  style={{
                    padding: '0.8rem',
                    fontSize: '1rem',
                    border: '2px solid #43e97b',
                    borderRadius: '10px',
                    width: '250px'
                  }}
                />
                <input 
                  placeholder="도착지"
                  style={{
                    padding: '0.8rem',
                    fontSize: '1rem',
                    border: '2px solid #43e97b',
                    borderRadius: '10px',
                    width: '250px'
                  }}
                />
                <select style={{
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #43e97b',
                  borderRadius: '10px',
                  width: '250px'
                }}>
                  <option>교통수단 선택</option>
                  <option>자동차</option>
                  <option>기차</option>
                  <option>자전거</option>
                  <option>비행기</option>
                  <option>버스</option>
                  <option>도보</option>
                </select>
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button className="btn btn-secondary" onClick={() => setStep(1)}>이전</button>
              <button className="btn" onClick={() => setStep(3)}>다음 단계</button>
            </div>
          </div>
        )}

        {/* Step 3: 기간, 숙박 */}
        {step === 3 && (
          <div className="card">
            <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🏨 숙박 정보</h3>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🏨</div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                <input 
                  type="date"
                  style={{
                    padding: '0.8rem',
                    fontSize: '1rem',
                    border: '2px solid #43e97b',
                    borderRadius: '10px',
                    width: '250px'
                  }}
                />
                <select style={{
                  padding: '0.8rem',
                  fontSize: '1rem',
                  border: '2px solid #43e97b',
                  borderRadius: '10px',
                  width: '250px'
                }}>
                  <option>숙박 유형 선택</option>
                  <option>민박</option>
                  <option>호텔</option>
                  <option>풀빌라</option>
                  <option>게스트하우스</option>
                </select>
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button className="btn btn-secondary" onClick={() => setStep(2)}>이전</button>
              <button className="btn" onClick={() => setStep(4)}>다음 단계</button>
            </div>
          </div>
        )}

        {/* Step 4: 관광 코스 */}
        {step === 4 && (
          <div className="card">
            <h3 style={{color: '#2c3e50', marginBottom: '1rem'}}>🗺️ 관광 코스</h3>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🗺️</div>
              <p style={{color: '#7f8c8d', marginBottom: '1rem'}}>방문할 관광 코스를 선택하세요</p>
              <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                <div className="card" style={{cursor: 'pointer', textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏞️</div>
                  <h4>문경새재 도립공원</h4>
                </div>
                <div className="card" style={{cursor: 'pointer', textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏘️</div>
                  <h4>안동 하회마을</h4>
                </div>
                <div className="card" style={{cursor: 'pointer', textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🌳</div>
                  <h4>청도 감나무 숲</h4>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button className="btn btn-secondary" onClick={() => setStep(3)}>이전</button>
              <button className="btn">📊 탄소배출량 계산하기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarbonCalculator; 