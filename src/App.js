import ExploreContainer from './components/ExploreContainer';
import SideNav from './components/SideNav';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="App  bg-neutral-100 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className=" w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className=" grow p-6 md:overflow-y-auto md:p-12">
          <ExploreContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
