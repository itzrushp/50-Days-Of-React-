

const Temperature = ({temperature}) => {
  return (
    <div>
        {temperature < 15 && <h2>It's Cold Outside because temperature is {temperature}</h2>}
        {temperature >= 15 && temperature <= 25 && <h2>It's nice Outside because temperature is {temperature}</h2>}
        {temperature > 25 && <h2>It's Hot Outside because temperature is {temperature}</h2>}
    </div>
  )
}

export default Temperature