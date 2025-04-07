import "./contents.css";

function Contents() {
  const startButton = document.querySelector(".start_btn");
  const result = document.querySelector(".result");
  const modal = document.querySelector("#modal");
  const openButton = document.querySelector(".modal_btn");
  const closeButton = document.querySelector(".close_btn");
  const shareButton = document.querySelector(".share_btn");
  const loading = document.querySelector(".result_loading");

  function calculator() {
    const fieldValue = document.querySelector("#field_value");
    const timeValue = document.querySelector("#time_value");
    const timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == "") {
      alert('분야가 입력되지 않았습니다.');
      fieldValue.focus();
      return false;
    } else if (timeValue.value== "") {
      alert('시간이 입력되지 않았습니다.');
      timeValue.focus();
      return false;
    } else if (timeValue_int > 24) {
      alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
      return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
      fieldResult.innerText = fieldValue.value;
      timeResult.innerText = parseInt((10000/timeValue_int), 10);
      loading.style.display = "none";
      result.style.display = "flex";
    }, 1800);   
  }

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if(event.target == modal) {
      closeModal();
    }
  };

  function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
      alert("URL이 복사되었습니다"); 
    }); 
  }

  shareButton.addEventListener('click', copyUrl);
  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
  startButton.addEventListener("click", calculator);

  return (
    <section id="contents">
      <div className="wrapper">
        <div className="title">
          <img className="clock_img" src="src/img/clock.png" alt="" />
          <div className="title_img">
            <img src="src/img/title.png" alt="1만 시간의 법칙" />
          </div>
        </div>
        <div className="intro">
          <div className="intro_saying">&quot;연습은 어제의 당신보다 당신을 더 낫게 만든다.&quot;</div>
          <div className="explain">
            <div className="quotes">
              <img src="src/img/quotes.png" alt="" />
            </div>
            <p>
              <span>1만 시간의 법칙</span>은<br />어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
          </div>
        </div>
        <div className="inputs">
          <div className="field">
            <p>나는</p>
            <input id="field_value" type="text" placeholder="예)프로그래밍" />
            <p>전문가가 될 것이다.</p>
          </div>
          <div className="time">
            <p>그래서 앞으로 매일 하루에</p>
            <div>
              <input id="time_value" type="number" placeholder="예)5" />
              <p>시간씩 훈련할 것이다.</p>
            </div>
          </div>
        </div>
        <div className="start">
          <div className="btn_wrap">
            <button className="start_btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            <div className="click_img">
              <img src="src/img/click.png" alt="" />
            </div>
          </div>
        </div>
        <div className="result_loading">
          <div className="img_wrap">
            <img src="src/img/loading.png" alt="로딩 중" />
          </div>
        </div>
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
      </div>
    </section>
  );
}

export default Contents;