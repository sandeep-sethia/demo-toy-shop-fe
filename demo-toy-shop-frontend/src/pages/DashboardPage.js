import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';

const DashboardPage = () => {
    const { handleLogout } = useContext(AuthContext);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the protected dashboard!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default DashboardPage;
