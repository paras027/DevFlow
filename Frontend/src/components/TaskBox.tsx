// import React, { useRef } from 'react';
// import { useDrag } from 'react-dnd';
// import { Flag, Clock, Trash2 } from 'lucide-react';

// interface TaskBoxProps {
//   id: string;
//   title: string;
//   desc: string;
//   columnName: string;
//   onDelete?: (id: string) => void;  // 👈 new prop
// }

// const TaskBox: React.FC<TaskBoxProps> = ({ id, title, desc, columnName, onDelete }) => {
//   const dragRef = useRef<HTMLDivElement>(null);

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: 'TASK',
//     item: { id, columnName },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   // Attach the drag function to the ref
//   drag(dragRef);

//   return (
//     <div
//       ref={dragRef}
//       className={`relative bg-white mx-3 my-2 flex flex-col p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
//         isDragging ? 'opacity-50' : 'opacity-100'
//       }`}
//     >
//       {/* Delete icon */}
//       {onDelete && (
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // prevent interfering with drag/click
//             onDelete(id);
//           }}
//           className="absolute top-3 right-3 text-red-500 hover:text-red-700"
//         >
//           <Trash2 className="w-5 h-5" />
//         </button>
//       )}

//       <p className="text-black font-semibold text-lg">{title}</p>
//       <p className="text-gray-400 font-semibold text-md mt-1 overflow-hidden">{desc}</p>
//       <p className="border-2 border-gray-200 bg-gray-100 w-fit p-0.5 px-2 rounded-xl text-xs font-semibold mt-2">
//         asd
//       </p>
//       <div className="flex flex-row justify-between mt-3">
//         <div className="flex flex-row items-center gap-1 border-2 border-yellow-200 bg-yellow-100 w-fit p-0.5 px-2 rounded-xl text-xs font-semibold">
//           <Flag className="w-3 h-3" />
//           <p>dasda</p>
//         </div>
//         <div className="flex flex-row items-center gap-0.5 text-gray-500 w-fit p-0.5 px-3 rounded-xl text-xs font-semibold">
//           <Clock className="w-3 h-3" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskBox;
import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Flag, Clock, Trash2 } from 'lucide-react';

interface TaskBoxProps {
  id: string;
  title: string;
  desc: string;
  columnName: string;
  onDelete?: (id: string) => void;
}

const TaskBox: React.FC<TaskBoxProps> = ({ id, title, desc, columnName, onDelete }) => {
  const dragRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id, columnName },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(dragRef);

  return (
    <div
      ref={dragRef}
      className={`relative bg-white mx-1 sm:mx-2 lg:mx-3 my-2 flex flex-col p-3 sm:p-4 lg:p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {/* Delete icon */}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-colors"
        >
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Content */}
      <div className="pr-8 sm:pr-10">
        <h3 className="text-black font-semibold text-sm sm:text-base lg:text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-400 font-medium text-xs sm:text-sm lg:text-base mt-1 line-clamp-3">{desc}</p>
      </div>

      {/* Tags */}
      <div className="mt-3 sm:mt-4">
        <span className="inline-block border-2 border-gray-200 bg-gray-100 px-2 py-1 rounded-xl text-xs font-semibold">
          Task
        </span>
      </div>

      {/* Footer */}
      <div className="flex flex-row justify-between items-center mt-3 sm:mt-4 gap-2">
        <div className="flex flex-row items-center gap-1 border-2 border-yellow-200 bg-yellow-100 px-2 py-1 rounded-xl text-xs font-semibold flex-shrink-0">
          <Flag className="w-2 h-2 sm:w-3 sm:h-3" />
          <span className="hidden sm:inline">Priority</span>
        </div>
        <div className="flex flex-row items-center gap-1 text-gray-500 px-2 py-1 rounded-xl text-xs font-semibold">
          <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
          <span className="hidden sm:inline">Due</span>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
