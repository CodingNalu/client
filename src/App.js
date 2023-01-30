import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute, Landing, Error, Register } from "./pages";
import {
  Addjob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="stats" index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />}></Route>
          <Route path="add-job" element={<Addjob />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
