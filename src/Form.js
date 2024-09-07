import { useState } from "react";

export default function Form() {
  return (
    <div className="form">
      <h1>Requesting a Loan </h1>
      <hr />
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="number" placeholder="age" />
      <label>R U an Employee</label>
      <div>
        <input type="checkbox" />
      </div>
      <label>How much your salary</label>
      <div>
        <select>
          <option value="1">from 1k to 3k</option>
          <option value="2">from 3k to 5k</option>
          <option value="3">from 5k to 10k</option>
        </select>
      </div>
      <button>Submit</button>
    </div>
  );
}
