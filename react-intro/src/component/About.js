import { useState } from "react";

const  Banner = ({purpose}) => (
  <div>{purpose}</div>
)

function About () {
  const [firstName, setfirstName] = useState("papa")
  const [company, setcompany] = useState ("gomycode")

    return (
        <div>
        
          <h1> my name is victoria </h1>
         <Banner purpose={'For Home'} />
         <Banner purpose={'For School'} />


          <button onClick={() => setcompany("Apple")}>{company}</button>
         <button onClick={()=> setfirstName("olalekan AKA onyebuchi")}>{firstName}</button>
          
        </div>
        
    )

}

export default About