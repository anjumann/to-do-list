import React, { useState, useEffect, useContext } from 'react'
import Table from '../Components/Table'
import { Delete, Warn, Success } from '../Components/Toast'
import { AuthContext } from '../context/AuthContext'
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import Loading from '../Components/Loading'

const Home = () => {
  const { currentUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [task, setTask] = useState('')
  const [ToastSuccess, setToastSuccess] = useState(false)
  const [ToastDelete, setToastDelete] = useState(false)
  const [ToastWarn, setToastWarn] = useState(false)

  const updateDB = async (e) => {

    const updateRef = doc(db, "todo", currentUser.uid);

    await updateDoc(updateRef, {
      data,
    }).catch((error) => {
      console.log(error)
    })
    console.log("updating");
    console.log('update ', data)

  }

  const getData = async () => {
    setLoading(true)
    const getDataRef = doc(db, "todo", currentUser.uid);
    const todoSnap = await getDoc(getDataRef);
    if (todoSnap.exists()) {
      console.log("Document data:", todoSnap.data());
      setData(todoSnap.data().data)
      setLoading(false)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()

  }, [])

  // useEffect((e) => {
  //   updateDB(e)
  // }, [temp])




  const handleEdit = (id) => {
    console.log(id)
  }

  const handleDelete = (id) => {

    console.log('Deleteing');
    setData(data.filter((data) => data.id !== id))

    setTimeout(updateDB(), 500)
    console.log('del', data);
    setToastDelete(true)
    setTimeout(() => {
      console.log('after', ToastDelete);
      setToastDelete(false)
    }, 3000)


  }

  const handleSubmit = () => {
    // e.preventDefault()
    if (task === '') {
      console.log('Empty task');
      setToastWarn(true);
      (setTimeout(() => {
        setToastWarn(false)
      }, 3000))
    }
    else {
      setData([{ id: `${task}-${Date.now()}`, task }, ...data])
      setTask('')
      console.log(data);
      setToastSuccess(true)
      // setTemp(temp+1);
      setTimeout(() => {
        console.log('after', ToastDelete);
        setToastSuccess(false)
      }, 3000)
      updateDB()
    }
  }

  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-start items-center">
        <h1 className="text-4xl text-center text-base-100 mt-6 mb-4 ">
          Welcome {currentUser.displayName ? currentUser.displayName : "Buddy"}
        </h1>

        <div className="card card-compact  mx-2 md:w-96  bg-gradient-to-br from-slate-900/50 shadow-2xl py-10 px-20">
          <div className="text-base-200 text-center font-mono font-bold text-2xl mb-4 ">Create Task</div>
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="To do" className={`input  w-full max-w-xs input-ghost  `}
              disabled={loading}
              onChange={(e) => setTask(e.target.value)}
              value={task}
              name="task"
              autoComplete="off"
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
        {loading ? (<Loading className='mt-5' />) : ''}

        {data.length === 0 ? '' : (<div className='mt-10' >
          <Table data={data} handleDelete={handleDelete} />
        </div>)
        }

        <Success hidden={ToastSuccess} />
        <Delete hidden={ToastDelete} />
        <Warn hidden={ToastWarn} />
      </div>
    </>
  )
}

export default Home