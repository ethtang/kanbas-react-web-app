import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const createAssignment = async (courseId: string | undefined, assignment: string) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentForCourse = async (courseId: string | undefined) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: { _id: string }) => {
  const response = await axios.
    put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};

