import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (err) {
        setError("Failed to load authentication data");
        console.error("Auth initialization error:", err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const mockApiCall = useCallback(async (data, isLogin) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error(isLogin ? "Login failed" : "Registration failed"));
          return;
        }

        resolve({
          user: {
            id: `user-${Math.random().toString(36).substring(2, 9)}`,
            ...(!isLogin && { username: data.username }),
            password: data.password,
            email: data.email,
            createdAt: new Date().toISOString(),
          },
          token: `mock-token-${Math.random().toString(36).substring(2)}`,
        });
      }, 800);
    });
  }, []);

  const login = useCallback(
    async (credentials) => {
      setLoading(true);
      setError(null);
      try {
        const response = await mockApiCall(credentials, true);

        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);

        setUser(response.user);
        setToken(response.token);

        return { success: true, message: "Login successful" };
      } catch (err) {
        setError(err.message);
        return { success: false, message: err.message };
      } finally {
        setLoading(false);
      }
    },
    [mockApiCall]
  );

  const register = useCallback(
    async (userData) => {
      setLoading(true);
      setError(null);
      try {
        const response = await mockApiCall(userData, false);

        console.log(response.user);

        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);

        setUser(response.user);
        setToken(response.token);

        return { success: true, message: "Registration successful" };
      } catch (err) {
        setError(err.message);
        return { success: false, message: err.message };
      } finally {
        setLoading(false);
      }
    },
    [mockApiCall]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    setError(null);
  }, []);

  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!user && !!token,
    login,
    register,
    logout,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
