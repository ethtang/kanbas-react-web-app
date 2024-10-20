import ModulesControls from "../Modules/ModulesControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ModuleControlButtons />
        </div>
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ul className="wd-lessons list-group rounded-0">
              {assignment.title && (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <Link 
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                    className="wd-assignment-link text-black"
                    style={{ textDecoration: 'none' }}>
                    <BsGripVertical className="me-2 fs-3" /> {assignment.title} <LessonControlButtons />
                  </Link>
                </li>
              )}
            </ul>))}
      </ul>
    </div>
    /*
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {assignment._id} <ModuleControlButtons />
              </div>
              {assignment.title && (
                <ul className="wd-lessons list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/{cid}/Assignments/{assignment._id}">
                      <BsGripVertical className="me-2 fs-3" /> {assignment.title} <LessonControlButtons />
                    </a>
                  </li>
                </ul>)}
            </li>))}
      </ul>
    </div>
    */
  );
}

/*
<div id = "wd-assignments" >
      <input id="wd-search-assignment"
        placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <br></br>
          <span>Multiple Modules | <b>Not available until</b> May 6 at 12:00 am |</span>
          <br></br>
          <span><b>Due</b> May 13 at 11:59 pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a>
          <br></br>
          <span>Multiple Modules | <b>Not available until</b> May 13 at 12:00 am |</span>
          <br></br>
          <span><b>Due</b> May 20 at 11:59 pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT
          </a>
          <br></br>
          <span>Multiple Modules | <b>Not available until</b> May 20 at 12:00 am |</span>
          <br></br>
          <span><b>Due</b> May 27 at 11:59 pm | 100 pts</span>
        </li>
      </ul>
    </div > 
*/