import React from 'react';
import useAuth from '../../../hooks/useAuth';
const PurchaseProceed = () => {
    const {user} =useAuth();
    return (
        <div>
            <h4>Lets proceed purchase</h4>
            {user.displayName}
            <br />
            {user.email}
        </div>
    );
};

export default PurchaseProceed;