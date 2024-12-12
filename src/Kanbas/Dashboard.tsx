import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment  }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
      enrolling: boolean;
      setEnrolling: (enrolling: boolean) => void;
      updateEnrollment: (courseId: string, enrolled: boolean) => void 
    }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
        <button className="btn btn-primary float-end me-2"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .map((course) =>
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {enrolling && (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                            className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <button className="btn btn-primary"> Go </button>
                      <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>
                      <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

/*
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/mern.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5>
                    CS4550
                  </h5>
                  <p className="wd-dashboard-course-title card-title">
                    Web Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="wd-dashboard-course1">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/CLRS.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5>
                      CS5800
                    </h5>
                    <p className="wd-dashboard-course-title card-title">
                      Algorithms (Graduate)
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>


          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="wd-dashboard-course1">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/numpy.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5>
                      DS3000
                    </h5>
                    <p className="wd-dashboard-course-title card-title">
                      Foundations of Data Science
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="wd-dashboard-course1">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/trolley.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5>
                      PHIL1145
                    </h5>
                    <p className="wd-dashboard-course-title card-title">
                      Technology and Human Values
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="wd-dashboard-course1">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/java.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5>
                      CS3500
                    </h5>
                    <p className="wd-dashboard-course-title card-title">
                      Object Orietented Design
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="wd-dashboard-course1">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/aws.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5>
                      CS4973
                    </h5>
                    <p className="wd-dashboard-course-title card-title">
                      Projects in Cloud Computing
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div className="wd-dashboard-course1">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/racket.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5>
                      CS2500
                    </h5>
                    <p className="wd-dashboard-course-title card-title">
                      Fundamentals of CS 1
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
*/
