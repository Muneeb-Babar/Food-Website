'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hidden.css';

interface PaymentStatusResponse {
  isPaid: boolean;
}
const Hidden: React.FC = () => {
  const [isPaid, setIsPaid] = useState<boolean>(true); 
  const [loading, setLoading] = useState<boolean>(true); 
  const fetchPaymentStatus = async () => {
    try {
      const response = await axios.get<PaymentStatusResponse>('https://server-egpb.vercel.app/api/payment-status');
      setIsPaid(response.data.isPaid);
    } catch (e) {
        console.log(e);
        
      setIsPaid(false); 
    } finally {
      setLoading(false); 
    }
  };
  useEffect(() => {
    fetchPaymentStatus();
    const interval = setInterval(fetchPaymentStatus, 5 * 60 * 1000); 
    return () => clearInterval(interval); 
  }, []);
  useEffect(() => {
    if (!isPaid) {
      document.body.classList.add('low-opacity'); 
    } else {
      document.body.classList.remove('low-opacity'); 
    }
  }, [isPaid]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return null; 
};
export default Hidden;