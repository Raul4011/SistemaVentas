import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../css/MainAdmin.css";
import MainDashBoard from "./MainDashBoard";
import MainProducts from "./MainProducts";
import MainVentas from "./MainVentas";
const MainAdmin = () => {
  const [dashboard, setDashBoard] = useState(true);
  const [productos, setProductos] = useState("");
  const [sales, setSales] = useState("");

  console.log("MainHome");

  const handleClick = (section) => {
    setDashBoard(false);
    setProductos(false);
    setSales(false);

    if (section === "dashboard") {
      setDashBoard(true);
    } else if (section === "ventas") {
      setSales(true);
    } else {
      setProductos(true);
    }
  };

  return (
    <div className="mainAdmin">
      <br />
      <br />

      <Row className="row">
        <Col md={4} className="aside text-center">
        <br />
        <h3 className="mt-5 mb-3">Sales System</h3>
        <br />
          <ul>
            <li>
              <button
                className="btn btn-primary"
                onClick={() => handleClick("dashboard")}
              >
                dashboard
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("productos")}>
                productos
              </button>
            </li>
            <li>
              <button onClick={() => handleClick("ventas")}>ventas</button>
            </li>
          </ul>
        </Col>
        <Col md={8} className="article">
          {dashboard && <MainDashBoard />}
          {productos && <MainProducts />}
          {sales && <MainVentas />}
        </Col>
      </Row>

      <br />
      <br />
    </div>
  );
};

export default MainAdmin;
