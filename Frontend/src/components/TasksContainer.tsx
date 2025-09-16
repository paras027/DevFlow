// import React, { useRef, useState } from 'react';
// import { useDrop } from 'react-dnd';
// import { Plus  } from 'lucide-react';
// import TaskBox from './TaskBox';
// import AddTaskPop from './AddTaskPop';

// type ColorType = 'gray' | 'blue' | 'yellow' | 'green';

// interface Task {
//   id: string;
//   taskName: string;
//   taskDescription: string;

//   taskStatus: string;

// }

// interface TasksContainerProps {
//   name: string;
//   color: ColorType;
//   tasks: Task[];
//   onDrop: (taskId: string, sourceColumnName: string) => void;
//   projectId: number;
//   onTaskAdded: (newTask: Task, columnName: string) => void;
//   onDeleteTask?: (taskId: string) => void;
// }

// const TasksContainer: React.FC<TasksContainerProps> = ({ 
//   name, 
//   color, 
//   tasks, 
//   onDrop, 
//   projectId, 
//   onTaskAdded,
//   onDeleteTask,
// }) => {
//   const [showAddTaskModal, setShowAddTaskModal] = useState(false);

//   const bgColors = {
//     gray: 'bg-gray-200',
//     blue: 'bg-blue-200',
//     yellow: 'bg-yellow-100',
//     green: 'bg-green-100',
//   };

//   const dotColors = {
//     gray: 'bg-gray-500',
//     blue: 'bg-blue-500',
//     yellow: 'bg-yellow-500',
//     green: 'bg-green-500',
//   };

//   const tagColors = {
//     gray: 'bg-gray-300',
//     blue: 'bg-blue-300',
//     yellow: 'bg-yellow-300',
//     green: 'bg-green-300',
//   };

//   const bgColor = bgColors[color] || 'bg-gray-200';
//   const dotColor = dotColors[color] || 'bg-gray-500';
//   const tagColor = tagColors[color] || 'bg-gray-300';

//   // Create a ref for the drop target
//   const dropRef = useRef<HTMLDivElement>(null);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: 'TASK',
//     drop: (item: { id: string; columnName: string }) => {
//       onDrop(item.id, item.columnName);
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   // Attach the drop function to the ref
//   drop(dropRef);

//   const handleAddTaskClick = () => {
//     setShowAddTaskModal(true);
//   };

//   const handleTaskAdded = (newTask: Task, columnName: string) => {
//     onTaskAdded(newTask, columnName);
//     setShowAddTaskModal(false);
//   };


//   return (
//     <div ref={dropRef} className="flex flex-col w-[20%] h-fit mx-10 my-10">
//       <div className={`${bgColor} w-full flex flex-row justify-between rounded-2xl p-7 items-center`}>
//         <div className="flex flex-row items-center gap-4">
//           <div className={`${dotColor} h-3 w-3 rounded-full`}></div>
//           <p className="font-medium">{name}</p>
//           <p className={`${tagColor} rounded-3xl text-center px-3 text-sm font-medium`}>
//             {tasks.length}
//           </p>
//         </div>
//         <Plus className="w-4 h-4" />
//       </div>

//       {tasks.map((task) => (
//         <TaskBox
//           key={task.id}
//           id={task.id}
//           title={task.taskName}
//           desc={task.taskDescription}
//           columnName={task.taskStatus}
//           onDelete={(taskId) => onDeleteTask?.(taskId)}
//         />
//       ))}

//       {isOver && (
//         <div className="border-2 border-dashed border-gray-400 mx-3 my-2 p-5 rounded-2xl opacity-50 bg-gray-50">
//           <p className="text-center text-gray-500">Drop here</p>
//         </div>
//       )}

//       <div 
//         onClick={handleAddTaskClick} 
//         className="border-2 border-dashed border-gray-400 flex flex-row items-center justify-center p-4 rounded-2xl hover:cursor-pointer hover:bg-gray-50 transition-colors mt-5 mx-3"
//       >
//         <Plus className="w-4 h-4 mr-2" />
//         <span className="text-sm font-medium">Add New Task</span>
//       </div>

//       {/* Add Task Modal */}
//       {showAddTaskModal && (
//         <AddTaskPop
//           onClose={() => setShowAddTaskModal(false)}
//           onTaskAdded={handleTaskAdded}
//           columnName={name}
//           projectId={projectId}
//         />
//       )}
//     </div>
//   );
// };

