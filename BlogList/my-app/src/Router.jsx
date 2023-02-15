import React from 'react'
import { BrowserRouter as RouterContainer, Routes, Route } from 'react-router-dom';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';
import ProfileDetails from './Components/ProfileDetails';
import Profile from './Components/Profile';

export default function Router() {
  return (
    <RouterContainer>
        <Routes>
            <Route path='/bloglist' element={<BlogList />} />
            <Route path='/blogpost' element={<BlogPost />} />
            <Route path='/profiledetails' element={<ProfileDetails />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    </RouterContainer>
  )
}
