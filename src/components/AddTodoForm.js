import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export const AddTodoForm = () => {
    const [title, setTitle] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()   
        dispatch(addTodo(title))
        setTitle("")
    }

    return (
        <div className='py-2'>
            <h3 className="text-center text-2xl font-bold text-white">Add Todo</h3>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto bg-white mt-2 px-2 py-2 rounded-sm">
                <div className="flex gap-3 items-end">
                    <div className='w-full'>
                        <label htmlFor="title">Todo title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                        />
                    </div>
                    <button type='submit' className='p-2.5 bg-red-800 text-white rounded-md'>Add</button>
                </div>
            </form>
        </div>
    )
}
