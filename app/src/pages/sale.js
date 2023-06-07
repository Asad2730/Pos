import React from 'react'
import NavBar from '../components/navbar/navbar'
import Table from '../components/table/table';
import CustomInput from '../components/ui/input';
import IconButton from '../components/ui/iconButton';
import { AiOutlineDelete,AiOutlineEdit,AiOutlineReload,AiOutlinePauseCircle} from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { primary_color, secondary_color } from '../utils/colors';
import { GiCancel } from "react-icons/gi";
import { BsSendCheck } from "react-icons/bs";


const tr = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },   
  ]
  
  const th=[
    'Name',
    'Title',
     'Email',
     'Role'
  ];



export default function Sale() {
  return (
    <div style={{ backgroundColor: secondary_color,height: '100vh', width: '100vw' }}>
      <NavBar />
      <ul role="list" 
        className={styles.ul}>
          
         <li className={styles.li} style={{ width: '100%' }}>
        
           <div>
            
             <div className={styles.li_div_main}>
               <span className='m-3'>Bill No</span>
            <div className={styles.li_inner_div}>
              <CustomInput width={100}/>
            </div>
            <div className="-ml-px flex w-0 flex-1 m-1">
              <CustomInput width={100}/>
            </div>
            <div className="-ml-px flex w-0 flex-1 m-1">
              <CustomInput width={100} type={'date'}/>
            </div>
            <div className="-ml-px flex w-0 flex-1 m-1">
              <CustomInput width={100} placeholder={'time'}/>
            </div>

            <span className='m-3'>Client Type</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>
            <span className='m-3'>Client Name</span>
           
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>
          </div>
  
          <div className={styles.li_div_main}>
          <span className='m-3'>Code</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>

            <span className='m-3'>Name</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>
  
            <span className='m-3'>Bonus</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>
  
            <span className='m-3'>Qty</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>

            <span className='m-3'>Disc%</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>
  
            <span className='m-3'>Up</span>
            <div className={styles.li_inner_div}>
              <CustomInput />
            </div>
          </div>
       
          <div className={styles.li_div_main}>
  
            <div 
             className={styles.li_inner_div}>
              <CustomInput />
            </div>
            <div className={styles.li_inner_div}>
              
             <CustomInput type={'checkbox'}/>
             <span className='ml-4 '>Check Price</span>
              <span className='ml-4'/>
             <CustomInput type={'checkbox'}/>
             <span className='ml-4'>Search by generic</span>
             
            </div>
           
          </div>

        </div>
  
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <Table
              th={th}
              tr={tr}
            />
          </div>
        </div>
      </li>
  
      <li className="col-span-1 divide-y rounded-lg" style={{ position: 'relative', top: 0, right: 0 }}>
        <div>
          
          <div className={styles.li_div_main}>
            <div className={styles.li_inner_div}>
              <IconButton
                Icon={AiOutlineDelete}
                title={'Clear Sale'}
              />
            </div>
            <div className={styles.li_inner_div}>
              <IconButton
              Icon={GiCancel}
              title={'Cancel Item'}

              />
            </div>
          </div>
  
          <div className={styles.li_div_main}>
            <div className={styles.li_inner_div}>
              <IconButton
                Icon={AiOutlineReload}
                title={'Return'}
              />
            </div>
            <div className={styles.li_inner_div}>
              <IconButton
                Icon={AiOutlineEdit}
                title={'Edit'}
              />
            </div>
          </div>
  
          <div className={styles.li_div_main}>
            <div className={styles.li_inner_div}>
                <IconButton
                Icon={AiOutlinePauseCircle}
                title={'Hold'}
                 />
             </div>
            <div className={styles.li_inner_div}>
               <IconButton
               Icon={CiCircleRemove}
               title={'Cancellation'}
               />
           </div>
          </div>
          <div className={styles.li_div_main}>
    
      <div className={styles.li_inner_div}>
        <IconButton
          
          Icon={BsSendCheck}
                title={'pay'}
        />
      </div>
    </div>
    </div>
    </li>
  </ul>
      
  <div style={{ backgroundColor: primary_color, width: '100vw', overflowX: 'auto' }}>

  <div className="flex m-4">
    <div className="grid grid-cols-5 gap-4">
      {/* Row 1 */}
      <div className="flex flex-row">
      <span className='text-white'>No of item</span>
        <CustomInput/>
      </div>
      <div className="flex flex-row ">
        <span className='text-white'> Total Qty </span>
        <CustomInput/>
      </div>
      <div className="flex flex-row ">
        <span className='text-white'> Add amount </span>
        <CustomInput/>
      </div>
      <div className="flex flex-row ">
        <span className='text-white'>  Total amount  </span>
        <CustomInput/>
      </div>
      <div className="flex flex-row">
        
      </div>

      {/* Row 2 */}
      <div className="flex flex-row ">
      <span className='text-white'> Total items</span>
       <CustomInput/>
      </div>
      <div className="flex flex-row ">
      <span className='text-white'>  Item disc</span>
        <CustomInput/>
      </div>
      <div className="flex flex-row ">
      <span className='text-white'>  Previous balance </span>
       <CustomInput/>
      </div>
      <div className="flex flex-row ">
      <span className='text-white'>  Paid amount </span>
         <CustomInput/>
      </div>
      <div className="flex flex-col">
      <span className='text-white'>  
           <div>    
             000
          </div>
          <div>
             Items
          </div>
          </span>   
      </div>

      {/* Row 3 */}
      <div className="flex flex-row ">
        <span className='text-white'> Total bonus  </span>
        <CustomInput/>
      </div>
      <div className="flex flex-row  ">
         <span className='text-white'> Disc By% </span>
        <CustomInput/>
      </div>
      <div className="flex flex-row ">
         <span className='text-white'> Disc By LS </span>
          <CustomInput/>
      </div>
      <div className="flex flex-row">
        <span className='text-white'> Balance </span>
         <CustomInput/>
      </div>
      <div className="flex flex-row">  
      </div>
        
    </div>
  </div>
 </div>



</div>

   
    )
}



const styles = {
  ul:'grid grid-cols-1 gap-6 m-4 sm:grid-cols-2 lg:grid-cols-3',
  li:'col-span-2 divide-y rounded-lg',
  li_div_main:'-mt-px flex divide-x m-4',
  li_inner_div:'flex w-0 flex-1 m-1',
  footer_row:'grid grid-rows-5 grid-flow-col gap-4',
  footer_col:'grid grid-cols-4 gap-4'
}