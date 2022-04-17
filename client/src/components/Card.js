import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import EditTaskModal from "./EditTaskModal";
import { useEffect } from "react";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [taskdate, setTaskDate] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const editHandler = (id, title, body, date) => {
    setId(id);
    setTitle(title);
    setBody(body);
    setTaskDate(date);
    setShowModal(true);
    handleShow();
  };

  let navigate = useNavigate();
  const clickhandle = (id) => {
    axios({
      method: "delete",
      url: "http://localhost:8000/" + id,
    })
      .then(function (response) {
        console.log("response==>", response);
        navigate("/");
        props.setDataSent(new Date());
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  const handleStatus = (id, status) => {
    setIsClicked(true);
    axios({
      method: "patch",
      url: "http://localhost:8000/" + id,
      data: {
        status: !status,
      },
    })
      .then(function (response) {
        console.log("response==>", response);
        props.setDataSent(new Date());
        setShowModal(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("error ===> ", error);
      });
  };

  useEffect(() => {
    props.setDataSent(new Date());
  }, [status]);

  return (
    <div className="row">
      {props.tasks.map((task) => {
        if (!task.status) {
          return (
            <div className="col-sm-6 mb-3" key={task._id}>
              <div className="card m-2">
                <div className="card-body">
                  <div>
                    <h4 className="card-title text-center">
                      {task.title}{" "}
                      <span className="badge rounded-pill bg-warning text-dark">
                        {task.date}
                      </span>
                    </h4>
                  </div>
                  <hr />
                  <h5 className="card-text text-center mb-4">{task.body}</h5>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      <b>Completed ?</b>
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={status}
                      id="flexCheckDefault"
                      onClick={() => {
                        handleStatus(task._id, task.status);
                      }}
                    />
                  </div>
                  <div className="btn-group m-2" role="group">
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => clickhandle(task._id)}
                    >
                      Delete Task
                    </button>
                    <button
                      className="btn btn-primary m-2"
                      variant="primary"
                      onClick={() =>
                        editHandler(task._id, task.title, task.body, task.date)
                      }
                    >
                      Edit Task
                    </button>
                  </div>
                </div>
              </div>
              {showModal && (
                <EditTaskModal
                  show={show}
                  handleClose={handleClose}
                  id={id}
                  title={title}
                  setTitle={setTitle}
                  body={body}
                  setBody={setBody}
                  currentDate={taskdate}
                  setTaskDate={setTaskDate}
                  setDataSent={props.setDataSent}
                  setShowModal={setShowModal}
                />
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
