
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
      <h2>Detalhes do Carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este Carro é Novo!</p>}
    </div>
  )
}

export default CarDetails