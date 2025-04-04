import './Modal.css';

function Modal() {
  return (
    <div className="modal_wrap">
      <div className="cheer">
        <h1>화이팅!!♥♥♥</h1>
        <h3>당신의 꿈을 응원합니다!</h3>
      </div>
      <div className="licat_img">
        <img src="src/img/licat.png" alt="라이캣응원" />
      </div>
      <div className="btn">
        <button className="close_btn">종료하고 진짜 훈련하러 가기 GO!GO!</button>
        <p>(그냥 닫기 버튼입니다.)</p>
      </div>
    </div>
  );
}

export default Modal;