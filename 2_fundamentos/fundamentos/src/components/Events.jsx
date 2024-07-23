const Events = () => {
  const handleMyEvent = (e) => {
    alert("Clicou no botão");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
        <button onClick={() => alert("Utilize apenas pra pequenos código")}>
          Clique aqui de novo!
        </button>
        <button
          onClick={() => {
            if (true) {
              alert("não use assim");
            }
          }}
        >
          Não é uma boa prática
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
