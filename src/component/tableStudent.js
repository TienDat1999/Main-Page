import React,{useState} from "react";
import "./tableStudent.scss" 
const TableStudent = () => {
  const [redCheck, setRedcheck] = useState(false);
  return (
    <div className="col-11 wrap-tb card-body">
      <div className="table-responsive">
        <table class="table tablesorter">
          <thead class=" thead-dark text-primary">
            <tr className="tb-head">
              <th className="number-oder" scope="col ">NumOder</th>
              <th scope="col">fullName</th>
              <th scope="col">studenID</th>
              <th scope="col">day one</th>
              <th scope="col">percent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <div className="stick" 
                      onClick={ () => setRedcheck(!redCheck)}
                      style={{backgroundColor: redCheck ? "red" : "green"}}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
  export default  TableStudent;
