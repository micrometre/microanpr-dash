import ThemeSwitcher from './ThemeSwitcher';


function SideNav() {
  return (
    <div className="side-nav">
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <div className="ml-auto md:hidden">
            <button type="button" className="hs-collapse-toggle flex h-8 w-8 ">
              <svg className="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <line x1="3" x2="21" y1="12" y2="12"></line>
                <line x1="3" x2="21" y1="18" y2="18"></line>
              </svg>
              <svg className="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <ThemeSwitcher />
          <ThemeSwitcher />
          <ThemeSwitcher />
          <ThemeSwitcher />
          <ThemeSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default SideNav;