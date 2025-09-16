// import  { useState, useEffect } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import TopText from '../components/TopText';
// import TasksContainer from '../components/TasksContainer';

// interface Task {
//   id: string;
//   taskName: string;
//   taskDescription: string;
//   taskStatus: string;
// }

// interface Column {
//   name: string;
//   color: 'gray' | 'blue' | 'yellow' | 'green';
//   tasks: Task[];
// }

// const TasksPage = () => {
//   const location = useLocation();
//   const { id } = location.state || {};
  
//   // State management
//   const [columns, setColumns] = useState<Column[]>([
//     { name: 'Backlog', color: 'gray', tasks: [] },
//     { name: 'To Do', color: 'blue', tasks: [] },
//     { name: 'In Progress', color: 'yellow', tasks: [] },
//     { name: 'Completed', color: 'green', tasks: [] },
//   ]);

//   const [projectName, setProjectName] = useState('Project Name');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch tasks when component mounts
// useEffect(() => {
//   if (id) {
//     console.log('Project ID:', id);
//     // clear old tasks immediately
//     setColumns([
//       { name: 'Backlog', color: 'gray', tasks: [] },
//       { name: 'To Do', color: 'blue', tasks: [] },
//       { name: 'In Progress', color: 'yellow', tasks: [] },
//       { name: 'Completed', color: 'green', tasks: [] },
//     ]);
//     fetchAllData();
//   } else {
//     setError('No project ID found');
//     setLoading(false);
//   }
// }, [id]);

//   // Fetch both tasks and project details
//   const fetchAllData = async () => {
//     setLoading(true);
//     setError(null);
    
//     try {
//       await Promise.all([
//         fetchTasks(),
    
