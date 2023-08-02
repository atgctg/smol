1. **Next.js**: Used in all the pages and components for server-side rendering, routing, and page layout. It's also used in `next.config.js` for configuration.

2. **TypeScript**: Used in all `.tsx` and `.ts` files for static typing.

3. **Tailwind CSS**: Used in all `.tsx` files for styling, and in `styles/globals.css` and `styles/tailwind.config.js` for global styles and configuration.

4. **Supabase**: Used in `lib/supabaseClient.ts` for initializing the Supabase client, and in `pages/api/auth/[...nextauth].ts` and `lib/auth.ts` for authentication.

5. **React**: Used in all `.tsx` files for building the user interface.

6. **DOM Elements IDs**: Used in all `.tsx` files for manipulating DOM elements. The exact IDs would depend on the specific implementation.

7. **Exported Variables**: Variables such as `supabaseClient` from `lib/supabaseClient.ts`, `AuthProvider` from `lib/auth.ts`, and components from `.tsx` files would be exported and used across different files.

8. **Data Schemas**: Used in `lib/supabaseClient.ts` and `pages/api/auth/[...nextauth].ts` for defining the structure of data when interacting with Supabase.

9. **Function Names**: Functions such as `signIn`, `signOut`, `useSession` from `lib/auth.ts`, and event handlers in `.tsx` files would be used across different files.

10. **Message Names**: Used in `lib/auth.ts` and `pages/api/auth/[...nextauth].ts` for authentication-related messages.

11. **PostCSS**: Used in `postcss.config.js` for processing CSS.

12. **Package.json**: Contains all the dependencies and scripts used across the project.

13. **tsconfig.json**: Contains the configuration for TypeScript used across the project.

14. **Public Assets**: `public/favicon.ico` and `public/logo.svg` are used in `pages/_app.tsx` for setting up the favicon and logo of the application.