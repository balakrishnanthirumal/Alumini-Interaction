
import { Route, Routes } from 'react-router'
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

function App() {

  return (
    <div className="test">
      <Routes>
        <Route path='/' element = {<LoginRegister />}/>
        <Route path='studentlogin/' element = {<LoginForm />}/>
        <Route path='aluminilogin/' element = {<AluminiLoginForm />}/>
        <Route path='/studentregistration/' element = {<StudentRegistration />}/>
        <Route path='/aluminiregistration' element = {<AluminiRegister/>}/>
        <Route path='/home' element = {<HomePage/>}/>
        <Route path='/search' element = {<SearchPage/>}/>
        <Route path='/feed' element = {<FeedPage />}/>
        <Route path='/:username' element = {<ProfilePage />}/>
        <Route path='/:username/:queryId' element = {<QueryAnswerPage />}/>
        <Route path='/queryfeed' element = {<QueryFeedPage />}/>
      </Routes>
     
    
    </div>
  )
}

export default App
