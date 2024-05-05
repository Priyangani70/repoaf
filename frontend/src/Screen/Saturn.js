import React from 'react'
import SaturnImg from '../Component/PlanetImg/Saturn.jpg';

export default function () {
  return (
    <div>
        <h1 
          className="my-5 display-3 fw-bold ls-tight px-3" 
          style={
            {
              color: 'rgb(77, 134, 156)',
              textAlign:'center'
              }
          }>
            Saturn
        </h1>
        <p>
            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an 
            average radius of about nine-and-a-half times that of Earth.[26][27] It has only one-eighth the average density of Earth, but 
            is over 95 times more massive.[28][29][30] Even though Saturn is nearly the size of Jupiter, Saturn has less than one-third of 
            Jupiter's mass. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km) with an orbital period of 29.45 years.
            <br></br>
            <br></br>
            <img
            className="d-block w-100"
            src={SaturnImg}
            
          />
            Saturn's interior is thought to be composed of a rocky core, surrounded by a deep layer of metallic hydrogen, an intermediate 
            layer of liquid hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn has a pale yellow hue due to ammonia 
            crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's 
            planetary magnetic field, which is weaker than Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's 
            larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's.[31] The outer atmosphere is generally bland 
            and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 kilometres per hour 
            (1,100 miles per hour).
            <br></br>
            <br></br>
            The planet has a bright and extensive ring system composed mainly of ice particles, with a smaller amount of rocky debris and 
            dust. At least 146 moons[32] are known to orbit the planet, of which 63 are officially named; this does not include the hundreds 
            of moonlets in its rings. Titan, Saturn's largest moon and the second largest in the Solar System, is larger (while less massive) 
            than the planet Mercury and is the only moon in the Solar System to have a substantial atmosphere.[33]
        </p>
    </div>
  )
}
