import { FaCheckCircle, FaEllipsisV, FaPencilAlt } from "react-icons/fa";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import { deleteAssignment } from "./reducer";
// import assignmentReducer from "./reducer";

export default function Assignments() {

  const { cid } = useParams();
  // const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    const result = window.confirm("Do you want to proceed?");
    if (result) {
      console.log("User clicked Yes");
      return true;
    } else {
      console.log("User clicked No");
      return false;
    }
  };

  return (
    <div className="col me-2">
      <div className="row wd-margin-top">
        <div className="float-end wd-margin-right">
          <div className="wd-button float-end">
            <a className="btn btn-secondary" role="button">
              <FaEllipsisV />
            </a>
          </div>
          <div className="wd-button float-end">
            <Link to={"../Assignments/A101"} className="btn btn-danger mb-3 me-2" role="button">
              <BsPlus className="fs-5" />
              Assignment
            </Link>
          </div>

          <div className="wd-button float-end">
            <button className="btn btn-secondary pill mb-3 me-2">
              <BsPlus className="fs-5" />
              Group
            </button>{' '}
          </div>
          <div className="float-start w-25">
            <input className="form-control" id="input1" placeholder="Search for Assignment" />
          </div>
        </div>
      </div>
      <hr />
      <div className="wd-assignments-list">
        <ul className="list-group wd-margin-left" style={{ borderRadius: "0%" }}>
          <li className="list-group-item p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2" />
              Assignments
              <span className="float-end">
                <label
                  className="form-label pe-2 ps-2 me-3"
                  style={{ borderRadius: "50px", borderWidth: "1px", borderStyle: "solid" }}
                >40% of Total</label>
                <FaCheckCircle className="text-success" />
                <BsPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
          </li>
          <ul className="list-group" style={{ borderRadius: "0%" }}>
            {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li className='list-group-item'>
                <div className='row'>
                  <div className='col-auto' style={{ margin: "auto", display: "flex" }}>
                    <BsGripVertical style={{ verticalAlign: "middle", marginRight: "10px" }} />
                    <Link to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                      <FaPencilAlt style={{ color: 'green' }} />
                    </Link>
                  </div>
                  <div className='col wd-fg-color-gray ps-0 ms-2'>
                    <Link style={{ color: 'green', textDecoration: 'none' }} className="fw-bold ps-0" to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                      {assignment.name}
                    </Link>
                    <br />
                    {assignment.description} |
                    <br /><b>Due</b> {assignment.dueDate} | {assignment.points} points
                  </div>
                  <div className="col-auto" style={{ margin: "auto", display: "flex" }}>
                    <button className="btn m-0 pt-0 pb-0 me-1 btn-danger"
                      onClick={() => {
                        handleDelete() ? dispatch(deleteAssignment(assignment._id)) :
                        navigate(`/Kanbas/Courses/${assignment.course}/Assignments`);
                      }}>Delete</button>
                    <FaCheckCircle
                      style={{ color: "green" }} />
                    <FaEllipsisV style={{ verticalAlign: "middle" }} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div >
  );
}


/*
import ModulesControls from "../Modules/ModulesControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule }
  from "../Modules/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}  
      addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} /> <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ModuleControlButtons moduleId="null" deleteModule={deleteModule} editModule={(moduleId) => dispatch(editModule(moduleId))} />
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
  )
}*/

/*
import ModulesControls from "../Modules/ModulesControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import React, { useState } from "react";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
  from "../Assignments/reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
  const { cid } = useParams();
  //const assignments = db.assignments;

  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <AssignmentsControls assignmentName={assignmentName} setAssignmentName={setAssignmentName}
        addAssignment={() => {
          dispatch(addAssignment({ name: assignmentName, course: cid }));
          setAssignmentName("");
        }} /> <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
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
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <AssignmentControlButtons assignmentId="{assignment._id}" deleteAssignment={deleteAssignment} editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} />
              </div>
            </ul>))}
      </ul>
    </div>

  );
}
*/

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