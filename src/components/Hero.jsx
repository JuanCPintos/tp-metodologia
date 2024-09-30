/* eslint-disable react/prop-types */
import Button from "./Button"

const Hero = ({button, setButton}) => {

  

  return (
    <>
      <div
        className="w-100 flex flex-row items-center justify-center sm:h-96"
        
      >
        <div className="sm:w-1/2 flex flex-col">
          <div>
            <h2 className="text-4xl text-center text-[#005BB3] pt-4 sm:pt-0">
              <span className="roboto-bold-italic">Impacto</span> de la digitalización en <br />el mercado <span className="roboto-bold-italic">laboral</span> Argentino
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center pt-3 px-4 sm:px-0">
            <Button id={"home"} button={button} setButton={setButton} isActive={button.name === "home"}>Home</Button>
            <Button id={"taller1"} button={button} setButton={setButton} isActive={button.name === "taller1"}>Taller 1</Button>
            <Button id={"taller2"} button={button} setButton={setButton} isActive={button.name === "taller2"}>Taller 2</Button>
            {/* <Button id={"taller3"} button={button} setButton={setButton} isActive={button.name === "taller3"}>Taller 3</Button> */}
            <button className="rounded-md px-2 py-1 roboto-bold bg-[#9C9C9C] text-[#F0F0F0]">Taller 3</button>
          </div>
        </div>
        <div className="hidden sm:inline">
          <img src="/public/home-frame.png" alt="imagen home" />
        </div>
      </div>
    </>
  )
}

export default Hero