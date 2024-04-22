import React from "react";
import { TopBar } from "./TopBar";
import { Link } from "react-router-dom"
import { Overlay } from "./Overlay";
import { Sidebar } from "./sidebar/Sidebar";
import { DashboardProvider, useDashboardContext } from "./Provider";
import VisdeoSse from "../components/VisdeoSse";


const style = {
  open: "bg-white lg:w-full",
  close: "lg:pl-4 lg:lg:w-[calc(100%-16rem)]",
  mainContainer: "flex flex-col w-full h-screen pl-0 lg:space-y-4",
  container: "dark:bg-neutral-800 bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700  h-screen overflow-hidden relative lg:p-4",
  main: "h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0"
}
const Content = props => {
  const { sidebarOpen } = useDashboardContext()
  return (
    <div className={style.container}>
      <div className="flex items-start">
        <Overlay />
        <Sidebar mobileOrientation="end" />
        <div
          className={`${style.mainContainer} 
             ${sidebarOpen ? style.open : style.close}`}
        >
          <TopBar />
        <VisdeoSse />
          <main className={style.main}>{props.children}</main>;
        </div>


      </div>
    </div>
  )
}

export default function DashboardLayout(props) {
  return (
    <DashboardProvider>
      <Content>{props.children}</Content>
    </DashboardProvider>
  )
}