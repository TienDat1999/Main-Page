import React from "react";
import "./tableStudent.scss"
export default function tableStudent() {
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
              <th scope="col">totaday</th>
              <th scope="col">percent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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
