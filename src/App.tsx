// src/App.tsx
import React from "react";
import JobApplicationForm from "./forms/JobApplicationForm";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <JobApplicationForm />
  </div>
);

export default App;
