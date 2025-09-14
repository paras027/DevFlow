
import { Plus, Users, Trash2 } from 'lucide-react'


type Props = {
  namess: string;
  desc: string;
  label: string;
  members: string;
  totaltask: string;
  progress: string;
  subhead: string;
  edit: boolean;
  onClick: (id: any) => void;
  onDelete?: () => void;   // 👈 new prop
};

const WorkSpacesCard = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="relative bg-white p-5 hover:cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-5 my-4"
    >
      {/* Delete icon (only when edit mode is on) */}
      {props.edit && props.onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering onClick navigation
            props.onDelete?.();
          }}
          className="absolute  top-3 right-3 text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      )}

      <div className="flex flex-row items-center gap-4">
        <div className="bg-gradient-to-br from-indigo-400 to-purple-500 w-fit h-fit rounded-xl p-2 px-2">
          <Plus className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{props.namess}</h1>
          <p className="text-[#818189] text-sm">{props.desc}</p>
        </div>
        <p className="ml-auto text-xs bg-gray-100 p-1 rounded-2xl font-bold">{props.label}</p>
      </div>

      <div className="flex flex-row items-centers mt-2 gap-5 text-sm text-[#818189]">
        <div className="flex flex-row items-center gap-1">
          <Users className="w-4 h-4" />
          <p>{props.members} members</p>
        </div>
        <p>
          {props.totaltask} {props.subhead}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center mt-4 text-sm text-gray-500 font-bold">
        <p>Progress</p>
        <p>{props.progress}%</p>
      </div>
      <div className="bg-gray-100 text-gray-400 rounded-3xl h-2 relative mt-2">
        <div
          className={`absolute bg-black h-full top-0 left-0 rounded-3xl`}
          style={{ width: `${props.progress}%` }} // 👈 dynamic progress
        ></div>
      </div>
    </div>
  );
};

export default WorkSpacesCard;
