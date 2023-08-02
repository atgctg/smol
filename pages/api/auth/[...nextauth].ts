```typescript
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { supabase } from '../../../lib/supabaseClient'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { user, error } = await supabase.auth.signIn(credentials)

        if (error) {
          return Promise.resolve(null)
        }

        return Promise.resolve(user)
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  },
})
```