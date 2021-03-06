import React, { useEffect, useState } from 'react';
import Navigation from './navigations/Navigation';
import axios from 'axios'

export default function App() {
  const [ currentUser, setCurrentUser ] = useState(null);

  const tempUserId = 5;

  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${tempUserId}`);
      const user = await res.data;
      
      if (user.length === undefined) {
        setCurrentUser(user);
      } else {
        setCurrentUser(user[0].user);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (currentUser === null ) return null;
  return <Navigation currentUser = { currentUser } />;
}
