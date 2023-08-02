import { ReactNode } from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="flex justify-center items-center h-12 border-t dark:border-gray-700">
        <ThemeToggle />
      </footer>
    </div>
  );
}