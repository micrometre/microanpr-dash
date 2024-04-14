import css from "../style.module.css"
import { SidebarItems } from "./SidebarItems"
import { SidebarHeader } from "./SidebarHeader"
import { useDashboardContext } from "../Provider"
import ThemeSwitcher from '../../components/ThemeSwitcher';

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0"
  },
  container: "dark:bg-neutral-800 pb-32 lg:pb-6",
  close: "hidden lg:block lg:w-64 lg:z-auto",
  open: "w-8/12 absolute z-40 sm:w-5/12 lg:hidden",
  default: "dark:bg-neutral-800  shadow-2xl bg-white h-screen overflow-y-auto top-0 lg:relative"
}

export function Sidebar(props) {
  const { sidebarOpen } = useDashboardContext()
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  )
}
