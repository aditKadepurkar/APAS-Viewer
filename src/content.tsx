import type { PlasmoCSConfig } from "plasmo"
import Popup from "~features/popup"

export const config: PlasmoCSConfig = {
  matches: ["https://apas.umn.edu/*"],
  world: "MAIN"
}

export const getCourses = () => {
  const courses = document.getElementsByClassName("course draggable")
  return courses
}

export const handleClick = (course: Element) => {
  const num = Number(course.getAttribute("number"))
  const dept = course.getAttribute("department")
  console.log(num + " " + dept)
  ;<Popup dept={dept} num={num} />
}

const APASOverlay = () => {
  const courseList = getCourses()
  const course = courseList[130]
  course.addEventListener("click", () => handleClick(course))
  return (
    <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8"></div>
  )
}

export default APASOverlay
