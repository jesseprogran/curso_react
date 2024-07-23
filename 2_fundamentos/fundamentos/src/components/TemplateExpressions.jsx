const TemplateExpressions = () => {
  const name = "Jessé Silva";
  const data = {
    age: 32,
    job: "Programador",
  };
  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Atualmente atuo como: {data.job} e tenho {data.age} anos de  idade.</p>
    </div>
  );
};

export default TemplateExpressions;
