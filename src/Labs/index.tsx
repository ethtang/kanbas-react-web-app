import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h3>Ethan Tang</h3>
        <h3>CS 4550 Section 01</h3>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="TOC" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}

{/* Ethan Tang */ }