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

  const [showModal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  function hanldeSubmit(e) {
    setErrorMessage(null);
    if (form.age < 18 || form.age > 60) {
      setErrorMessage("Age must be between 18 and 60");
    }
    if (form.phone.length !== 10) {
      setErrorMessage("Phone number must be 10 digits");
    }
    setShowModal(true);
  }
  const inputsAreEmpty =
    form.name === "" || form.phone === "" || form.age === "";

  function hanldeDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    <div onClick={hanldeDivClick} className="form">
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
        type="number"
        placeholder="Phone Number"
      />
      <input
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        type="number"
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
      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}
