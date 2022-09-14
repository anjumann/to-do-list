import React from 'react'
import { useRecoilState } from 'recoil';
import { modalsState } from '../atom';


const Modal = ({ handleEdit, id }) => {

    const [showModal, setShowModal] = useRecoilState(modalsState)

    return (
        <>

            <input type="checkbox" id="my-modal-6" checked className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle backdrop-blur-sm backdrop-opacity-100 ">
                <div data-theme="dark" className="modal-box bg-gradient-to-br from-slate-900/70 text-base-100
            shadow-xl ">
                    <h3 className="font-bold text-lg text-black">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label className="btn btn-glass"
                            onClick={() => {
                                setShowModal(false)
                                handleEdit(id)
                            }}
                        >Edit</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal