import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import moment from "moment";

const CompleteStatus = () => {
  const [tasks, setTasks] = useState([]);
  const [dataSent, setDataSent] = useState("");
  let navigate = useNavigate();

  const getAllTasks = () => {
    axios({
      method: "get",
      url: "http://localhost:8000/",
    })
      .then(function (response) {
        console.log("response==>", response);
        setTasks(response?.data?.message);
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div>
      <div>
        <h1 class="text-center">COMPLETED TASKS</h1>

        <hr />
      </div>
      {tasks.length &&
        tasks.map((task) => {
          if (task.status === true) {
            return (
              <div>
                <div class="card text-center m-5">
                  <h5 class="card-header">
                    <b>Title: </b>
                    {task.title}
                  </h5>
                  <div class="card-body">
                    <h5 class="card-title">
                      <b>Description: </b>
                      {task.body}
                    </h5>
                    <p class="card-text">
                      <b>Task Created on Date: </b>
                      {moment(task.date).format("YYYY-MM-DD")}
                    </p>
                    <p class="card-text">
                      <b>Task Status: </b>
                      Marked Completed.
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      <div className="text-center m-5">
        <a href="/" class="btn btn-primary">
          Go back
        </a>
      </div>
    </div>
  );
};
export default CompleteStatus;
