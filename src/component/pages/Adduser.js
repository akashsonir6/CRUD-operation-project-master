import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
  });
  console.log(input);

  const formdata = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const userdata = await axios.post("http://localhost:3003/users", input);
    setInput(userdata);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 style={{ color: "#69cc71" }}>
          <u>
            <em>Add user info</em>
          </u>
        </h1>
        <form class="row g-3" onSubmit={(e) => postdata(e)}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              F_name
            </label>

            <input
              type="text"
              class="form-control"
              name="name"
              required
              placeholder="Enter your first name"
              onChange={formdata}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label"></label>L-name
            <input
              type="text"
              class="form-control"
              name="lname"
              required
              placeholder="Enter your last name"
              onChange={formdata}
            />
          </div>

          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              required
              placeholder="Enter your Em@il"
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
              required
              placeholder="Enter your contact number"
              onChange={(e) => {
                formdata(e);
              }}
            />
          </div>

          <div class="col-12"></div>
          <div class="col-12">
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adduser;
