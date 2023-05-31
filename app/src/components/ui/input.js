

export default function CustomInput({placeholder,type,value,onChange,required}) {
  return (
    <>
      <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            required={required}
            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
      />
    </>
  );
}
