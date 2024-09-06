import { useState, useEffect } from 'react';
import { getToken } from '../token/TokenManager'; // Ajuste o caminho conforme necessário

const useAuthNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token); 
    };

    checkAuthentication();
  }, []);

  return { isAuthenticated };
};

export default useAuthNavigation;
