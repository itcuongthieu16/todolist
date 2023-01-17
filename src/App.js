import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineDeleteOutline } from 'react-icons/md';

function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);


  const handleAdd = () => {
    if (todos?.some((item) => item.id === work?.replace(/\s/g, ""))) {
      toast.warning("Công việc đã được thêm vào trước đó!");
    } else {
      setTodos((prev) => [
        ...prev,
        { id: work?.replace(/\s/g, ""), job: work },
      ]);
      setWork("");
      toast.success("Thêm công việc thành công");
    }
  };

  const hanleDeleteJob = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
      <div className="flex flex-col gap-8 h-screen justify-center items-center border border-red-500">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content: </h3>
          <ul className="text-center">
            {todos?.map((item) => (
              <li key={item.id} className="flex gap-12 items-center">
                <span className="my-2">{item.job}</span>
                <span onClick={() => hanleDeleteJob(item.id)} className="my-2 cursor-pointer p-1"><MdOutlineDeleteOutline/></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
