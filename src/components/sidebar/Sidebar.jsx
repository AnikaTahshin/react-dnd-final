import React from 'react'
import './sidebar.css'
import { useDrag } from 'react-dnd'

export default function Sidebar({ data }) {
    let [{ isDragging }, drag] = useDrag({
        item: data,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <div
            ref={drag}
            style={{ border: isDragging ? '2px solid red' : '2px solid black' }}
            className="sideBarItem">
            {data.component.type}
        </div>
    )
}
