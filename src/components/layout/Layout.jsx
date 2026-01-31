import React from 'react'
import { Routes, Route } from 'react-router-dom'   // ✅ ONLY Routes/Route

import { AppProvider } from '../../context/AppContext'
import Navbar from '../../components/layout/Topbar'

import Home from '../../pages/Home'
import PostDetail from '../../pages/PostDetails'
import Communities from '../../pages/Community'
import CommunityDetail from '../../pages/CommunityDetail'
import Companies from '../../pages/Companies'
import CompanyDetail from '../../pages/CompanyDetail'
import Resources from '../../pages/Resources'
import Search from '../../components/common/SearchBar'
import Bookmarks from '../../pages/Bookmarks'

import FloatingActionButton from '../../components/common/FloatingActionButton'

import '../../styles/Styles.css'

function Layout() {
  return (
    <AppProvider>
      <div className="app">
        <Navbar />

        <div className="main-container">
          {/* ✅ ROUTES ONLY — NO ROUTER */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/community/:id" element={<CommunityDetail />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/company/:id" element={<CompanyDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/search" element={<Search />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>

          <FloatingActionButton />
        </div>
      </div>
    </AppProvider>
  )
}

export default Layout
