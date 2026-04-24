import '../styles/index.css';
import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { PageContent } from './components/PageContent';

export default function App() {
  // Initialize from localStorage, default to 'home' if not found
  const [currentPage, setCurrentPage] = useState(() => {
    const saved = localStorage.getItem('currentPage');
    return saved || 'home';
  });

  // Save to localStorage whenever currentPage changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <PageContent currentPage={currentPage} />
    </Layout>
  );
}