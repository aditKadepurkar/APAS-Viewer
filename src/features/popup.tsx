const Popup = ({ dept, num }: { dept: string; num: number }) => {
  return (
    <div className="plasmo-absolute plasmo-justify-center plasmo-w-72 plasmo-h-60 plasmo-z-50">
      <h1>
        {" "}
        {dept} {num}{" "}
      </h1>
    </div>
  )
}

export default Popup
