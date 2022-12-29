'use client';

import { useState } from 'react';
import MDE from '../../components/MDE';

function ComposePage() {
  const [title, setTitle] = useState('');

  return (
    <div className="flex-1">
      <div className="w-full flex justify-start items-center gap-2 mb-5">
        <h1 className="w-[100px] font-[500]">Title:</h1>
        <input
          type="text"
          className="flex-1 p-2 border-2 border-slate-300 focus:border-primary rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus={true}
        />
      </div>
      <div className="w-full flex justify-start items-center gap-2 mb-10">
        <h1 className="w-[100px] font-[500]">Author:</h1>
        <p className="text-slate-500 ml-1">Drilling Camp</p>
      </div>
      <MDE />
      <div className="w-full flex justify-end items-center gap-5 mt-10">
        <button className="w-[150px] bg-slate-300 text-black p-2 rounded-md hover:bg-slate-400 transition duration-300 ease-in-out">
          Save Draft
        </button>
        <button className="w-[150px] bg-accent text-black p-2 rounded-md hover:brightness-75 transition duration-300 ease-in-out">
          Publish
        </button>
      </div>
    </div>
  );
}

export default ComposePage;
