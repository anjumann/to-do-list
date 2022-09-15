import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'



const Table = ({ data, handleDelete, handleEdit }) => {
    return (
        <>

            <div className="overflow-x-hidden p-6 rounded-lg  bg-gradient-to-br from-slate-900/70 text-base-100
            shadow-xl 
            ">
                <table className="w-full   ">
                    <thead  >
                        <tr className=' border-b-2  text-center ' >
                            <th className='' >Task</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => {
                            return (
                                <tr key={item.id} className=' w-9/12 ' >
                                    <th className='break-all  px-6 ' >{item.task}  </th>
                                    <th className='break-all ' >
                                        <div className='flex flex-row gap-2' >
                                            <button onClick={() => { handleDelete(item.id) }} >
                                                <MdDeleteOutline className='inline mx-3 text-red-700' />
                                            </button>
                                            <button >
                                                <TiEdit className='inline mx-3 text-green-700' />
                                            </button>
                                        </div>
                                    </th>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table