/*
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import BanSymbol from "../Modules/BanSymbol";
import AssignmentEditor from "./Editor";

export default function AssignmentsControls({ assignmentName, setAssignmentName, addAssignment }:
  { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }
) {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All</button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-assignments-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all assignments and items</a>
          </li>
          <li>
            <a id="wd-publish-assignments-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish assignments only</a>
          </li>

          <li>
            <a id="wd-unpublish-all-assignments-and-items" className="dropdown-item" href="#">
              <BanSymbol />
              Unpublish all assignments and items</a>
          </li>

          <li>
            <a id="wd-unpublish-assignments-only" className="dropdown-item" href="#">
              <BanSymbol />
              Unpublish assignments only</a>
          </li>

        </ul>
      </div>

      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end"> View Progress </button>

      <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end"> Collapse All </button>

    </div>
  );
}
  */