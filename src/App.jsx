import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SiGoogletasks } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSave = (event) => {
    event.preventDefault();
    let taskText = event.target.task.value;
    if (tasks.some((task) => task.text === taskText)) {
      toast.error("Task already added !", { autoClose: 2000 });
    } else {
      setTasks([...tasks, { text: taskText, isChecked: false }]);
      toast.success("Task added successfully...", { autoClose: 2000 });
    }
    event.target.task.value = "";
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    toast.success("Task deleted successfully...", { autoClose: 2000 });
  };

  const handleCheck = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(newTasks);
  };

  return (
    <>
      <Navbar />
      <main className="container flex items-center justify-center">
        <div className="bg-violet-400 text-white min-h-[80vh] w-full md:w-1/2 mx-2 mt-8 rounded-md mb-2">
          <div className="title text-2xl font-bold flex justify-center my-4">
            <SiGoogletasks className="text-4xl" />
            &nbsp; iTask
          </div>
          <div className="container mb-4 w-full">
            <form onSubmit={handleSave}>
              <input
                type="text"
                name="task"
                className="text-black py-1 px-2 rounded-full w-full md:rounded-md md:w-2/3 md:mx-2"
              />
              <button className="bg-violet-800 text-xl font-bold py-1 px-3 rounded-md w-1/2 mt-4 md:mt-0 md:w-1/4 mx-2">
                Save
              </button>
            </form>
          </div>
          <div className="tasks container">
            <div className="title text-xl font-bold text-center mt-4 md:mt-8">
              All Tasks
            </div>
            <div className="lists mt-4 flex flex-col items-center">
              {tasks.length === 0 ? (
                <p>Please add your tasks!</p>
              ) : (
                tasks.map((task, index) => (
                  <div className="flex gap-2 w-3/4" key={index}>
                    <input
                      type="checkbox"
                      checked={task.isChecked}
                      onChange={() => handleCheck(index)}
                    />
                    <div className="list flex justify-between w-full bg-violet-300 px-2 py-2 rounded-lg mb-2">
                      <p className={task.isChecked ? "line-through" : ""}>
                        {task.text}
                      </p>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-violet-800 py-1 px-2 rounded-md"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
