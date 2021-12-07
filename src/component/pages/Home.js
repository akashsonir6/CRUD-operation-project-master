import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    await axios
      .get("http://localhost:3003/users")
      .then((res) => setUser(res.data));
  };

  const deleteuser = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`);
    getuser();
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 style={{ color: "#575700" }}>
          <u>
            {" "}
            <em>User Information</em>
          </u>
        </h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link
                    className="btn btn-info mx-3"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteuser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
