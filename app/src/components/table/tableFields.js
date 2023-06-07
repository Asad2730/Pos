import React from 'react'
import { primary_color } from '../../utils/colors';



function TableFields({tableheaders,tableRows}) {
  return (
    <>
        <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                   {
                    tableheaders.map((i)=>(
                    <th scope="col"
                      style={{
                        backgroundColor:primary_color 
                      }}
                      className="py-3.5 pl-4 pr-4 text-left text-sm  font-semibold sm:pl-0">
                        <span className=' text-white m-4'>
                           {i} 
                        </span>
                    </th>    
                    ))
                   }           
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableRows.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                      <span className=' m-4'>
                         {person.name}
                      </span>
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        <span className=' m-4'>
                         {person.title}
                        </span>
                        </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                      <span className=' m-4'> 
                      {person.email}
                      </span>       
                        </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                      <span className=' m-4'>
                      {person.role}
                      </span>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
    </>
  )
}

export default TableFields;