import React from 'react';
import { primary_color } from '../../utils/colors';

export default function IconButton({ Icon, title, onClick }) {
  return (
      <button 
       style={{backgroundColor:primary_color,height:100,width:100}}
       className="flex flex-col items-center space-y-2 text-white font-bold py-2 px-4 rounded" 
         onClick={onClick}>
         <Icon /> 
        <span>{title}</span>
      </button>
  );
}
