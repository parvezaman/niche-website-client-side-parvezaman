import * as React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user} =useAuth();
    return (
        <div>
            <h3 className="text-center">Dashboard Home</h3>
            <h5 className="text-center">Welcome!!! {user.displayName} having {user.email}, You can Access your Dashboard here</h5>
        </div>
    );
};

export default DashboardHome;