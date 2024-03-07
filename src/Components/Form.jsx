import { useState } from "react";
import { Input, Row, Col, Button } from "reactstrap";
import Swal from "sweetalert2";
import { generateUniqueID } from "../helpers/utils";

const Form = ({ addTask }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = () => {
    if ([titulo, descripcion].includes("") || status === 0) {
      Swal.fire({
        title: "Alerta",
        text: "Dejaste algun campo vacio",
        icon: "warning",
      });
      return;
    }
    addTask({
      id: generateUniqueID(),
      title: titulo,
      body: descripcion,
      list: status,
    });
    Swal.fire({
      title: "Alerta",
      text: "Se agregó la tarea",
      icon: "success",
    }).then((res) => {
      if (res.isConfirmed) {
        setTitulo("");
        setDescripcion("");
        setStatus(0);
      }
    });
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="font-bold text-white">ToDo List</h1>
      </div>
      <Row>
        <Col md="12">
          <Row>
            <Col md="3">
              <Input
                placeholder="Tarea"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Col>
            <Col md="3">
              <Input
                placeholder="Descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Col>
            <Col md="3">
              <select
                className="bg-white w-full h-full rounded text-center"
                onChange={(e) => setStatus(Number(e.target.value))}
                value={status}
              >
                <option value={0}>-- Selecciona una opcion</option>
                <option value={1}>Tarea por hacer</option>
                <option value={2}>Tarea en proceso</option>
                <option value={3}>Tarea finalizada</option>
              </select>
            </Col>
            <Col md="3">
              <div className="w-full flex justify-start">
                <Button color="outline-success" onClick={handleSubmit}>
                  Agregar
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Form;
