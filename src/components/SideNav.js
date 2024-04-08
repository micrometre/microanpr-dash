import { PowerIcon } from '@heroicons/react/24/outline';
import BrandLogo from './BrandLogo';
import sun from '../images/sun.png'
import moon from '../images/moon.png'

function SideNav() {
  return (
    <div className="side-nav ">
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="w-32  md:w-40">
          <BrandLogo />
        </div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </div>
      </div>
      <img src={sun} className="App-logo" alt="logo" />
      <img src={moon} className="App-logo" alt="logo" />

    </div>
  );
}

export default SideNav;
