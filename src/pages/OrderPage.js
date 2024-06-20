// src/pages/OrderPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavbar from './SideNavbar'; // Ensure this path is correct
import styles from './OrderPage.module.css'; // Ensure this path is correct

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleCreateOrder = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/orders', {
        title,
        description,
        orderDate
      });
      fetchOrders();
    } catch (error) {
      console.error('Error creating order', error);
    }
  };

  return (
    <div className={styles.container}>
      <SideNavbar />
      <div className={styles.content}>
        <h2>Orders</h2>
        <form onSubmit={handleCreateOrder}>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Order Date:</label>
            <input
              type="date"
              className="form-control"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Order</button>
        </form>
        <ul className="list-group mt-3">
          {orders.map(order => (
            <li key={order.id} className="list-group-item">
              {order.title} - {order.description} - {order.orderDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderPage;
