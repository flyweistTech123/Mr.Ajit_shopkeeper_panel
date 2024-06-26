import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Newpassword from './Pages/Login/Newpassword';
import Verification from './Pages/Login/Verification';
import Verificationcode from './Pages/Login/Verificationcode';
import Dashboard from './Pages/Dashboard/Dashboard';
import TotalUsers from './Pages/Total Users/TotalUsers';
import ProfileUpdate from './Pages/profile Update/ProfileUpdate';
import NewApplication from './Pages/New Application/NewApplication';
import EMICollection from './Pages/EMI Collection/EMICollection';
import AddProduct from './Pages/Add Product/AddProduct';
import ProductList from './Pages/Add Product/ProductList';
import PendingEMI from './Pages/Pending EMI/PendingEMI';
import CreateStaffID from './Pages/Create Staff ID/CreateStaffID';
import Wallet from './Pages/Wallet/Wallet';
import Notifications from './Pages/Push Notification/Notifications';
import FraudCustomer from './Pages/Fraud Customer/FraudCustomer';
import Settings from './Pages/Settings/Settings';
import UserDetail from './Pages/Total Users/UserDetail';
import FraudUserDetail from './Pages/Fraud Customer/FraudUserDetail';
import PushNotification from './Pages/Push Notification/PushNotification';


import KYC from './Pages/KYC/KYC';
import Payment from './Pages/Payment/Payment';
import ShopkeeperReport from './Pages/Shopkeeper Report/ShopkeeperReport';
import KYCDetails from './Pages/KYC/KYCDetails';
import Walletmamagement from './Pages/Wallet/Walletmamagement';
import Shopkeeperreportdetails from './Pages/Shopkeeper Report/Shopkeeperreportdetails';
import CreateID from './Pages/KYC/CreateID';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verificationcode" element={<Verificationcode />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newapplication" element={<NewApplication />} />
          <Route path="/emicollection" element={<EMICollection />} />
          <Route path="/users" element={<TotalUsers />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/pendingemi" element={<PendingEMI />} />
          <Route path="/createstaffID" element={<CreateStaffID />} />
          <Route path="/frauduser_Detail" element={<FraudUserDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/push_notification" element={<PushNotification />} />
          <Route path="/fraud_customer" element={<FraudCustomer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/userdetail" element={<UserDetail />} />
          <Route path="/profile" element={<ProfileUpdate />} />
          {/* <Route path="/kyc" element={<KYC />} /> */}
          {/* <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/shopkeeper_report" element={<ShopkeeperReport />} /> */}
          {/* <Route path="/kycdetails" element={<KYCDetails />} /> */}
          {/* <Route path="/wallet_mamagement" element={<Walletmamagement />} /> */}
          {/* <Route path="/shopkeeper_report_details" element={<Shopkeeperreportdetails />} /> */}
          {/* <Route path="/createid" element={<CreateID />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
