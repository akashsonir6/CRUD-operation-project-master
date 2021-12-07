import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edituser() {
  let { id } = useParams();

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    edituser();
  }, []);
  const { name, lname, phone, email } = input;
  const formdata = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const updatedata = async (e) => {
    e.preventDefault();
    const userdata = await axios.put(
      `http://localhost:3003/users/${id}`,
      input
    );
    setInput(userdata);
    navigate("/", { replace: true });
  };

  const edituser = async () => {
    const edituser = await axios.get(`http://localhost:3003/users/${id}`);
    setInput(edituser.data);
    console.log(edituser.data);
  };

  return (
    <div>
      <div className="container">
        <h1 style={{ color: "#31caf0" }}>
          <u>
            {" "}
            <em>Update/Edit user info</em>
          </u>
        </h1>
        <form class="row g-3" onSubmit={(e) => updatedata(e)}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              F_name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={name}
              placeholder="update your first name"
              required
              onChange={(e) => formdata(e)}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              L_name
            </label>
            <input
              type="text"
              class="form-control"
              name="lname"
              required
              value={lname}
              placeholder="update your last name"
              onChange={(e) => formdata(e)}
            />
          </div>

          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="update your Em@il"
              name="email"
              required
              value={email}
              onChange={(e) => {
                formdata(e);
              }}
            />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Phone
            </label>
            <input
              type="number"
              class="form-control"
              name="phone"
              placeholder="update your contact number"
              required
              value={phone}
              onChange={(e) => {
                formdata(e);
              }}
            />
          </div>

          <div class="col-12"></div>
          <div class="col-12">
            <button type="submit" class="btn btn-info">
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edituser;
