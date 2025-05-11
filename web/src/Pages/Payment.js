import React, { useState, useEffect } from 'react';
import HomeIcon from '../Components/HomeIcon';
import Navbar from '../Components/Navbar';
import '../Styles/Payment.css';
import card from  '../Assets/card.jpg';
import pay from  '../Assets/pay.jpg';
import history from  '../Assets/history.jpg';
import Receipts from  '../Assets/Receipts.jpg';
function Payment() {
  const [amountDue, setAmountDue] = useState(0);

  useEffect(() => {
    setAmountDue(0); // Initial amount owed
  }, []);

  function openPage(page) {
    window.location.href = page;
  }

  return (
    <div className="Payment">
      <div className="layout">
      
        <Navbar/>
        <HomeIcon/>
        <div className="content">
          <div className="amount-owed">
            <div className="amount-text">
              <h3>Amount Owed</h3>
              <p id="amount">{amountDue}$</p>
            </div>
            <img src={card} alt="Card Icon" className="amount-icon" />
          </div>

          <div className="buttons-container">
            <div className="button-wrapper">
              <div className="button-box">
                <img src={history} alt="Payment History" />
              </div>
              <span className="button-label" onClick={() => openPage('Payment_history')}>Payment History</span>
            </div>

            <div className="button-wrapper">
              <div className="button-box">
                <img src={Receipts} alt="Receipts" />
              </div>
              <span className="button-label" onClick={() => openPage('Receipts')}>Receipts</span>
            </div>

            <div className="button-wrapper">
              <div className="button-box">
                <img src={pay} alt="Pay" />
              </div>
              <span className="button-label" onClick={() => openPage('Pay')}>Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;