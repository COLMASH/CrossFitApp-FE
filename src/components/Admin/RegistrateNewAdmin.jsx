import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewAdmin } from "../../store/selectAdminReducer";

function RegistrateNewAdmin() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dniType, setDniType] = useState("");
  const [dni, setDniNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    dispatch(
      createNewAdmin(
        name,
        lastname,
        dniType,
        dni,
        email,
        phone,
        birthday,
        password
      )
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <div
        className="modal fade"
        id="NewAdminModal"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Admin Registration Form 🏋️‍♂️
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="First-Name">
                <strong> *First Name: </strong>
              </label>
              <input
                autoFocus
                id="First-Name"
                type="text"
                name="First-Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="Last-Name">
                <strong> *Last Name: </strong>
              </label>
              <input
                id="Last-Name"
                type="text"
                name="Last-Name"
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
              <label htmlFor="DNI-Type">
                <strong> *DNI Type: </strong>
              </label>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                onChange={(e) => setDniType(e.target.value)}
              >
                <option selected>Choose...</option>
                <option value="CC">CC</option>
                <option value="CE">CE</option>
                <option value="PP">PP</option>
                <option value="TI">TI</option>
              </select>
              <label htmlFor="DNI">
                <strong> *DNI Number: </strong>
              </label>
              <input
                id="DNI-Number"
                type="text"
                name="DNI-Number"
                className="form-control"
                onChange={(e) => setDniNumber(e.target.value)}
                value={dni}
              />
              <label htmlFor="email">
                <strong> *Email: </strong>
              </label>
              <input
                id="Email"
                type="text"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="phone">
                <strong> *Phone: </strong>
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="form-control"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <label htmlFor="birthday">
                <strong> Birthday: </strong>
              </label>
              <input
                id="Birthday"
                type="date"
                name="Birthday"
                className="form-control"
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
              />
              <label htmlFor="Password">
                <strong> *Password: </strong>
              </label>
              <input
                id="Password"
                type="password"
                name="Password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="homeButton btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={email === ""}
                className="homeButton btn btn-primary btn-sm"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RegistrateNewAdmin;
