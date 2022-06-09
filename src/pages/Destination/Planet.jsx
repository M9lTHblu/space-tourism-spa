import styled from 'styled-components/macro'
import {useParams} from 'react-router-dom';
import moon from '../../assets/destination/image-moon.webp'
import mars from '../../assets/destination/image-mars.webp'
import europa from '../../assets/destination/image-europa.webp'
import titan from '../../assets/destination/image-titan.webp'

const planets = {
moon: {name: 'moon', img: moon},
mars: {name: 'mars', img: mars},
europa: {name: 'europa', img: europa},
titan: {name: 'titan', img: titan},
}

export const Planet = () => {
  const {planet} = useParams()

  return (
      <div>
        <Img src={planets[planet].img}
             alt={`This picture shows the planet ${planets[planet].name}`}
        />
        {planets[planet].name}
      </div>
  )
}

const Img = styled.img`
  width: 170px;
`
