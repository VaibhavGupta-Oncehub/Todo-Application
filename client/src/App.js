
import "./App.css";
import RootFile from "./components/RootFile";
import CompletedTasks from "./components/CompletedTasks"
import {
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootFile />} />
        <Route path="/completed" element={<CompletedTasks />} />
      </Routes>
    </div>
  );
};

export default App;
