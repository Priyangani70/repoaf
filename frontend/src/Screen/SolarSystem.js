import React from 'react'


import backgroundH from "../Component/gif/planets-solar-system.gif";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function System() {
  return (
   
    <div
      class="bk_Img"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        backgroundSize: "cover",
        
      }}
    >
        <div style={{ textDecoration: "none", color: "white" }}>
  
        <h1 
          className="my-5 display-3 fw-bold ls-tight px-3" 
          style={
            {
              color: 'hsl(218, 81%, 75%)',
              textAlign:'center'
          }
          }>
            Solar System</h1>
          <br></br>
          <br></br>
          <br></br>

          <p>
            The Solar System[b] is the gravitationally bound system of the Sun and the objects that orbit it.[9] It was formed 4.6 
            billion years ago when a dense region of a molecular cloud collapsed, forming the Sun and a protoplanetary disc. The Sun 
            is an ordinary main sequence star that maintains a balanced equilibrium by the fusion of hydrogen into helium at its core, 
            releasing this energy from its outer photosphere.

            The largest objects that orbit the Sun are the eight planets. In order from the Sun, they are four terrestrial planets 
            (Mercury, Venus, Earth and Mars); two gas giants (Jupiter and Saturn); and two ice giants (Uranus and Neptune). 
            All terrestrial planets have solid surfaces. Inversely, all giant planets do not have a definite surface, as they are 
            mainly composed of gases and liquids. Over 99.86% of the Solar System's mass is in the Sun and nearly 90% of the remaining 
            mass is in Jupiter and Saturn.

            There is a strong consensus among astronomers[c] that the Solar System has at least eight dwarf planets: Ceres, Pluto, Haumea, 
            Quaoar, Makemake, Gonggong, Eris, and Sedna. There are a vast number of small Solar System bodies, such as asteroids, comets, 
            centaurs, meteoroids, and interplanetary dust clouds. Some of these bodies are in the asteroid belt (between Mars's and 
            Jupiter's orbit) and the Kuiper belt (just outside Neptune's orbit).[d] Six planets, six dwarf planets, and other bodies 
            have orbiting natural satellites, which are commonly called 'moons'.

            The Solar System is constantly flooded by the Sun's charged particles, the solar wind, forming the heliosphere. Around 75–90 
            astronomical units, the solar wind is halted, resulting in the heliopause. This is the boundary of the Solar System to 
            interstellar space. The outermost region of the Solar System is the theorized Oort cloud, the source for long-period comets, 
            extending 2,000–200,000 astronomical units (0.032–3.2 light-years). The closest star to the Solar System, Proxima Centauri, 
            is 4.25 light-years away. Both stars belong to the Milky Way galaxy.
          </p>


          <h3>
            Formation and evolution
          </h3>
          <p>      
            Main article: Formation and evolution of the Solar System
            Past The Solar System formed 4.568 billion years ago from the gravitational collapse of a region within a large molecular 
            cloud.[a] This initial cloud was likely several light-years across and probably birthed several stars.[11] As is typical of 
            molecular clouds, this one consisted mostly of hydrogen, with some helium, and small amounts of heavier elements fused by 
            previous generations of stars.[12]

            As the pre-solar nebula[12] collapsed, conservation of angular momentum caused it to rotate faster. The center, where most of 
            the mass collected, became increasingly hotter than the surrounding disc.[11] As the contracting nebula rotated faster, it 
            began to flatten into a protoplanetary disc with a diameter of roughly 200 AU (30 billion km; 19 billion mi)[11] and a hot, 
            dense protostar at the center.[13][14] The planets formed by accretion from this disc,[15] in which dust and gas 
            gravitationally attracted each other, coalescing to form ever larger bodies. Hundreds of protoplanets may have existed in 
            the early Solar System, but they either merged or were destroyed or ejected, leaving the planets, dwarf planets, and leftover 
            minor bodies.[16][17]
          </p>

          <h3>
            Present and future
          </h3>

          <p>
            The current Sun compared to its peak size in the red-giant phase
            The main-sequence phase, from beginning to end, will last about 10 billion years for the Sun compared to around two billion 
            years for all other subsequent phases of the Sun's pre-remnant life combined.[22] Solar wind from the Sun created the 
            heliosphere and swept away the remaining gas and dust from the protoplanetary disc into interstellar space.[19]

            The Solar System is in a relatively stable, slowly evolving state by following isolated, gravitationally bound orbits around 
            the Sun.[23] Although the Solar System has been fairly stable for billions of years, it is technically chaotic, and may 
            eventually be disrupted. There is a small chance that another star will pass through the Solar System in the next few 
            billion years. Although this could destabilize the system and eventually lead millions of years later to expulsion of planets, 
            collisions of planets, or planets hitting the Sun, it would most likely leave the Solar System much as it is today.[24]

            The Solar System will remain roughly as it is known today until the hydrogen in the core of the Sun has been entirely converted 
            to helium, which will occur roughly 5 billion years from now. This will mark the end of the Sun's main-sequence life. At that 
            time, the core of the Sun will contract with hydrogen fusion occurring along a shell surrounding the inert helium, and the 
            energy output will be greater than at present. The outer layers of the Sun will expand to roughly 260 times its current 
            diameter, and the Sun will become a red giant. Because of its increased surface area, the surface of the Sun will be 
            cooler (2,600 K (2,330 °C; 4,220 °F) at its coolest) than it is on the main sequence.[22]

            The expanding Sun is expected to vaporize Mercury as well as Venus, and render Earth uninhabitable (possibly destroying it 
            as well).[25] Eventually, the core will be hot enough for helium fusion; the Sun will burn helium for a fraction of the time 
            it burned hydrogen in the core. The Sun is not massive enough to commence the fusion of heavier elements, and nuclear reactions 
            in the core will dwindle. Its outer layers will be ejected into space, leaving behind a dense white dwarf, half the original 
            mass of the Sun but only the size of Earth.[22] The ejected outer layers may form a planetary nebula, returning some of the 
            material that formed the Sun—but now enriched with heavier elements like carbon—to the interstellar medium.[26][27]
          </p>

        </div>
      
    </div>
  );

}
