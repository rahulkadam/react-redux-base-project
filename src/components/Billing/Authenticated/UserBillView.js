import React, {useState} from 'react';

const UserBillView = () => {

  const [user, setUser] = useState({name: 'LoggedIn User'});

  return (
    <div>
      <h1>Logged In User {user.name}</h1>
    </div>
  );
};

export default UserBillView;
