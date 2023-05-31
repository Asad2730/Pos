import React from 'react'



function TableFields({tableheaders,tableRows}) {
  return (
    <>
        <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                   {
                    tableheaders.map((i)=>(
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        {i}
                    </th>    
                    ))
                   }           
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableRows.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{person.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
    </>
  )
}

export default TableFields;