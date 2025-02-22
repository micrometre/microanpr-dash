import React from "react"
import { useLocation } from "react-router-dom"

// create new context
const Context = React.createContext({})

export function DashboardProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const location = useLocation()

  const toggleSidebar = React.useCallback(() => {
    setSidebarOpen(prevState => !prevState)
  }, [])

  const closeSidebar = React.useCallback(() => {
    setSidebarOpen(false)
  }, [])

  // set the html tag overflow to hidden
  React.useEffect(() => {
    document.documentElement.style.overflow = "hidden"
  }, [])

  // close Sidebar on route changes when viewport is less than 1024px
  React.useEffect(() => {
    return () => {
      if (sidebarOpen && window.innerWidth < 1024) {
        setSidebarOpen(false)
      }
    }
  }, [location, sidebarOpen])

  return (
    <Context.Provider value={{ sidebarOpen, toggleSidebar, closeSidebar }}>
      {children}
    </Context.Provider>
  )
}

// custom hook to consume all context values { sidebarOpen, toggleSidebar, closeSidebar }
export function useDashboardContext() {
  return React.useContext(Context)
}
