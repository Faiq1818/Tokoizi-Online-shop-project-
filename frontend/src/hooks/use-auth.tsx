'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify', {
      withCredentials: true
    }).then(res => {
      setLoggedIn(res.data.loggedIn);
    }).catch(() => {
      setLoggedIn(false);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return { loading, loggedIn };
}
