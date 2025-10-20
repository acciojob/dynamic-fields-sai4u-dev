
import React, { useState } from "react";
import './../styles/App.css';

  function DynamicForm() {
    // State to store multiple sets of fields
    const [fields, setFields] = useState([
      { name: "", age: "" } // Initial form fields
    ]);

    // Function to handle input change
    const handleChange = (index, event) => {
      const { name, value } = event.target;
      const newFields = [...fields];
      newFields[index][name] = value;
      setFields(newFields);
    };

    // Function to add new field set
    const handleAddField = () => {
      setFields([...fields, { name: "", age: "" }]);
    };

    // Function to remove a specific field set
    const handleRemoveField = (index) => {
      const newFields = fields.filter((_, i) => i !== index);
      setFields(newFields);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form Data:", fields);
    };

    return (
      <div style={styles.container}>
        <h2>Dynamic Fields Form</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index} style={styles.fieldContainer}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
                required
                style={styles.input}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={field.age}
                onChange={(e) => handleChange(index, e)}
                required
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => handleRemoveField(index)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={styles.buttonContainer}>
            <button
              type="button"
              onClick={handleAddField}
              style={styles.addButton}
            >
              + Add More
            </button>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
     <DynamicForm />
    </div>
  )
}

export default App
