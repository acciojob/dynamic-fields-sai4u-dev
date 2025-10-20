import React, { useState } from "react";

function App() {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", fields);
  };

  return (
    <div data-testid="dynamic-form">
      <h2>Dynamic Fields Form</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
              data-testid={`name-${index}`}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              data-testid={`age-${index}`}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              data-testid={`remove-${index}`}
            >
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddField} data-testid="add-field">
          Add More..
        </button>

        <button type="submit" data-testid="submit-form">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