// export default TasksContainer;

import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Plus } from 'lucide-react';
import TaskBox from './TaskBox';
import AddTaskPop from './AddTaskPop';

type ColorType = 'gray' | 'blue' | 'yellow' | 'green';

interface Task {
  id: string;
  taskName: string;
  taskDescription: string;
  taskStatus: string;
}

interface TasksContainerProps {
  name: string;
  color: ColorType;
  tasks: Task[];
  onDrop: (taskId: string, sourceColumnName: string) => void;
  projectId: number;
  onTaskAdded: (newTask: Task, columnName: string) => void;
  onDeleteTask?: (taskId: string) => void;
}

const TasksContainer: React.FC<TasksContainerProps> = ({ 
  name, 
  color, 
  tasks, 
  onDrop, 
  projectId, 
  onTaskAdded,
  onDeleteTask,
}) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const bgColors = {
    gray: 'bg-gray-200',
    blue: 'bg-blue-200',
    yellow: 'bg-yellow-100',
    green: 'bg-green-100',
  };

  const dotColors = {
    gray: 'bg-gray-500',
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
  };

  const tagColors = {
    gray: 'bg-gray-300',
    blue: 'bg-blue-300',
    yellow: 'bg-yellow-300',
    green: 'bg-green-300',
  };

  const bgColor = bgColors[color] || 'bg-gray-200';
  const dotColor = dotColors[color] || 'bg-gray-500';
  const tagColor = tagColors[color] || 'bg-gray-300';

  const dropRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { id: string; columnName: string }) => {
      onDrop(item.id, item.columnName);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  drop(dropRef);

  const handleAddTaskClick = () => {
    setShowAddTaskModal(true);
  };

  const handleTaskAdded = (newTask: Task, columnName: string) => {
    onTaskAdded(newTask, columnName);
    setShowAddTaskModal(false);
  };

  return (
    <div ref={dropRef} className="flex flex-col w-full lg:w-auto mx-2 sm:mx-4 lg:mx-0 my-4 sm:my-6 lg:my-10">
      {/* Header */}
      <div className={`${bgColor} w-full flex flex-row justify-between rounded-2xl p-4 sm:p-5 lg:p-7 items-center`}>
        <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4">
          <div className={`${dotColor} h-2 w-2 sm:h-3 sm:w-3 rounded-full flex-shrink-0`}></div>
          <p className="font-medium text-sm sm:text-base lg:text-lg truncate">{name}</p>
          <p className={`${tagColor} rounded-3xl text-center px-2 sm:px-3 text-xs sm:text-sm font-medium flex-shrink-0 min-w-[24px]`}>
            {tasks.length}
          </p>
        </div>
        <button 
          onClick={handleAddTaskClick}
          className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
        >
          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-2 sm:space-y-3">
        {tasks.map((task) => (
          <TaskBox
            key={task.id}
            id={task.id}
            title={task.taskName}
            desc={task.taskDescription}
            columnName={task.taskStatus}
            onDelete={(taskId) => onDeleteTask?.(taskId)}
          />
        ))}
      </div>

      {/* Drop indicator */}
      {isOver && (
        <div className="border-2 border-dashed border-gray-400 mx-1 sm:mx-2 lg:mx-3 my-2 p-3 sm:p-4 lg:p-5 rounded-2xl opacity-50 bg-gray-50">
          <p className="text-center text-gray-500 text-sm">Drop here</p>
        </div>
      )}

      {/* Add new task button */}
      <div 
        onClick={handleAddTaskClick} 
        className="border-2 border-dashed border-gray-400 flex flex-row items-center justify-center p-3 sm:p-4 rounded-2xl hover:cursor-pointer hover:bg-gray-50 transition-colors mt-3 sm:mt-4 lg:mt-5 mx-1 sm:mx-2 lg:mx-3"
      >
        <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
        <span className="text-xs sm:text-sm font-medium">Add New Task</span>
      </div>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <AddTaskPop
          onClose={() => setShowAddTaskModal(false)}
          onTaskAdded={handleTaskAdded}
          columnName={name}
          projectId={projectId}
        />
      )}
    </div>
  );
};

export default TasksContainer;
