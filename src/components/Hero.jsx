/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "./Button"

const Hero = ({ button, setButton }) => {
  const [isHover, setIsHover] = useState(false)
  const handleDownload = () => {
    const path = "/archivo.pdf"
    const archivo = document.createElement('a');
    archivo.href = path;
    archivo.download = 'El Impacto de la digitalización en el mercado laboral Argentino pre y post pandemia (2019-2020).pdf';
    document.body.appendChild(archivo);
    archivo.click();
    document.body.removeChild(archivo);
  }

  return (
    <>
      <div
        className="w-100 flex flex-row items-center justify-center sm:h-96"
      >
        <div className="sm:w-1/2 flex flex-col">
          <div>
            <h2 className="text-4xl text-center text-[#005BB3] pt-4 sm:pt-0">
              <span className="roboto-bold-italic">El Impacto</span> de la digitalización en <br />el mercado <span className="roboto-bold-italic">laboral</span> Argentino Pre y Post pandemia (2019-2020)
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center pt-3 px-4 sm:px-0">
            <Button id={"home"} button={button} setButton={setButton} isActive={button.name === "home"}>Home</Button>
            <Button id={"taller1"} button={button} setButton={setButton} isActive={button.name === "taller1"}>Taller 1</Button>
            <Button id={"taller2"} button={button} setButton={setButton} isActive={button.name === "taller2"}>Taller 2</Button>
            <Button id={"taller3"} button={button} setButton={setButton} isActive={button.name === "taller3"}>Taller 3</Button>
            <Button id={"taller4"} button={button} setButton={setButton} isActive={button.name === "taller4"}>Taller 4</Button>
            <Button id={"taller5"} button={button} setButton={setButton} isActive={button.name === "taller5"}>Taller 5</Button>
            {/* <Button id={"taller6"} button={button} setButton={setButton} isActive={button.name === "taller6"}>Taller 6</Button> */}
            {/* <button className="rounded-md px-2 py-1 roboto-bold bg-[#9C9C9C] text-[#F0F0F0]">Taller 3</button> */}
            <button
              className="rounded-md px-2 py-1 roboto-bold bg-transparent border-2 border-[#005BB3] text-[#005BB3] hover:bg-[#005BB3] hover:text-[#F0F0F0]"
              onClick={handleDownload}
              onMouseOver={()=>setIsHover(true)}
              onMouseLeave={()=>setIsHover(false)}
            >
              <div className="flex flex-row items-center gap-2 hover:fill-white" >
                <svg
                  className={`w-6 h-6 ${isHover?"hover:fill-white":"fill-blue-900"}`}
                  alt="Icono descarga"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path>
                </svg>
                Monografia
              </div>
            </button>
          </div>
        </div>
        <div className="hidden sm:inline">
          <img src="/home-frame.png" alt="imagen home" />
        </div>
      </div>
    </>
  )
}

export default Hero