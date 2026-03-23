import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5082'

  async function checkBackend() {
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const response = await fetch(`${apiBaseUrl}/api/health`)
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container">
      <h1 className="text-2xl font-bold">React Frontend + C# Backend</h1>
      <p className="text-lg">
        Frontend is running on <code>http://localhost:5173</code>
      </p>
      <p className="text-lg">
        Backend expected at <code>{apiBaseUrl}</code>
      </p>
      <button onClick={checkBackend} disabled={loading}>
        {loading ? 'Checking...' : 'Check backend health'}
      </button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}

      {error && <p className="error">{error}</p>}
    </main>
  )
}

export default App
