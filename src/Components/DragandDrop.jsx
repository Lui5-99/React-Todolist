import Logo from "../assets/react.svg";
import "../Styles/Drag_and_Drop.css";

const DragandDrop = ({ tasks, setTasks }) => {
  const getList = (list) => {
    return tasks.filter((item) => item.list === list);
  };

  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    if (list === 4) {
      const item = tasks.filter((item) => item.id != itemID);
      setTasks(item);
      return;
    }
    const item = tasks.find((item) => item.id == itemID);
    item.list = list;
    const newState = tasks.map((tasks) => {
      if (tasks.id === itemID) return item;
      return tasks;
    });
    setTasks(newState);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-x-4">
        <h1 className="text-white">Drag & Drop</h1>
        <img className="logo" src={Logo} alt="" />
      </div>
      <br />
      <div className="drag-and-drop">
        {/* Columna 1 */}
        <div className="column column--1">
          <h3>Tareas por hacer</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            onDrop={(e) => onDrop(e, 1)}
          >
            {getList(1).map((i) => (
              <div
                className="dd-element"
                key={i.id}
                draggable
                onDragStart={(evt) => startDrag(evt, i)}
              >
                <strong className="title">{i.title}</strong>
                <p className="body">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Columna 2 */}
        <div className="column column--2">
          <h3>Tareas en progreso</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={draggingOver}
            onDrop={(e) => onDrop(e, 2)}
          >
            {getList(2).map((i) => (
              <div
                className="dd-element"
                key={i.id}
                draggable
                onDragStart={(evt) => startDrag(evt, i)}
              >
                <strong className="title">{i.title}</strong>
                <p className="body">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Columna 3 */}
        <div className="column column--3">
          <h3>Tareas finalizadas</h3>
          <div
            className="dd-zone"
            droppable="true"
            onDragOver={draggingOver}
            onDrop={(e) => onDrop(e, 3)}
          >
            {getList(3).map((i) => (
              <div
                className="dd-element"
                key={i.id}
                draggable
                onDragStart={(evt) => startDrag(evt, i)}
              >
                <strong className="title">{i.title}</strong>
                <p className="body">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="drag-and-drop h-[250px]">
          <div className="column column--4">
            <h3>Eliminar Tarea</h3>
            <div
              className="dd-zone"
              droppable="true"
              onDragOver={draggingOver}
              onDrop={(e) => onDrop(e, 4)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DragandDrop;
