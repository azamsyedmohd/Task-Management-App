import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const TaskBoard = React.lazy(() => import("./components/TaskBoard"));
const TaskDetails = React.lazy(() => import("./components/TaskDetails"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center">
              <span className="text-3xl font-bold italic">Loading....</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<TaskBoard />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
