import type { PlasmoCSConfig } from "plasmo"
import cssText from "data-text:~style.css"
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://apas.umn.edu/*"],
  css: ["overlay.css"]
}

const Popup = ({ dept, num }: { dept: string; num: number }) => {
  console.log("Popup!")
  return (
    <span
      className="hw-top"
      style={{
        padding: 12
      }}>
      CSUI OVERLAY FIXED POSITION
    </span>
  )
}

export default Popup
