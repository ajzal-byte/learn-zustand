import { useState } from "react";
import useCourseStore from "../app/courseStore";

const CourseForm = () => {
  // const addCourse = useCourseStore((state) => state.addCourse)
  const { addCourse } = useCourseStore();

  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseForm rendered");

  const handleForm = (e) => {
    e.preventDefault();
    if (!courseTitle) return alert("Please add a course title");

    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
    });

    setCourseTitle("");
  };
  return (
    <form className="form-container" onSubmit={handleForm}>
      <input
        type="text"
        className="form-input"
        placeholder="Enter a course title"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button className="form-submit-btn">Add Course</button>
    </form>
  );
};

export default CourseForm;
