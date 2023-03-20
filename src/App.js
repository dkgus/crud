import "./App.css";
// import Crud from "./components/Crud";
// import DynamicColumn from "./components/DynamicColumn";
import DynamicChildColumn from "./components/DynamicChildColumn";
function App() {
  return (
    <div className="App">
      {/* <Crud />
      DynamicColumn
      <DynamicColumn /> */}
      DynamicChildColumn
      <DynamicChildColumn />
    </div>
  );
}

export default App;
