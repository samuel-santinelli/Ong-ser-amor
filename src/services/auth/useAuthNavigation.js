import { useState, useEffect } from 'react';
import { getToken } from '../token/TokenManager'; 
import { useSelector } from 'react-redux';

const useAuthNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const token = useSelector((state) => state.auth.token);
  

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsAuthenticated(!!token); 
    };

    checkAuthentication();
  }, [token]);

  return { isAuthenticated };
};

export default useAuthNavigation;
