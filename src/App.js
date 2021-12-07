import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// styles
import './App.css'

// pages & components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import CreateUser from './pages/CreateUser/CreateUser'
import Project from './pages/project/Project';
// import Admin from './pages/Admin/Admin'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';
import AddRxFigures from './pages/addRxFigures/AddRxFigures';
import AddServiceFigures from './pages/addServiceFigures/AddServiceFigures';
import ViewRxFigures from './pages/viewRxFigures/ViewRxFigures';

function App() {

const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  (user && <Dashboard />) || (!user && <Navigate to="/login" />)
                }
              ></Route>
              <Route
                path="/create"
                element={
                  (user && <Create />) || (!user && <Navigate to="/login" />)
                }
              ></Route>
              <Route
                path="/login"
                element={(!user && <Login />) || (user && <Navigate to="/" />)}
              ></Route>

              <Route
                path="/createuser"
                element={
                  (user && <CreateUser />) || (!user && <Navigate to="/" />)
                }
              ></Route>
              <Route
                path="/project/:id"
                element={
                  (user && <Project />) || (!user && <Navigate to="/login" />)
                }
              ></Route>
              <Route
                path="/addRxFigures"
                element={
                  (user && <AddRxFigures />) ||
                  (!user && <Navigate to="/login" />)
                }
              ></Route>
              <Route
                path="/addServiceFigures"
                element={
                  (user && <AddServiceFigures />) ||
                  (!user && <Navigate to="/login" />)
                }
              ></Route>
              <Route
                path="/viewrxfigures"
                element={
                  (user && <ViewRxFigures/>) ||
                  (!user && <Navigate to="/login" />)
                }
              ></Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
