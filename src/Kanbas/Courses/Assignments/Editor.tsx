import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  addAssignment, updateAssignment, cancelAssignmentUpdate
} from "./reducer";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewAssignment = !aid || aid.trim() === '';
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const currentAssignment = assignments.find((assignment: any) => assignment._id === aid);

  const [assignmentData, setAssignmentData] = useState(currentAssignment || {
    title: '',
    description: '',
    points: '',
    dueDate: ''
  });

  useEffect(() => {
    if (currentAssignment) {
      setAssignmentData(currentAssignment);
    }
  }, [currentAssignment]);

  const handleSave = () => {
    if (isNewAssignment) {
      const newAssignment = { ...assignmentData, _id: new Date().getTime().toString(), course: cid };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignmentData));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    dispatch(cancelAssignmentUpdate(currentAssignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!currentAssignment && !isNewAssignment) {
    return <div>Assignment not available</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <br />
      <input
        id="wd-name"
        value={assignmentData.title}
        onChange={(e) => setAssignmentData({ ...assignmentData, title: e.target.value })}
        style={{ width: "480px" }}
      />
      <br /><br />

      <textarea
        id="wd-description"
        value={assignmentData.description}
        onChange={(e) => setAssignmentData({ ...assignmentData, description: e.target.value })}
        style={{ width: "480px", height: "200px" }}
      />
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                value={assignmentData.points}
                onChange={(e) => setAssignmentData({ ...assignmentData, points: e.target.value })}
              />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="all">
                <option value="all">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={assignmentData.dueDate}
                onChange={(e) => setAssignmentData({ ...assignmentData, dueDate: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br /><br />
      <div>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary"
          style={{ marginLeft: "340px" }}
          onClick={handleCancel}
        >
          Cancel
        </Link>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "5px" }}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}


/*
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  addAssignment, updateAssignment, cancelAssignmentUpdate
} from "./reducer";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewAssignment = !aid || aid.trim() === '';
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const currentAssignment = assignments.find((assignment: any) => assignment._id === aid);

  const handleSave = () => {
    if (isNewAssignment) {
      const newAssignment = { ...currentAssignment, _id: new Date().getTime().toString(), course: cid };
      console.log(newAssignment);
      dispatch(updateAssignment(newAssignment));
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(currentAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    dispatch(cancelAssignmentUpdate(currentAssignment))
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!currentAssignment) {
    return <div>Assignment not available</div>;
  }

  return (
    <div id="wd-assignments-editor">
      {assignments
        .filter((assignment: any) => assignment._id === aid)
        .map((assignment: any) => (
          <>
            <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
            <br />

            <input
              id="wd-name"
              value={assignment.title}
              onChange={(e: { target: { value: any; }; }) =>
                dispatch(updateAssignment({ ...assignment, title: e.target.value }))
              }
              style={{ width: "480px" }}
            />
            <br /><br />

            <textarea
              id="wd-description"
              value={assignment.description}
              onChange={(e) =>
                dispatch(updateAssignment({ ...assignment, description: e.target.value }))
              }
              style={{ width: "480px", height: "200px" }}
            />
            <br /><br />

            <table>
              <tbody>
                <tr>
                  <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                  </td>
                  <td>
                    <input
                      id="wd-points"
                      value={assignment.points}
                      onChange={(e) =>
                        dispatch(updateAssignment({ ...assignment, points: e.target.value }))
                      }
                    />
                  </td>
                </tr>

                <tr>
                  <td align="right" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                  </td>
                  <td>
                    <select id="wd-group" defaultValue="all">
                      <option value="all">ASSIGNMENTS</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                  </td>
                  <td>
                    <select id="wd-display-grade-as" defaultValue="Percentage">
                      <option value="percentage">Percentage</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                  </td>
                  <td>
                    <select id="wd-submission-type" defaultValue="Online">
                      <option value="online">Online</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td align="right" valign="top">
                    <label htmlFor="wd-assign-to">Assign to</label>
                  </td>
                  <td>
                    <input id="wd-assign-to" value="Everyone" />
                  </td>
                </tr>

                <tr>
                  <td align="right" valign="top">
                    <label htmlFor="wd-due-date">Due</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="wd-due-date"
                      value={assignment.dueDate}
                      onChange={(e) =>
                        dispatch(updateAssignment({ ...assignment, dueDate: e.target.value }))
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <br /><br />
            <div>
              <Link
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className="btn btn-secondary"
                style={{ marginLeft: "340px" }}
                onClick={() => handleCancel}
              >
                Cancel
              </Link>
              <button
                className="btn btn-danger"
                style={{ marginLeft: "5px" }}
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </>
        ))}
    </div>
  );

}
*/