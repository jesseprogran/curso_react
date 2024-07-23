const Challenge = () => {
  const a = 100;
  const b = 10;
  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => alert(a + b)}>Realizar o Calculo</button>
    </div>
  );
};

export default Challenge;
