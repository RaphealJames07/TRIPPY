import { Button } from 'antd';
import './PaymentSucc.css'
import { useNavigate } from 'react-router';


const PaymentSucc = () => {
  const nav = useNavigate()

  const handleBack = () =>{
    nav('/HeaderNew')
  }

    return (
        <>
            <div className="PaymentSuccBody">
                <div className='PaymenySuccBodyWrap'>
                    <h1>Payment Successful</h1>
                    <p>
                        Dear User Your Payment has been confirmed and Booking
                        Processed, check your mail for booking details
                    </p>
                    <Button size='large' onClick={handleBack}>Back To Home</Button>
                </div>
            </div>
        </>
    );
};

export default PaymentSucc;
