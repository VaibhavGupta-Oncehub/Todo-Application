import "./form.css";
import { useState } from "react";
import moment from "moment";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(moment(e.target.value).format('YYYY-MM-DD'));
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log("in the form.js");
    props.onChangeFormHandler(title, body, date);
    setTitle("");
    setBody("");
    setDate("");
  };

  return (
    <div>
      <h1>Create Your Task</h1>
      <div className="new-expense">
        <form onSubmit={formHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Description</label>
              <input
                type="text"
                value={body}
                min="0.01"
                step="0.01"
                onChange={bodyChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={date}
                min={moment(new Date()).format("DD-MM-YYYY")}
                onChange={dateChangeHandler}
                required
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button
              onClick={() => {
                props.setShowForm(!props.showForm);
              }}
            >
              cancel
            </button>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