//       ]);
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Failed to load project data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchTasks = async () => {
//     try {
//       console.log('Fetching tasks for project:', id);
//       const response = await axios.get(`http://13.49.57.230:8080/tasks/getTasksbyProject/${id}`, {
//         withCredentials: true
//       });
      
//       console.log('Fetched tasks:', response.data);
      
//       if(response.data.length > 0){
//          const tasksByStatus = response.data.reduce((acc: any, task: Task) => {
//         const status = task.taskStatus || 'Backlog';
//         if (!acc[status]) acc[status] = [];
//         acc[status].push(task);
//         return acc;
//       }, {});
//       // Update columns with fetched tasks
//       setColumns(prevColumns =>
//         prevColumns.map(column => ({
//           ...column,
//           tasks: tasksByStatus[column.name] || []
//         }))
//       );
      
//       console.log('Tasks organized by status:', tasksByStatus);
//       }

//       // Organize tasks by status/column
     

      
//     } catch (error) {
//       console.error('Failed to fetch tasks:', error);
//       throw error; // Re-throw to be caught by fetchAllData
//     }
//   };


//   const handleTaskAdded = (newTask: Task, columnName: string) => {
//     console.log('New task added:', newTask, 'to column:', columnName);
//     setColumns(prevColumns =>
//       prevColumns.map(column =>
//         column.name === columnName
//           ? { ...column, tasks: [...column.tasks, newTask] }
//           : column
//       )
//     );
//   };

//   const moveTask = (taskId: string, sourceColumnName: string, targetColumnName: string) => {
//     console.log(`Moving task ${taskId} from ${sourceColumnName} to ${targetColumnName}`);
    
//     setColumns((prevColumns) => {
//       const sourceColumn = prevColumns.find((col) => col.name === sourceColumnName);
//       const targetColumn = prevColumns.find((col) => col.name === targetColumnName);
//       if (!sourceColumn || !targetColumn) return prevColumns;

//       const task = sourceColumn.tasks.find((t) => t.id === taskId);
//       if (!task) return prevColumns;

//       // Update task status in backend
//       updateTaskStatus(taskId, targetColumnName);

//       return prevColumns.map((col) => {
//         if (col.name === sourceColumnName) {
//           return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
//         }
//         if (col.name === targetColumnName) {
//           return { ...col, tasks: [...col.tasks, { ...task, status: targetColumnName }] };
//         }
//         return col;
//       });
//     });
//   };

//   const updateTaskStatus = async (taskId: string, newStatus: string) => {
//     try {
//       await axios.put(`http://13.49.57.230:8080/tasks/${taskId}/status`, 
//         { status: newStatus },
//         { withCredentials: true }
//       );
//       console.log(`Task ${taskId} status updated to ${newStatus}`);
//     } catch (error) {
//       console.error('Failed to update task status:', error);
//       // Optionally revert the UI change or show error message
//     }
//   };

//   const getTotalTasks = () => {
//     return columns.reduce((total, column) => total + column.tasks.length, 0);
//   };


//   const refreshTasks = async () => {
//     console.log('Refreshing tasks...');
//     await fetchTasks();
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="bg-[#F2F3F4] h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading tasks...</p>
//         </div>
//       </div>
//     );
//   }

//  // delete task handler
// const deleteTask = async (taskId: string, columnName: string) => {
//   try {
//     await axios.delete(`http://13.49.57.230:8080/tasks/deleteTasks/${taskId}`, {
//       withCredentials: true,
//     });

//     // update UI by removing task from its column
//     setColumns((prevColumns) =>
//       prevColumns.map((col) =>
//         col.name === columnName
//           ? { ...col, tasks: col.tasks.filter((task) => task.id !== taskId) }
//           : col
//       )
//     );

//     console.log(`Task ${taskId} deleted successfully`);
//   } catch (err) {
//     console.error("Error deleting task:", err);
//   }
// };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="bg-[#F2F3F4] min-h-screen overflow-y-scroll">
//         {/* Header */}
//         <div className="flex flex-row justify-between items-center mx-8 pt-8">
//           <TopText
//             heading={projectName}
//             subHeading={`You have tasks due today. Total tasks: ${getTotalTasks()}`}
//             headingcolor="bg-black"
//             subHeadingColor="text-gray-400"
//           />
          
//           {/* Refresh button */}
//           <button 
//             onClick={refreshTasks}
//             className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//             </svg>
//             Refresh
//           </button>
//         </div>

//         {/* Task Columns */}
//         <div className="flex flex-row pb-8">
//           {columns.map((column) => (
//             <TasksContainer
//               key={column.name}
//               name={column.name}
//               color={column.color}
//               tasks={column.tasks}
//               projectId={id}
//               onDrop={(taskId, sourceColumnName) => moveTask(taskId, sourceColumnName, column.name)}
//               onTaskAdded={handleTaskAdded}
//               onDeleteTask={(taskId) => deleteTask(taskId, column.name)}
//             />
//           ))}
//         </div>

        
//       </div>
//     </DndProvider>
//   );
// };

// export default TasksPage;

import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import TopText from '../components/TopText';
import TasksContainer from '../components/TasksContainer';

interface Task {
  id: string;
  taskName: string;
  taskDescription: string;
  taskStatus: string;
}

interface Column {
  name: string;
  color: 'gray' | 'blue' | 'yellow' | 'green';
  tasks: Task[];
}

const TasksPage = () => {
  const location = useLocation();
  const { id } = location.state || {};
  
  // Detect touch device for drag and drop
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const backend = isTouchDevice ? TouchBackend : HTML5Backend;
  
  // State management - Empty columns initially
  const [columns, setColumns] = useState<Column[]>([
    { name: 'Backlog', color: 'gray', tasks: [] },
    { name: 'To Do', color: 'blue', tasks: [] },
    { name: 'In Progress', color: 'yellow', tasks: [] },
    { name: 'Completed', color: 'green', tasks: [] },
  ]);

  const [projectName, setProjectName] = useState('Project Name');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks when component mounts
  useEffect(() => {
    if (id) {
      console.log('Project ID:', id);
      // Clear columns when switching projects
      setColumns([
        { name: 'Backlog', color: 'gray', tasks: [] },
        { name: 'To Do', color: 'blue', tasks: [] },
        { name: 'In Progress', color: 'yellow', tasks: [] },
        { name: 'Completed', color: 'green', tasks: [] },
      ]);
      fetchAllData();
    } else {
      setError('No project ID found');
      setLoading(false);
    }
  }, [id]);

  // Fetch both tasks and project details
  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await Promise.all([fetchTasks()]);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load project data');
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async () => {
    try {
      console.log('Fetching tasks for project:', id);
      const response = await axios.get(`http://13.49.57.230:8080/tasks/getTasksbyProject/${id}`, {
        withCredentials: true
      });
      
      console.log('Fetched tasks:', response.data);
      
      if (response.data.length > 0) {
        const tasksByStatus = response.data.reduce((acc: any, task: Task) => {
          const status = task.taskStatus || 'Backlog';
          if (!acc[status]) acc[status] = [];
          acc[status].push(task);
          return acc;
        }, {});
        
        // Update columns with real data from backend
        setColumns(prevColumns =>
          prevColumns.map(column => ({
            ...column,
            tasks: tasksByStatus[column.name] || []
          }))
        );
        
        console.log('Tasks organized by status:', tasksByStatus);
      } else {
        console.log('No tasks found for this project');
        // Keep empty columns
        setColumns([
          { name: 'Backlog', color: 'gray', tasks: [] },
          { name: 'To Do', color: 'blue', tasks: [] },
          { name: 'In Progress', color: 'yellow', tasks: [] },
          { name: 'Completed', color: 'green', tasks: [] },
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      throw error;
    }
  };

  const handleTaskAdded = (newTask: Task, columnName: string) => {
    console.log('New task added:', newTask, 'to column:', columnName);
    setColumns(prevColumns =>
      prevColumns.map(column =>
        column.name === columnName
          ? { ...column, tasks: [...column.tasks, newTask] }
          : column
      )
    );
  };

  const moveTask = (taskId: string, sourceColumnName: string, targetColumnName: string) => {
    console.log(`Moving task ${taskId} from ${sourceColumnName} to ${targetColumnName}`);
    
    setColumns((prevColumns) => {
      const sourceColumn = prevColumns.find((col) => col.name === sourceColumnName);
      const targetColumn = prevColumns.find((col) => col.name === targetColumnName);
      if (!sourceColumn || !targetColumn) return prevColumns;

      const task = sourceColumn.tasks.find((t) => t.id === taskId);
      if (!task) return prevColumns;

      // Update task status in backend
      updateTaskStatus(taskId, targetColumnName);

      return prevColumns.map((col) => {
        if (col.name === sourceColumnName) {
          return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
        }
        if (col.name === targetColumnName) {
          return { ...col, tasks: [...col.tasks, { ...task, taskStatus: targetColumnName }] };
        }
        return col;
      });
    });
  };

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    try {
      await axios.put(`http://13.49.57.230:8080/tasks/${taskId}/status`, 
        { status: newStatus },
        { withCredentials: true }
      );
      console.log(`Task ${taskId} status updated to ${newStatus}`);
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  const getTotalTasks = () => {
    return columns.reduce((total, column) => total + column.tasks.length, 0);
  };

  const refreshTasks = async () => {
    console.log('Refreshing tasks...');
    await fetchTasks();
  };

  const deleteTask = async (taskId: string, columnName: string) => {
    try {
      await axios.delete(`http://13.49.57.230:8080/tasks/deleteTasks/${taskId}`, {
        withCredentials: true,
      });

      // Update UI by removing task from its column
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.name === columnName
            ? { ...col, tasks: col.tasks.filter((task) => task.id !== taskId) }
            : col
        )
      );

      console.log(`Task ${taskId} deleted successfully`);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-[#F2F3F4] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">Loading tasks...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-[#F2F3F4] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="text-red-500 text-lg sm:text-xl font-semibold mb-2">Error</div>
          <p className="text-gray-600 text-sm sm:text-base mb-4">{error}</p>
          <button 
            onClick={fetchAllData}
            className="bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <DndProvider backend={backend}>
      <div className="bg-[#F2F3F4] min-h-screen">
        {/* Header */}
        <div className="bg-[#F2F3F4] border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <TopText
                heading={projectName}
                subHeading={`You have tasks due today. Total tasks: ${getTotalTasks()}`}
                headingcolor="bg-black"
                subHeadingColor="text-gray-400"
              />
            </div>
            
            <button 
              onClick={refreshTasks}
              className="bg-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 text-sm sm:text-base whitespace-nowrap border border-gray-200"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Task Columns Container */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Mobile: Stack columns vertically (< 640px) */}
          <div className="block sm:hidden">
            <div className="space-y-6">
              {columns.map((column) => (
                <div key={column.name} className="w-full">
                  <TasksContainer
                    name={column.name}
                    color={column.color}
                    tasks={column.tasks}
                    projectId={id}
                    onDrop={(taskId, sourceColumnName) => moveTask(taskId, sourceColumnName, column.name)}
                    onTaskAdded={handleTaskAdded}
                    onDeleteTask={(taskId) => deleteTask(taskId, column.name)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: Horizontal scroll (640px - 1024px) */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {columns.map((column) => (
                <div key={column.name} className="flex-shrink-0 w-72 sm:w-80">
                  <TasksContainer
                    name={column.name}
                    color={column.color}
                    tasks={column.tasks}
                    projectId={id}
                    onDrop={(taskId, sourceColumnName) => moveTask(taskId, sourceColumnName, column.name)}
                    onTaskAdded={handleTaskAdded}
                    onDeleteTask={(taskId) => deleteTask(taskId, column.name)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid layout (> 1024px) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-6">
              {columns.map((column) => (
                <div key={column.name} className="min-w-0">
                  <TasksContainer
                    name={column.name}
                    color={column.color}
                    tasks={column.tasks}
                    projectId={id}
                    onDrop={(taskId, sourceColumnName) => moveTask(taskId, sourceColumnName, column.name)}
                    onTaskAdded={handleTaskAdded}
                    onDeleteTask={(taskId) => deleteTask(taskId, column.name)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empty State - Shows when no tasks */}
          {getTotalTasks() === 0 && !loading && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No tasks found</h3>
                <p className="mt-2 text-sm text-gray-500">Get started by creating your first task in any column.</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom spacing */}
        <div className="h-20 sm:h-8"></div>
      </div>
    </DndProvider>
  );
};

export default TasksPage;
