import { SIDEBAR_ITEMS, SIDEBAR_ITEM, COMPONENT, COLUMN, ROW } from "./constants";

import Sidebar from './components/sidebar/Sidebar'
import './App.css';
import { useState } from "react";
import { useDrop } from 'react-dnd'
function App() {
  const ACCEPTS = [SIDEBAR_ITEM, COMPONENT, ROW, COLUMN];
  let [sidebarItem, setSidebarItem] = useState(SIDEBAR_ITEMS);


  function onDrop(data) {
    const el = document.createElement('div');
    el.setAttribute('id', data.id);
    el.style = "display: flex; flex-direction: row; gap: 0 10px; border: 2px solid red; padding: 30px; margin:10px;"
    el.classList.add("div-resize");
    el.textContent = data.component.content;
    const dropZone = document.getElementsByClassName('dropZone');
    dropZone[0].appendChild(el);
  }
  const [{ isOver }, dropRef] = useDrop({
    accept: ACCEPTS,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })
  return (
    <div className="body">
      <div className="sideBar">
        {sidebarItem.map((data, index) => (
          <Sidebar data={data} id={data.id} key={data.id} />
        ))}
      </div>

      <div className="pageContainer">
        <div className="page" ref={dropRef} style={{ border: isOver ? '2px solid blue' : null }}>
          <div className="dropZone">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
