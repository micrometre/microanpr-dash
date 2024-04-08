import ThemeSwitcher from './ThemeSwitcher';


function SideNav() {
  return (
    <div className="side-nav">
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
          <ThemeSwitcher/>
        </div>
      </div>
    </div>
  );
}

export default SideNav;