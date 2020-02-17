import React from 'react';
import './nav.css';
 
const Accounts = () => {
    return (
       <div id ="table">
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Trash Bins Owned</th>
      <th scope="col">Recycing Bins Owned</th>
      <th scope="col">Route</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">56176</th>
      <td>CVS</td>
      <td>14</td>
      <td>17</td>
      <td>004</td>
      <td>Commercial</td>
    </tr>
    <tr>
      <th scope="row">21756</th>
      <td>Ralphs</td>
      <td>12</td>
      <td>14</td>
      <td>003</td>
      <td>Commercial</td>
    </tr>
    <tr>
      <th scope="row">17867</th>
      <td>Costco</td>
      <td>19</td>
      <td>24</td>
      <td>003</td>
      <td>Commercial</td>
    </tr>
  </tbody>
</table>
       </div>
    );
}
 
export default Accounts;