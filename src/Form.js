import { useState } from "react";

import Modal from "./Modal";
export default function Form() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    values: "",
    isButtonShown: false,
  });

  function hanldeSubmit(e) {
    if (form.name !== "" && form.phone !== "" && form.age !== "") {
      setForm({ ...form, isButtonShown: true });
      alert("nio");
    }
  }
  const inputsAreEmpty =
    form.name === "" || form.phone === "" || form.age === "";
  return (
    <div className="form">
      <h1>Requesting a Loan </h1>
      <hr />
      <input
        value={form.name}
        onChange={(event) => {
          setForm({ ...form, name: event.target.value });
        }}
        type="text"
        placeholder="Name"
      />
      <input
        value={form.phone}
        onChange={(e) => {
          setForm({ ...form, phone: e.target.value });
        }}
        type="text"
        placeholder="Phone Number"
      />
      <input
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        type="text"
        placeholder="age"
      />
      <label>R U an Employee</label>
      <div>
        <input
          onChange={(e) => setForm({ ...form, isEmployee: e.target.checked })}
          type="checkbox"
        />
      </div>
      <label>How much your salary</label>
      <div>
        <select
          value={form.values}
          onChange={(e) => setForm({ ...form, values: e.target.value })}
        >
          <option>from 1k to 3k</option>
          <option>from 3k to 5k</option>
          <option>from 5k to 10k</option>
        </select>
      </div>
      <button
        className={inputsAreEmpty ? "disabled" : ""}
        disabled={inputsAreEmpty}
        onClick={hanldeSubmit}
      >
        Submit
      </button>
      {/* <Modal showModal={showModal} /> */}
    </div>
  );
}
