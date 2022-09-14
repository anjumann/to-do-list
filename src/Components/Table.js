import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { TiEdit } from 'react-icons/ti'
import Modal from './Modal'
import { modalsState } from '../atom';
import { useRecoilState } from 'recoil';


const Table = ({ data, handleDelete, handleEdit }) => {


    const [showModal, setShowModal] = useRecoilState(modalsState)


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
                                            <button onClick={ ()=> {setShowModal(true)}} >
                                                <TiEdit className='inline mx-3 text-green-700' />
                                            </button>
                                        </div>
                                    </th>
                                    {/* {showModal && <Modal id={item.id} />} */}
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