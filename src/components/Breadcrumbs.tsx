import React from "react"
import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  const capitalize = (string: string) => {
    return string && string[0].toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div className="px-2">
        <div className="flex gap-2 border-b-2 px-2">
          <Link to="/">Home</Link>
          <div>/</div>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
            const isLast = index === pathnames.length - 1
            return (
              <span key={name}>
                {isLast ? (
                  <span>{capitalize(name)}</span>
                ) : (
                  <Link to={routeTo}>{capitalize(name)}</Link>
                )}
                {!isLast && " / "}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Breadcrumbs
