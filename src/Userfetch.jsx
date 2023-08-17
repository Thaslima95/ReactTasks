import React, { useState, useEffect } from "react";
function UserData() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [user]);
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
export default UserData;
