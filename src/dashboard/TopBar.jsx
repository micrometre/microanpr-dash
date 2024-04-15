import { useDashboardContext } from "./Provider";
import ThemeSwitcher from '../components/ThemeSwitcher';

export function TopBar() {
  const { toggleSidebar } = useDashboardContext();
  return (
    <header className=" dark:bg-neutral-800 relative z-10 h-16 w-full items-center bg-white shadow md:h-20 lg:rounded-2xl">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex h-full w-3/4">
            <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                className="text-4xl text-gray-500 focus:outline-none"
                onClick={toggleSidebar}
              >
                &#8801;
              </button>
            </div>
            <div className="group  flex h-full w-36 items-center lg:w-64">
              <div className="absolute flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden">
              <ThemeSwitcher />
              </div>

              <div className="absolute right-0 mr-2 hidden h-auto  px-2 py-1 text-xs text-gray-400 md:block">
              <ThemeSwitcher />

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}