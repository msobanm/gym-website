import React from "react"
import { Link, useLocation } from "react-router-dom"

type StyledLinkProps = {
  route: string
  name: string
}

function StyledLink({ route, name }: StyledLinkProps) {
  return (
    <Link to={route} className="text-secondary hover:text-secondary-2">
      {name}
    </Link>
  )
}

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  const capitalizeAndReplace = (string: string) => {
    const capitalizedString =
      string && string[0].toUpperCase() + string.slice(1)
    const replacedString = capitalizedString.split("%20").join(" ")

    return replacedString
  }

  return (
    <>
      <div className="px-2">
        <div className="flex gap-2 border-b-2 px-2">
          <StyledLink route="/" name="Home" />
          <div>{">"}</div>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
            const isLast = index === pathnames.length - 1
            return (
              <span key={name}>
                <span className="text-secondary">
                  {isLast ? (
                    <span>{capitalizeAndReplace(name)}</span>
                  ) : (
                    <StyledLink
                      route={routeTo}
                      name={capitalizeAndReplace(name)}
                    />
                  )}
                </span>
                <span>{!isLast && " > "}</span>
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Breadcrumbs
