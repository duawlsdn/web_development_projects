import "./Intro.css";

function Intro() {

  return(
    <div className="intro">
      <div className="intro_saying">&quot;연습은 어제의 당신보다 당신을 더 낫게 만든다.&quot;</div>
      <div className="explain">
        <div className="quotes">
          <img src="src/img/quotes.png" alt="" />
        </div>
        <p>
          <span>1만 시간의 법칙</span>은 <br />어떤 분야의 전문가가 되기 위해서는 <br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </div>
    </div>
  );
}

export default Intro;