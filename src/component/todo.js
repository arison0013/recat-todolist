import React, { useState } from 'react'
import '../App.css';
import TodoList from './todoList';

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [itemData, setItemData] = useState([]);

    const handlechange = (e) => {
        setInputData(e.target.value);
    }

    const listOfItem = () => {
        setItemData((e) => {
            return [...e, inputData]
        });
        setInputData('');
    }
    const deleteItem  =(id)=>{
        // console.log("delete");
        setItemData((r)=>{
            return r.filter((arrelement,index)=>{
                return index !== id;;
            })
        })
    } 
    return (
        <>
            <div className='main_div '>
                <div className='center_div'>
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" value={inputData} placeholder="Add Item" onChange={handlechange} />
                    <button onClick={listOfItem}>+</button>

                    <ol>
                        {itemData.map((value,index) => {
                            return <TodoList key={index} id={index} text={value} onSelect={deleteItem}/>
                        }
                        )}</ol>
                </div>
            </div>
        </>
    )
}

export default Todo

