import React from 'react';
import { primary_color } from '../../utils/colors';

export default function IconButton({ Icon, title, onClick ,size}) {
  return (
      <button 
       style={{backgroundColor:primary_color,}}
       className="flex flex-col items-center space-y-2 
       text-white font-bold py-2 px-4 rounded w-40 h-28" 
         onClick={onClick}>
         <Icon size={size} /> 
        <span>{title}</span>
      </button>
  );
}
