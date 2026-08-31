import "@/styles/FloatingButtons.css"
import { BsBasket2 , BsHeadset } from "react-icons/bs"

function FloatingButtons() {
  return (
    <>
      <button className="floating-button floating-support" type="button">
        <BsHeadset />
      </button>

      <button className="floating-button floating-supermarket" type="button">
        <BsBasket2 />
        <span>سوپرمارکت</span>
      </button>
    </>
  )
}

export default FloatingButtons