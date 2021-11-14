import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    // const [myOrders, setMyOrders] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/orders")
        .then(res => res.json())
        .then(data =>setAllOrders(data))
    },[])

    // console.log(allOrders);

    const myOrders = allOrders.filter(order =>order.mainEmail === user.email)

    console.log(user.displayName);
    return (
        <div>
            <h3>my orders {myOrders.length}</h3>
        </div>
    );
};

export default MyOrders;