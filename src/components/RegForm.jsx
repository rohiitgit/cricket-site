import React, { useEffect } from 'react';

export default function FormReg() {
  useEffect(() => {
    console.log("FormReg component mounted");
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg p-6">
        <h2 className="text-white text-xl font-bold">Form</h2>
        <p className="text-gray-200">Enter your details below.</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderInput("name", "Name", "Enter your name")}
          {renderInput("father", "Father's name", "Enter your father's name")}
          {renderInput("mother", "Mother's name", "Enter your mother's name")}
          {renderInput("dob", "Date of birth", "", "date")}
          {renderSelect("course", "Course", [
            { value: "be", label: "B.E." },
            { value: "btech", label: "B.Tech" },
            { value: "mbbs", label: "MBBS" },
            { value: "bcom", label: "B.Com" },
          ])}
          {renderInput("session", "Session", "Enter session")}
          {renderInput("university", "University", "Enter university")}
          {renderInput("mobile", "Mobile number", "Enter your mobile number", "tel")}
          {renderInput("email", "Email", "Enter your email", "email")}
          {renderSelect("category", "Category", [
            { value: "gen", label: "GEN" },
            { value: "obc", label: "OBC" },
            { value: "sc", label: "SC" },
            { value: "st", label: "ST" },
          ])}
          {renderTextarea("address", "Address", "Enter your address")}
          {renderSelect("blood", "Blood group", [
            { value: "a+", label: "A+" },
            { value: "a-", label: "A-" },
            { value: "b+", label: "B+" },
            { value: "b-", label: "B-" },
            { value: "ab+", label: "AB+" },
            { value: "ab-", label: "AB-" },
            { value: "o+", label: "O+" },
            { value: "o-", label: "O-" },
          ])}
          {renderTextarea("identification", "Identification mark(s)", "Enter your identification mark(s)")}
          {renderSelect("marital", "Marital status", [
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
          ])}
          {renderInput("aadhaar", "Aadhaar number", "Enter your Aadhaar number", "number")}
          {renderInput("passing", "Passing year of last education", "Enter passing year", "number")}
          {renderSelect("mode", "Mode of study", [
            { value: "regular", label: "Regular" },
            { value: "online", label: "Online" },
            { value: "distance", label: "Distance" },
            { value: "na", label: "Regular-NA" },
          ])}
        </div>
        <div className="space-y-4">
          {renderUpload("10th Marksheet/ Certificate")}
          {renderUpload("12th Marksheet/ Certificate")}
          {renderUpload("Graduation Marksheet")}
          {renderUpload("Last degree Marksheet/ Certificate")}
          {renderUpload("Other technical qualifications")}
        </div>
      </div>
      <div className="flex justify-end gap-2 p-6">
        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
          Cancel
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
}


