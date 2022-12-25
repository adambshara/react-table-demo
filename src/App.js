import logo from "./logo.svg";
import "./App.css";
import BasicTable from "./components/basicTable";
import SortingTable from "./components/sortingTable";
import FilteringTable from "./components/filteringTable";
import PaginationTable from "./components/paginationTable";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
