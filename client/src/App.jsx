// import 'antd/dist/antd.css';
import { Button } from 'antd';
import './stylesheets/theme.css'
import './stylesheets/alignments.css'
import './stylesheets/textelements.css'
import './stylesheets/custom-components.css'
import './stylesheets/form-elements.css'
import './stylesheets/layout.css'

import Login from './pages/common/Login'
import Register from './pages/common/Register'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useSelector } from "react-redux";
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/common/Home';
import Exams from './pages/admin/Exams';
import AddEditExam from './pages/admin/Exams/AddEditExam';
import Loader from './components/Loader';
import WriteExam from './pages/user/WriteExam';
import UserReports from './pages/user/UserReports';

function App() {
  const {loading} = useSelector(state => state.loader)
  return (
    <>
      {loading && <Loader/>}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route 
            path="/"
            element={
              <ProtectedRoute>
                  <Home></Home>
              </ProtectedRoute>
            }
          >
          </Route>
          <Route 
            path="/user/write-exam/:id"
            element={
              <ProtectedRoute>
                  <WriteExam></WriteExam>
              </ProtectedRoute>
            }
          >
          </Route>
          <Route
            path="/user/reports"
            element={
              <ProtectedRoute>
                <UserReports />
              </ProtectedRoute>
            }
          >
            </Route>
          {/* Admin Routes */}
          <Route
              path="/admin/exams"
              element={
                <ProtectedRoute>
                  <Exams />
                </ProtectedRoute>
              }
          />
        <Route
              path="/admin/exams/add"
              element={
                <ProtectedRoute>
                  <AddEditExam />
                </ProtectedRoute>
              }
          />
        <Route
              path="/admin/exams/edit/:id"
              element={
                <ProtectedRoute>
                  <AddEditExam />
                </ProtectedRoute>
              }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
