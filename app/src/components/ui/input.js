import { handleChange } from "../../hooks/handleChange";

export default function CustomInput({ placeholder, type,field,value, onChange, required,height,width }) {
  
  const checkbox = 'w-5 h-5 mt-2';
  const defaultField = `block w-full rounded-md border-0 py-1.5 shadow-sm ring-1
        ring-inset ring-gray-300 placeholder:text-gray-400 
    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 m-1`
  
  const isCheckBox = type === 'checkbox';

  const handleOnChange = (e) => {
    const { value } = e.target; 
    if (onChange) {
      handleChange(field,value, onChange);
    }    
  };

  return (
    <input 
      style={{
        height:height,
        width:width
      }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required={required}
      className={isCheckBox?checkbox:defaultField}
    />
  );
}
