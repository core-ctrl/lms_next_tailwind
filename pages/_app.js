import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { UIProvider } from "@/context/UIContext";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UIProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </UIProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
