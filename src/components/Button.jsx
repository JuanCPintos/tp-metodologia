/* eslint-disable react/prop-types */
const Button = ({ id, children, isActive, button, setButton }) => {

  const handleClick = (e) => {
    if (e.currentTarget.id === "home") {
      setButton({ ...button, name: "home" })
    }
    if (e.currentTarget.id === "taller1") {
      setButton({ ...button, name: "taller1" })
    }
    if (e.currentTarget.id === "taller2") {
      setButton({ ...button, name: "taller2" })
    }
    if (e.currentTarget.id === "taller3") {
      setButton({ ...button, name: "taller3" })
    }
  }

  return (
    <>
      <button
        id={id}
        onClick={(e) => handleClick(e)}
        className={`rounded-md px-2 py-1 roboto-bold ${isActive ? 'bg-[#005BB3] text-[#F0F0F0]' : 'bg-transparent border-2 border-[#005BB3] text-[#005BB3]'}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button