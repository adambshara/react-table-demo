import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./components/basicTable";
import SortingTable from "./components/sortingTable";
import FilteringTable from "./components/filteringTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
    </div>
  );
}

export default App;
