const Challenge = () => {
  const num = 25;
  const num2 = 10;
  return (
    <div>
      <p>A: {num}</p>
      <p>B: {num2}</p>
      <button onClick={() => console.log(num + num2)}>
        Realizar o Calculo
      </button>
    </div>
  );
};

export default Challenge;
