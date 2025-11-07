import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-6">
            <Component {...pageProps} />
          </main>
        </div>
      </AuthProvider>
    </Provider>
  )
}
