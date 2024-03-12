import type { PlasmoCSConfig } from "plasmo"
import Popup from "~features/popup"
import { useState } from "react"

import cssText from "data-text:~style.css"
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://apas.umn.edu/*"],
  all_frames: true
}

export const getCourses = () => {
  const courses = document.getElementsByClassName("course draggable")
  return courses
}

export const handleClick = (course: Element) => {
  const num = Number(course.getAttribute("number"))
  const dept = course.getAttribute("department")
  console.log(num + " " + dept)
  setCurr(num)
  return (
    <div
      className="hw-top plasmo-absolute plasmo-z-20 plasmo-flex plasmo-bg-gray-600 plasmo-rounded-xl plasmo-h-80 plasmo-w-96 p-12">
      Handle Click overlay
    </div>
  )
}

export const[curr, setCurr] = useState(null);

const APASOverlay = () => {
  const courseList = getCourses()
  const course = courseList[130]
  course.addEventListener("click", () => handleClick(course))
  
  return (
    <div>
    {curr === null ? (
      <div className="plasmo-opacity-0"> </div>
    ) : (
      <div
        className="hw-top plasmo-absolute plasmo-z-20 plasmo-flex plasmo-bg-black plasmo-rounded-xl plasmo-h-80 plasmo-w-96 p-12 plasmo-text-white"
        style={{
          padding: 12
        }}>
        CSUI OVERLAY FIXED POSITION
      </div>
    )}
    </div>
  );
}

export default APASOverlay
