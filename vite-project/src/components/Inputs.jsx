import { useState } from "react";
import "./Inputs.css";

function Inputs() {
  const [ fieldValue, setFieldValue] = useState('');
  const [ timeValue, setTimeValue ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(fieldValue === ''){
      alert('분야가 입력되지 않았습니다.');
      return;
    }
    if(timeValue === ''){
      alert('시간이 입력되지 않았습니다.');
      return;
    }
    const timeValueInt = parseInt(timeValue, 10);
    if (timeValueInt > 24) {
      alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
      return;
    }
  }

  return (
    <div className="inputs">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div>
          <p>나는</p>
          <input 
            type="text"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            placeholder="예) 프로그래밍" />
          <p>전문가가 될 것입이다.</p>
          </div>
        </div>
        <div className="time">
          <div>
            <p>그래서 앞으로 매일 하루에</p>
              <div>
              <input 
                type="number"
                value={timeValue}
                onChange={(e) => setTimeValue(e.target.value)}
                placeholder="예) 5" />
              <p>시간씩 훈련할 것이다.</p>
              </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inputs;