
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import LoginRegister from './components/authentication/LoginRegister'
import LoginForm from './components/authentication/StudentLoginForm'
import AluminiLoginForm from './components/authentication/AluminiLoginForm'
import StudentRegistration from './components/authentication/StudentRegistrationForm'
import AluminiRegister from './components/authentication/AluminiRegister'
import HomePage from "./Page/HomePage/HomePage"
import SearchPage from './Page/SearchPage/SearchPage'
import FeedPage from './Page/FeedPage/FeedPage'
import ProfilePage from './Page/ProfilePage/ProfilePage'
import QueryAnswerPage from './Page/QueryAnswerPage/QueryAnswerPage'
import QueryFeedPage from './Page/QueryFeedPage/QueryFeedPage'
import { useSelector } from 'react-redux'
function App() {
  const authUser = useSelector(state => state.auth.user)
  
  return (
    <div className="test">
      <Routes>
        <Route path='/' element = { <Navigate to = '/home'/>}/>
        <Route path='studentlogin/' element = {!authUser? <LoginForm /> : <Navigate to = '/home'/>}/>
        <Route path='aluminilogin/' element = {!authUser? <AluminiLoginForm /> : <Navigate to = '/home'/>}/>
        <Route path='/studentregistration/' element = {!authUser? <StudentRegistration /> : <Navigate to = '/home'/>}/>
        <Route path='/aluminiregistration' element = {!authUser? <AluminiRegister /> : <Navigate to = '/home'/>}/>
        <Route path='/home' element = {<HomePage/>}/>
        <Route path='/search' element = {authUser? <SearchPage /> : <Navigate to = '/'/>}/>
        <Route path='/feed' element = {authUser? <FeedPage /> : <Navigate to = '/'/>}/>
        <Route path='/:username' element = {authUser? <ProfilePage /> : <Navigate to = '/'/>}/>
        <Route path='/:username/:queryId' element = {authUser? <QueryAnswerPage /> : <Navigate to = '/'/>}/>
        <Route path='/queryfeed' element = {authUser? <QueryFeedPage /> : <Navigate to = '/'/>}/>
      </Routes>
     
    
    </div>
  )
}

export default App
