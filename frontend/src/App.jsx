import React from 'react'
// dependancies import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// pages import
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/Admin/Dashboard'
import ManageTasks from './pages/Admin/ManageTasks'
import CreateTask from './pages/Admin/CreateTask'
import ManageUsers from './pages/Admin/ManageUsers'
import UserDashboard from './pages/User/UserDashboard'
import MyTasks from './pages/User/MyTasks'
import ViewTaskDetails from './pages/User/ViewTaskDetails'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='login' element={<SignUp/>}/>

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles = {["admin"]}/>}>
          <Route path='/admin/dashboard' element={<Dashboard />}/>
          <Route path='/admin/tasks' element={<ManageTasks />}/>
          <Route path='/admin/create-tasks' element={<CreateTask />}/>
          <Route path='/admin/users' element={<ManageUsers />}/>
          </Route>

          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles = {["admin"]}/>}>
          <Route path='/user/dashboard' element={<UserDashboard />}/>
          <Route path='/user/my-tasks' element={<MyTasks />}/>
          <Route path='/user/task-details/:id' element={<ViewTaskDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App