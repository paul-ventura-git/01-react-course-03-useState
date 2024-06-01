import { useState, useEffect } from "react";

const UseEffect02 = () => {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);

  useEffect(() => {
    // wrap your async call here
    const loadData = async () => {
      setUsersLoading(true);
      const result = await getUsers();
      setUsers(result);
      setUsersLoading(false);
    };

    // then call it here
    loadData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {usersLoading && <div>Loading...</div>}
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    </div>
  );
};

function getUsers() {
  return [{"id":1,"username":"Paul"},{"id":2,"username": "Lisa"}]
}

export default UseEffect02