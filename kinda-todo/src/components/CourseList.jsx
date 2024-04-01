import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore();
  return (
    <>
      <ul>
        {courses.map((course, i) => (
          <React.Fragment key={i}>
            <li
              className="course-item"
              style={{
                backgroundColor: course.completed ? "#00FF0044" : "white",
              }}
            >
              <span className="course-item-col-1">
                <input
                  checked={course.completed}
                  type="checkbox"
                  onChange={() => toggleCourseStatus(course.id)}
                />
              </span>
              <span style={{color: "black"}}>{course?.title}</span>
              <button
                className="delete btn"
                onClick={() => removeCourse(course.id)}
              >
                Delete
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default CourseList;
