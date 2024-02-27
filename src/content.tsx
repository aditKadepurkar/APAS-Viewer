import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://apas.umn.edu/*"]
}

export const getCourses = () => {
  const courses = document.getElementsByClassName("course draggable")
  return courses
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const APASOverlay = () => {
  const courseList = getCourses()
  const course = courseList[130]
  const element = document.querySelector(
    '.course.draggable[number="5561"][department="1IE"]'
  )
  return (
    <div className="plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-32 plasmo-right-8"></div>
  )
}

export default APASOverlay
