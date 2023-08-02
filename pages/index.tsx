```tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from '../lib/auth';
import Layout from '../components/Layout';
import Editor from '../components/Editor';
import Preview from '../components/Preview';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) router.push('/api/auth/signin');
  }, [loading, session, router]);

  if (loading || !session) return null;

  return (
    <Layout>
      <div className="flex flex-col md:flex-row h-full">
        <Editor />
        <Preview />
      </div>
    </Layout>
  );
}
```