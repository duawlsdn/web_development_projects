function Result() {
  

  return (
    <div className="result">
      <div className="result_wrap">
        <div>
          당신은<span className="field_result"></span>전문가가 되기 위해서
        </div>
        <div>
          대략<span className="time_result"></span>일 이상 훈련하셔야 합니다! :)
        </div>
      </div>
      <div className="buttons">
        <div className="go">
          <button className="modal_btn">훈련하러 가기 GO!GO!</button>
        </div>
        <div className="share">
          <button className="share_btn">공유하기</button>
        </div>
      </div>
    </div>
  );
}

export default Result;