import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import Home from "./pages/home"
import NextMeeting from './pages/next-meeting'
import Meetings from './pages/meetings'
import CreateMeeting from './pages/create-meeting'
import EditMeeting from './pages/edit-meeting'
import Activities from './pages/activities'
import CreateActivity from './pages/create-activity'
import EditActivity from './pages/edit-activity'
import CreateAccount from './pages/create-account'
import Login from './pages/login'
import NotFound from './pages/not-found'

import Header from './components/Header/Header'
import Clock from './components/Clock/Clock'
import MeetingBtn from './components/MeetingBtn/MeetingBtn'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <Router>
            <Header />
            <MeetingBtn />
            <Clock />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/add-activity" element={<CreateActivity />} />
                <Route path="/edit-activity/:id" element={<EditActivity />} />
                <Route path="/next-meeting" element={<NextMeeting />} />
                <Route path="/meetings" element={<Meetings />} />
                <Route path="/add-meeting" element={<CreateMeeting />} />
                <Route path="/edit-meeting/:id" element={<EditMeeting />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)