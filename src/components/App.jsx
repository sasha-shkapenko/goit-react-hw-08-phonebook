import { lazy, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRoute from "./UserMenu/PrivateRoute";
import PublicRoute from "./UserMenu/PublicRoute";

const HomePage = lazy(() => import("pages/HomePage"));
const ContactsPage = lazy(() => import("pages/ContactsPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (!isRefreshing && (
    <div>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>} >
        <Routes>
          <Route path='/' element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={
            <PublicRoute redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
          }
          />
          <Route path='/register' element={
            <PublicRoute redirectTo="/contacts" restricted>
              <RegisterPage />
            </PublicRoute>
          }
          />
        </Routes>
      </Suspense>
    </div>
  ));

};

export default App;