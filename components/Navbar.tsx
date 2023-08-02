import { signIn, signOut, useSession } from '../lib/auth'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [session, loading] = useSession()

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div>
        <h1 className="text-2xl font-bold">Next.js JS Fiddle</h1>
      </div>
      <div className="flex items-center">
        {!session && !loading && (
          <button
            onClick={() => signIn()}
            className="mr-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign in
          </button>
        )}
        {session && (
          <>
            <span className="mr-4">{session.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="mr-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign out
            </button>
          </>
        )}
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar