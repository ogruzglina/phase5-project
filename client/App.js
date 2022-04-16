import React, { useEffect, useState } from 'react';
import Navigation from './navigations/Navigation';
import axios from 'axios'

export default function App() {
  const [ currentUser, setCurrentUser ] = useState(null);

  const tempUserId = 20;
    useEffect(async () => {
      try {
        const res = await axios.get(`http://localhost:3000/users/${tempUserId}`);
        const user = await res.data;

        setCurrentUser(user);
      } catch (e) {
        console.log(e);
      }
    }, []);

  return <Navigation currentUser = { currentUser } /> ;
}
