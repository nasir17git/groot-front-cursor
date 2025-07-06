import React from 'react';

function BadgeDetail({ onPageChange }) {
  return (
    <div className="fade-in">
      {/* 헤더 */}
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '2rem'}}>
        <button 
          className="btn btn-secondary" 
          style={{marginRight: '1rem'}}
          onClick={() => onPageChange('badgeCollection')}
        >
          ← 뒤로가기
        </button>
        <h2 className="section-title" style={{margin: '0'}}>🏅 뱃지 상세 정보</h2>
      </div>

      {/* 뱃지 상세 정보 */}
      <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            margin: '0 auto 1rem auto'
          }}>
            🥤
          </div>
          <h3 style={{color: '#2c3e50', fontSize: '1.8rem', marginBottom: '0.5rem'}}>다회용기 마스터</h3>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>📝 뱃지 설명</h4>
            <p style={{color: '#7f8c8d', lineHeight: '1.6'}}>
              카페나 식당에서 일회용 컵 대신 다회용기를 사용하여 환경을 보호하는 친환경 실천가입니다. 
              플라스틱 사용을 줄이고 지구를 지키는 작은 실천을 이어가고 있어요!
            </p>
          </div>

          <div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>🎯 획득 조건</h4>
            <div style={{
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              color: 'white',
              padding: '1rem',
              borderRadius: '10px'
            }}>
              <p style={{margin: '0', fontSize: '1.1rem'}}>
                다회용기 사용 미션을 <strong>10회</strong> 완료하면 획득할 수 있습니다.
              </p>
            </div>
          </div>

          <div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>📅 획득 일자</h4>
            <p style={{color: '#7f8c8d', fontSize: '1.1rem'}}>
              2024년 12월 15일
            </p>
          </div>

          <div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>🏆 레벨 정보</h4>
            <div style={{
              background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
              color: 'white',
              padding: '1rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <p style={{margin: '0', fontSize: '1.1rem'}}>
                현재 레벨: <strong>Lv.3 🍇 영동포도 송이</strong>
              </p>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9}}>
                다음 레벨까지: 62.1kg 절감 필요
              </p>
            </div>
          </div>

          <div>
            <h4 style={{color: '#2c3e50', marginBottom: '0.5rem'}}>📊 레벨별 기준</h4>
            <div style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '10px'
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>Lv.1: 🧄 의성마늘 씨앗</span>
                <span>~10kg</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>Lv.2: 🍗 안동찜닭 한 접시</span>
                <span>~50kg</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#43e97b', fontWeight: 'bold'}}>
                <span>Lv.3: 🍇 영동포도 송이</span>
                <span>~100kg</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>Lv.4: 🍊 청도감나무 한 그루</span>
                <span>~300kg</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>Lv.5: 🌾 경북 농산물 축제</span>
                <span>~700kg+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetail; 