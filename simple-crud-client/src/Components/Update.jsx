import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);

    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User information updated");
        }
      });
  };
  return (
    <div>
      <h3 className="mb-10 text-5xl font-bold">
        Update information of {loadedUser.name}
      </h3>
      <form onSubmit={handleUpdate} className="space-y-5">
        <input
          defaultValue={loadedUser?.name}
          className="bg-white"
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
        />
        <br />
        <input
          defaultValue={loadedUser?.email}
          className="bg-white"
          type="email"
          name="email"
          id=""
          placeholder="ENter Email"
        />
        <br />
        <input className="bg-white" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
