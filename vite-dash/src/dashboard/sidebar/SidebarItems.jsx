import { data } from "./data"
import { useLocation, Link } from "react-router-dom"

const style = {
  title: 
  "block text-lg font-bold text-neutral-800 dark:text-neutral-200 dark:text-neutral-200  mx-4 text-sm",
  active:
    " dark:bg-neutral-700    border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500",
  link:
    "dark:bg-neutral-700  duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500"
}

export function SidebarItems() {
  const { pathname } = useLocation()
  return (
    <ul>
      {data.map(item => (
        <li key={item.title}>
          <Link to={item.link}>
            <span
              className={`${style.link} 
              ${item.link === pathname && style.active}`}
            >
              <span>{item.icon}</span>
              <span className={style.title}>{item.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
