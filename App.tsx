import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CryptoCoinsPage from './pages/CryptoCoinsPage';
import CryptoCategoriesPage from './pages/CryptoCategoriesPage';
import CoinDetailsPage from './pages/CoinDetailsPage';
import MyEventsPage from './pages/MyEventsPage';
import PortfolioPage from './pages/PortfolioPage';
import WatchlistPage from './pages/WatchlistPage';
import LiveGamesPage from './pages/LiveGamesPage';
import DashboardPage from './pages/DashboardPage';
import NewsPage from './pages/NewsPage';

export default function App() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/crypto" /> : <LandingPage />} />
          <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/crypto" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/crypto" element={<CryptoCoinsPage />} />
          <Route path="/crypto/:id" element={<CoinDetailsPage />} />
          <Route path="/categories" element={<CryptoCategoriesPage />} />
          <Route path="/my-events" element={user ? <MyEventsPage /> : <Navigate to="/auth" />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/live-games" element={<LiveGamesPage />} />
          <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/auth" />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
    </div>
  );
}