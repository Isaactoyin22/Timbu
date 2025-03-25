import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null if not logged in, user object if logged in

  const login = (email, password) => {
    // Simulate login (in a real app, this would call an API)
    if (email === "test@example.com" && password === "password123") {
      setUser({ id: 1, email: "test@example.com", name: "Test User" });
      return true;
    }
    // Allow login if the email matches the signed-up user (for mock purposes)
    if (user && user.email === email) {
      setUser({ ...user }); // Re-set user to trigger login
      return true;
    }
    return false;
  };

  const signup = (email, password, name) => {
    // Simulate signup (in a real app, this would call an API)
    if (!user && email && password && name) {
      setUser({ id: 2, email, name });
      // Automatically log the user in after sign-up
      return login(email, password);
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
