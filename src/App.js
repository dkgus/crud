import "./App.css";
import Crud from "./components/Crud";
import DynamicColumn from "./components/DynamicColumn";
import DynamicChildColumn from "./components/DynamicChildColumn";
import SelectType from "./components/SelectType";
import CustomColumn from "./components/CustomColumn";
import Quiz from "./components/Quiz";
import MbtiTest from "./components/mbti/MbtiTest";

function App() {
  return (
    <div className="App">
      {/* <Crud />
      DynamicColumn
      <DynamicColumn />
      DynamicChildColumn
      <DynamicChildColumn />
      SelectType
      <SelectType />
      CustomColumn
      <CustomColumn />
      Quiz
      <Quiz /> */}
      <MbtiTest />
    </div>
  );
}

export default App;
