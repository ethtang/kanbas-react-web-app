import { FaCheckCircle, FaEllipsisV, FaPencilAlt } from "react-icons/fa";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
  from "./reducer";

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
                    <Link style={{ color: 'black', textDecoration: 'none' }} className="fw-bold ps-0" to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                      {assignment.title}
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