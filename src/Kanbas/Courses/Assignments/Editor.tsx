import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid);

  if (!assignment) {
    return <div>Assignment not available</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <br />
      <input id="wd-name" value={assignment.title} style={{ width: "480px" }} /><br /><br />

      <textarea id="wd-description" value={assignment.description} style={{ width: "480px", height: "200px" }}/>
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={assignment.points} />
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
              <input type="date" id="wd-due-date" value={assignment.dueDate} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value={assignment.availableFrom} />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" value={assignment.availableUntil} />
            </td>
          </tr>
        </tbody>
      </table>

      <br /><br />
      <div>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
        className="btn btn-secondary" style={{ marginLeft: "340px" }}>Cancel</Link>
        <button className="btn btn-danger" style={{ marginLeft: "5px" }}>
          Save
        </button>
      </div>
    </div>
  );
}

/*
return (
<div id="wd-assignments-editor">
  <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
  <br></br>
  <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  <textarea id="wd-description">
    The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
  </textarea>
  <br />
  <br></br>
  <table>
    <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-points">Points</label>
      </td>
      <td>
        <input id="wd-points" value={100} />
      </td>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-group">Assignment Group</label>
      </td>
      <td>
        <select id="wd-group">
          <option value="all">ASSIGNMENTS</option>
        </select>
      </td>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
      </td>
      <td>
        <select id="wd-display-grade-as">
          <option value="all">Percentage</option>
        </select>
      </td>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-submission-type">Submission Type</label>
      </td>
      <td>
        <select id="wd-submission-type">
          <option value="all">Online</option>
        </select>
      </td>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top"></td>
      <td>
        <label htmlFor="wd-text-entry">Online Entry Options</label>
        <br></br>
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label>
        <br></br>
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label>
        <br></br>
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label>
        <br></br>
        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label>
        <br></br>
        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Uploads</label>
      </td>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top">
        <label htmlFor="wd-assign-to">Assign</label>
      </td>
      <td align="left" valign="top">
        <label htmlFor="wd-assign-to">Assign to</label>
      </td>
    </tr>
    <tr>
      <td align="right" valign="top"></td>
      <td>
        <input id="wd-assign-to" value={"Everyone"} />
      </td>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top"></td>
      <label htmlFor="wd-due-date">Due</label>
      <tr>
        <td>
          <input type="date" id="wd-due-date" />
        </td>
      </tr>
    </tr>
    <br></br>
    <tr>
      <td align="right" valign="top"></td>
      <td>
        <label htmlFor="wd-available-from">Available from</label>
        <br></br>
        <input type="date" id="wd-available-from" />
      </td>
      <td>
        <label htmlFor="wd-available-until">Until</label>
        <br></br>
        <input type="date" id="wd-available-until" />
      </td>
    </tr>
  </table>
</div>
);*/

