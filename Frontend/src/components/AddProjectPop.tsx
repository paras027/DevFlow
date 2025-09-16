// import { useState } from "react";
// import axios from "axios";

// function AddProjectPop({ onClose, onTaskAdded }:any) {
//   const [projectName, setProjectName] = useState("");
//   const [projectDescription, setProjectDescription] = useState("");

//   const handleSubmit = async (e:any) => {
//     e.preventDefault();
//     try {
//           const response = await axios.post(
//         'http://13.49.57.230:8080/project/addProjects',
//         { projectName, projectDescription },
//         {
//           withCredentials: true,
//         }
//       );
//       alert("Task added successfully!");
//       onTaskAdded(response.data); // notify parent
//       onClose(); // close modal
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add task");
//     }
//   };

//   return (
//     <div className="text-black"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "rgba(0,0,0,0.5)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         className="p-10 w-1/2 h-1/2 bg-white rounded-lg flex flex-col items-center gap-3"
//       >
//         <h3 className="text-2xl">Add Task</h3>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <div className="flex flex-row gap-2 justify-between items-center mb-2">
//             <label>Title:</label>
//             <input
//              className="border border-gray-300 rounded-md p-1"
//               type="text"
//               value={projectName}
//               onChange={(e) => setProjectName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex flex-row gap-2 justify-between items-center ">
//             <label className="mr-10">Description:</label>
//             <textarea className="border border-gray-300 rounded-md p-1"
//               value={projectDescription}
//               onChange={(e) => setProjectDescription(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-row justify-center gap-12  mt-4">
//             <button type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-full px-3 text-white cursor-pointer">Save</button>
//             <button type="button" onClick={onClose} className="cursor-pointer" style={{ marginLeft: "10px" }}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddProjectPop;

import { useState } from "react";
import axios from "axios";

function AddProjectPop({ onClose, onTaskAdded }: any) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://13.49.57.230:8080/project/addProjects',
        { projectName, projectDescription },
        { withCredentials: true }
      );
      alert("Task added successfully!");
      onTaskAdded(response.data);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to add task");
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg p-4 sm:p-6 lg:p-8 text-black">
        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">Add Project</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base font-medium">Title:</label>
            <input
              className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project title"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base font-medium">Description:</label>
            <textarea 
              className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base h-20 sm:h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Enter project description"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Save Project
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="border border-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectPop;
