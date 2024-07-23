const Events = () => {
  const handleMyEvent = (e) => {
    alert("Clicou no botão");
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
    </div>
  );
};

export default Events;
