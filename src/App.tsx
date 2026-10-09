import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import ArticlePage from './pages/ArticlePage';
import KeywordResearchPage from './pages/KeywordResearchPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<ArticlePage />} />
          <Route path="keyword-research" element={<KeywordResearchPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
