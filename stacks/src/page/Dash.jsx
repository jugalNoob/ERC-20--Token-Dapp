import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'

function Dash() {
  const [userData, setUserData] = useState();
  const navigate=useNavigate()

  const callAbout = async () => {
    try {
      const res = await fetch('/Cont', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
    //   console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      // Handle the error, e.g., display an error message or redirect to an error page
    }
  };

  useEffect(() => {
    callAbout();
  }, []);

  return (
    <div>
    <h1>_id::{userData && userData._id ? userData._id : 'id not available'}</h1>
      <h1>name::{userData && userData.name ? userData.name : 'name not available'}</h1>
      <h1>email::{userData && userData.email ? userData.email : 'Email not available'}</h1>
      <h1>password::{userData && userData.password ? userData.password : 'password not available'}</h1>
    </div>
  );
}

export default Dash;