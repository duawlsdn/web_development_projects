import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section>
        <button>Login</button>
      </section>
      <h3>주문을 선택해주세요.</h3>
      <search>
        <button onClick={() => navigate(`/menu`)}>dine-in</button>
        <button onClick={() => navigate(`/menu`)}>take-out</button>
      </search>
    </div>
  );
}

export default Home;