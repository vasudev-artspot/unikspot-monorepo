import { AuthProvider, ProtectedRoute, useAuth } from '@shared/auth'
import { Button, Card, Input } from '@shared/ui'
import { formatDate } from '@shared/utils'

function Dashboard() {
  const { user, logout } = useAuth()
  return (
    <Card title="Welcome to Content App">
      <p className="mb-4 text-gray-600">
        Logged in as <strong>{user?.email}</strong>
      </p>
      <p className="mb-4 text-sm text-gray-400">Session started: {formatDate(new Date())}</p>
      <Button variant="outline" onClick={logout}>
        Log out
      </Button>
    </Card>
  )
}

function LoginForm() {
  const { login, isLoading } = useAuth()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value
    login(email, password)
  }
  return (
    <Card title="Sign in" className="w-full max-w-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input name="email" label="Email" type="email" placeholder="you@example.com" required />
        <Input name="password" label="Password" type="password" placeholder="••••••••" required />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Card>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <ProtectedRoute fallback={<LoginForm />}>
          <Dashboard />
        </ProtectedRoute>
      </div>
    </AuthProvider>
  )
}
