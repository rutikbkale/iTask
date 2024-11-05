import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SiGoogletasks } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleSave = () => {
    setTasks([...tasks, { id: count, task }]);
    setCount(count + 1);
    setTask("");
    console.log(tasks);
  };

  const handleDelete = (index) => {
    console.log(index);
    let newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Navbar />
      <main className="container flex items-center justify-center">
        <div className="bg-violet-400 text-white min-h-[80vh]  w-full md:w-1/2 mx-2 mt-8 rounded-md mb-2">
          <div className="title text-2xl font-bold flex justify-center my-4">
            <SiGoogletasks className="text-4xl" />
            &nbsp; iTask
          </div>
          <div className="container mb-4 w-full">
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className="text-black py-1 px-2  rounded-full w-full md:rounded-md  md:w-2/3 md:mx-2"
            />
            <button
              onClick={handleSave}
              className="bg-violet-800 text-xl font-bold py-1 px-3 rounded-md w-1/2 mt-4 md:mt-0 md:w-1/4 mx-2"
            >
              save
            </button>
          </div>
          <div className="tasks container">
            <div className="title text-xl font-bold text-center mt-4 md:mt-8">
              All Tasks
            </div>
            <div className="lists mt-4 flex flex-col items-center">
              {tasks.length === 0 ? (
                <p>Please add your tasks !</p>
              ) : (
                tasks.map((t, index) => {
                  return (
                    <div className="flex gap-2 w-3/4">
                      <input
                        type="checkbox"
                        onChange={() => {
                          setChecked(!checked);
                        }}
                        checked={checked}
                      />
                      <div
                        className="list flex justify-between w-full bg-violet-300 px-2 py-2 rounded-lg mb-2"
                        key={t.id}
                      >
                        <p className={checked ? "line-through" : ""}>
                          {t.task}
                        </p>
                        <button
                          onClick={() => {
                            handleDelete(index);
                          }}
                          className="bg-violet-800 py-1 px-2 rounded-md"
                        >
                          <MdDeleteForever />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
