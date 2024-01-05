import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({
    isAllowed = false,
    component = null,
    redirectTo = '/login',
}) => {
    if (!isAllowed) return <Navigate to={redirectTo} />;
    return component ? component : <Outlet />;
};

ProtectedRoute.propTypes = {
    component: PropTypes.element.isRequired,
    isAllowed: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string,
};

export default ProtectedRoute;