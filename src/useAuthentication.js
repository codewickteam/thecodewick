import { useState, useEffect } from 'react';

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // only for test pourpose for prduction of website use jwt,api or other method
        setIsAuthenticated(false)
  }, []);

  return isAuthenticated;
};

export default useAuthentication;
