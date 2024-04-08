import ExploreContainer from './components/ExploreContainer';
import SideNav from './components/SideNav';
function App() {
  return (
    <div className="App">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="bg-blue-200 w-full flex-none md:w-64">
          <SideNav  />
        </div>
        <div className="bg-blue-100 grow p-6 md:overflow-y-auto md:p-12">
          <ExploreContainer  />
        </div>
      </div>
    </div>
  );
}

export default App;
