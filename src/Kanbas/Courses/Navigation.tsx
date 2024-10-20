import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item border-0 text-center
            ${pathname.includes(link.label) ? "active-link" : "text-danger"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}



/*
import { NavLink } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
      <NavLink
        to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> Home </NavLink>

      <NavLink
        to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> Modules </NavLink>

      <NavLink
        to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> Piazza </NavLink>

      <NavLink
        to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> Zoom </NavLink>

      <NavLink
        to="/Kanbas/Courses/1234/Assignments" id="wd-course-assignments-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> Assignments </NavLink>

      <NavLink
        to="/Kanbas/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> Quizzes </NavLink>

      <NavLink
        to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className={({ isActive }) =>
          `list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}> People </NavLink>
    
    </div>
  );
}
*/
