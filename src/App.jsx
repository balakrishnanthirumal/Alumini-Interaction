
import { Route, Routes } from 'react-router'
import './App.css'
import LoginRegister from './components/authentication/LoginRegister'
import LoginForm from './components/authentication/StudentLoginForm'
import AluminiLoginForm from './components/authentication/AluminiLoginForm'
import StudentRegistration from './components/authentication/StudentRegistrationForm'
import AluminiRegister from './components/authentication/AluminiRegister'
import HomePage from "./Page/HomePage/HomePage"
import ProfilePage from './Page/ProfilePage/ProfilePage'
import FeedPage from './Page/FeedPage/FeedPage'

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
        <Route path='/profile' element = {<ProfilePage/>}/>
        <Route path='/feed' element = {<FeedPage />}/>
      </Routes>
     
    
    </div>
  )
}

export default App
