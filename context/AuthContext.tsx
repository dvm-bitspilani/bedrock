import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

type AuthStatus = "true" | "false" | "loading" | "error";

export const AuthContext = createContext<{
  status: AuthStatus;
  setStatus: (status: AuthStatus) => void;
}>({
  status: "false",
  setStatus: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    checkAuthStatus();
  }, []);

  async function checkAuthStatus() {
    try {
      const token = await SecureStore.getItemAsync("token");
      setStatus(token ? "true" : "false");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);