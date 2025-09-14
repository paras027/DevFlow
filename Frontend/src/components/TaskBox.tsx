import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { Flag, Clock, Trash2 } from 'lucide-react';

interface TaskBoxProps {
  id: string;
  title: string;
  desc: string;
  columnName: string;
  onDelete?: (id: string) => void;  // 👈 new prop
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

  // Attach the drag function to the ref
  drag(dragRef);

  return (
    <div
      ref={dragRef}
      className={`relative bg-white mx-3 my-2 flex flex-col p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {/* Delete icon */}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent interfering with drag/click
            onDelete(id);
          }}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      )}

      <p className="text-black font-semibold text-lg">{title}</p>
      <p className="text-gray-400 font-semibold text-md mt-1 overflow-hidden">{desc}</p>
      <p className="border-2 border-gray-200 bg-gray-100 w-fit p-0.5 px-2 rounded-xl text-xs font-semibold mt-2">
        asd
      </p>
      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-row items-center gap-1 border-2 border-yellow-200 bg-yellow-100 w-fit p-0.5 px-2 rounded-xl text-xs font-semibold">
          <Flag className="w-3 h-3" />
          <p>dasda</p>
        </div>
        <div className="flex flex-row items-center gap-0.5 text-gray-500 w-fit p-0.5 px-3 rounded-xl text-xs font-semibold">
          <Clock className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
