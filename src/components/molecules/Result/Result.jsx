import React, {useState, useEffect} from 'react'
import { Wrapper, Header, UnitsWrapper } from './Result.styles'
import Unit from '../../atoms/Unit/Unit'

const Result = ({ calculationData }) => {

  const [unitsList, setUnitsList] = useState([])
  let result = true;
  if (calculationData.woodAmount == 0 && calculationData.foodAmount == 0 && calculationData.stoneAmount == 0 && calculationData.goldAmount == 0) result = false;

  useEffect(() => {
    fetch(`http://aoe2.devops.sages.pl/api/v1/units`, {accept: 'application/json'
    })
      .then((response) => response.json())
      .then((data) => setUnitsList(data.units))
    }, [])

  return (
    <Wrapper>
      { result && (
        <React.Fragment>
          <Header>Liczba jednostek, które możesz kupić za posiadane surowce:</Header>
          <UnitsWrapper>
            {unitsList.map((unit) => {
              return <Unit key={unit.id} unit={unit} calculationData={calculationData} />
            })}
          </UnitsWrapper>
        </React.Fragment>
      ) || <h3>Uzupełnij surowce żeby zobaczyć jednostki</h3>}
    </Wrapper>
  )
}

export default Result
