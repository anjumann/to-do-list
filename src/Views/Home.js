import React, { useState } from 'react'
import Table from '../Components/Table'

const Home = () => {


  const [data, setData] = useState([])
  const [task, setTask] = useState('')


  const handleEdit = (id) => {
    console.log(id)
  }

  const handleDelete = (id) => {
    const del = data.filter((to) => to.id !== id);
    setData([...del])
    console.log('del', data);
  }

  const handleSubmit = () => {
    // e.preventDefault()
    setData([{ id: `${task}-${Date.now()}`, task }, ...data])
    setTask('')
    console.log(data);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-start items-center">
        <h1 className="text-4xl text-center text-base-100 mt-6 mb-4 ">To do List</h1>

        <div className="card card-compact  mx-2 md:w-96  bg-gradient-to-br from-slate-900/50 shadow-2xl py-10 px-20">
          <div className="text-base-200 text-center font-mono font-bold text-2xl mb-4 ">Create Task</div>
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="To do" className="input  w-full max-w-xs input-ghost"
              onChange={(e) => setTask(e.target.value)}
              value={task}
              name="task"
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleSubmit()
                  console.log('Enter key pressed');
                } 
              }}
            />

            <button className="btn w-full mt-6 glass text-white"
              onClick={handleSubmit}
            >Create Task</button>

          </div>
        </div>
        {data.length === 0 ? '' : (<div className='mt-10' >
          <Table data={data} handleDelete={handleDelete} handleEdit={handleDelete} />
        </div>)
        }


      </div>
    </>
  )
}

export default Home