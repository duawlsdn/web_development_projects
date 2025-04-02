import { useState } from "react";

function Values() {
  const [ fieldValue, setFieldValue] = useState('');
  const [ timeValue, setTimeValue ] = useState('');

  return (
    <div className="inputs">
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
    </div>
  );
}

export default Values;