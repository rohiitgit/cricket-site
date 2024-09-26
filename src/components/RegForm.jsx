import React, { useEffect } from 'react';

export default function CricketTeamReg() {
  useEffect(() => {
    console.log("CricketTeamReg component mounted");
    // Additional initialization logic can go here if needed
  }, []);

  function renderInput(id, label, placeholder, type = "text") {
    return (
      <div className="space-y-2">
        <label className="text-gray-700" htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
    );
  }
  
  function renderTextarea(id, label, placeholder) {
    return (
      <div className="space-y-2">
        <label className="text-gray-700" htmlFor={id}>{label}</label>
        <textarea
          id={id}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md p-2 w-full min-h-[100px]"
        />
      </div>
    );
  }
  
  function renderSelect(id, label, options) {
    return (
      <div className="space-y-2">
        <label className="text-gray-700" htmlFor={id}>{label}</label>
        <select id={id} className="border border-gray-300 rounded-md p-2 w-full">
          <option value="" disabled>Select</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  function renderUpload(label) {
    return (
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">(PDF, Max: 5MB)</span>
        <button className="border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-100">
          Upload
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-t-lg p-6">
        <h2 className="text-white text-xl font-bold">Cricket Team Registration</h2>
        <p className="text-gray-200">Fill in the details below to register.</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderInput("playerName", "Player Name", "Enter your name")}
          {renderInput("age", "Age", "Enter your age", "number")}
          {renderInput("dob", "Date of Birth", "", "date")}
          {renderInput("address", "Address", "Enter your address")}
          {renderInput("mobile", "Mobile Number", "Enter your mobile number", "tel")}
          {renderInput("email", "Email", "Enter your email", "email")}
          {renderSelect("role", "Preferred Role", [
            { value: "batsman", label: "Batsman" },
            { value: "bowler", label: "Bowler" },
            { value: "allrounder", label: "All-rounder" },
            { value: "wicketkeeper", label: "Wicketkeeper" },
          ])}
          {renderSelect("experience", "Playing Experience (Years)", [
            { value: "0", label: "0" },
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5+", label: "5+" },
          ])}
          {renderTextarea("achievements", "Previous Achievements", "List any relevant achievements")}
          {renderUpload("ID Proof")}
          {renderUpload("Medical Certificate")}
        </div>
      </div>
      <div className="flex justify-end gap-2 p-6">
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
          Cancel
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </div>
    </div>
  );
}
