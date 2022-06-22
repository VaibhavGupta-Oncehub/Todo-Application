import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";

const CompleteStatus = () => {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = () => {
    axios({
      method: "get",
      url: "http://localhost:8000/",
    })
      .then(function (response) {
        setTasks(response?.data?.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const clickhandle = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/" + id,
    })
      .then(function (response) {
        console.log("response==>", response);
      })
      .catch((error) => {
        console.log("error ===> ", error);
      })
      .finally(getAllTasks());
  };

  return (
    <div>
      <div>
        <h1 className="text-center">COMPLETED TASKS</h1>

        <hr />
      </div>
      {tasks.length &&
        tasks.map((task) => {
          if (task.status === true) {
            return (
              <div key={task._id}>
                <div className="card text-center m-5">
                  <h5 className="card-header">
                    <b>Title: </b>
                    {task.title}
                  </h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Description: </b>
                      {task.body}
                    </h5>
                    <p className="card-text">
                      <b>Task Created on Date: </b>
                      {moment(task.date).format("YYYY-MM-DD")}
                    </p>
                    <p className="card-text">
                      <b>Task Status: </b>
                      Marked Completed.
                    </p>
                    <button
                      name="delete"
                      className="btn btn-primary m-2"
                      onClick={() => clickhandle(task._id)}
                    >
                      Delete Task
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      <div className="text-center m-5">
        <a href="/" className="btn btn-primary">
          Go back
        </a>
      </div>
    </div>
  );
};
export default CompleteStatus;
