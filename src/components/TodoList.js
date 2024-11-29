import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export const TodoList = () => {
    const { todoList } = useSelector((state) => state.todo, shallowEqual)
    console.log('todoList: ', todoList);
    return (
        <div>TodoList</div>
    )
}
