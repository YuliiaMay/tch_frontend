import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { PublicRoute, ProtectedRoute } from './routes';
import { useEffect } from 'react';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { FontStyles } from './styles/FontStyles';
import { useAuthStore } from './store/auth';

import SharedLayout from './components/SharedLayout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ConditionsPage from './pages/ConditionsPage';
import CongratsPage from './pages/CongratsPage';
import PolicyPage from './pages/PolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import ChangeEmailPage from './pages/ChangeEmailPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import CreateNewPasswordPage from './pages/CreateNewPasswordPage';
import CoursesPage from './pages/CoursesPage';
import ProfilePage from './pages/ProfilePage';
import MyAdvertPage from './pages/MyAdvertsPage';
import AddAdvertPage from './pages/AddAdvertPage';
import AdvertDetailsPage from './pages/AdvertDetailsPage';
import { ActiveAdverts, InReviewAdverts } from './components/MyAdverts';


const App = () => {
  const { isAuth, setToken, setProfile, token } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;


  useEffect(() => {
    const fetchUserData = async () => {
      await setProfile();
    };

    if (token && isAuth === true) fetchUserData();
  }, [setProfile, token, isAuth]);


  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    console.log('urlSearchParams', urlSearchParams);
    const googleToken = urlSearchParams.get('token');
    console.log('googleToken', googleToken);
    if (googleToken) {
      setToken(googleToken);

      switch (pathname) {
        case '/courses':
          navigate('/courses');
          break;
        case '/create-password/': 
          navigate('/create-password');
      }

      return;
    }
  }, [setToken, navigate, pathname]);


  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/courses' element={<CoursesPage />} />

          <Route path='/courses/:advertId' element={<AdvertDetailsPage />} />
          
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                component={<ProfilePage />}
                isAllowed={isAuth}                
              />}
          />

          <Route
            path='/my-advert/active'
            element={
              <>
                <ProtectedRoute
                  component={<MyAdvertPage/>}
                  isAllowed={isAuth}                
                />
                <Navigate to="/my-advert/active" />              
              </>
            }          
          >
            <Route
              path='active'
              element={
                <ProtectedRoute
                  component={<ActiveAdverts />}
                  isAllowed={isAuth}                
                />}
            />
            <Route
              path='in-review'
              element={
                <ProtectedRoute
                  component={<InReviewAdverts />}
                  isAllowed={isAuth}                
                />}
            />            
          </Route>

          <Route
            path='/add-advert'
            element={
              <ProtectedRoute
                component={<AddAdvertPage />}
                isAllowed={isAuth}                
              />}
          />
          
          <Route
            path='/register'
            element={
              <PublicRoute
                redirectTo='/login'
                component={<RegisterPage />}
                restricted
              />
              
            }
          />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/create-password' element={<CreateNewPasswordPage />} />

          <Route
            path='/change-password'
            element={
              <ProtectedRoute
                component={<ChangePasswordPage />}
                isAllowed={isAuth}                
              />}
          />
          <Route
            path='/change-email'
            element={
              <ProtectedRoute
                component={<ChangeEmailPage />}
                isAllowed={isAuth}                
              />}
          />

          <Route path='/conditions' element={<ConditionsPage />} />
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/success' element={<CongratsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}


export default App;