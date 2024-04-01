import "./App.css";
import { CourseForm, CourseList } from "./components";

const App = () => {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        My Course List
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default App;
