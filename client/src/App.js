import Header from "./components/Header";

// 01 homePage component
import Start from "./components/01home/Start";
import Who from "./components/01home/WhoAreWe";
import What from "./components/01home/WhatWeDo";
import WhereWeServe from "./components/01home/Where";
import WhyChooseUs from "./components/01home/WhyChooseUs";
import Feedback from "./components/01home/Feedback";
//  02 AboutUs component  
import CompanyProfile from "./components/02about/CompanyProfile";
import VisionMission from "./components/02about/VisionMission";
import ClientList from "./components/02about/ClientList";
import UniformSection from "./components/02about/Uniform";


// 03 Services component
import OurServices from "./components/03services/Services";
import ServicesForm from "./components/03services/ServiceForm";

// 04 Career component
import CareerSection from "./components/04career/Jobs";


// 05 Gallery component
import Gallery from "./components/05gallery/Gallery";


// 06 ContactUs component
import ContactUs from "./components/06conactUs/ContactUs"
import FeedbackForm from "./components/06conactUs/FeedbackForm";

// 07 Login Page component
import Login from "./components/07login/Login"
import LoginPage from "./components/04career/LoginPage";
import SignupUser from "./components/04career/SignupUser";
import UserForgetPassword from "./components/04career/UserForgetPassword";

import ProtectedRoute from "./components/07login/ProtectedRoute";

import Footer from "./components/Footer";
// Routes is imported

//userDashboard
import UserDashboard from "./components/UsersPage/UserDashboard";


//admin DashBoard
import AdminHeader from "./components/adminPage/AdminHeader";
import ServiceReq from "./components/adminPage/01ServiceReq";
import JobApplication from "./components/adminPage/02JobApp";
import AdminFeedBack from "./components/adminPage/03Feedback";
import EmailForm from "./components/adminPage/EmailSender";
import FinalizeDeal from "./components/adminPage/FinalDeals/FinalDeail";
import OnlyFinals from "./components/adminPage/FinalDeals/OnlyFinalized";

//extra
import { Route, Routes } from "react-router-dom";  





function App() {
  return (
    <div>
      <Header />
     
      <Routes>
        {/* 01 homePage component */}
        <Route
          path="/" element={
            <div>
              <Start/>
              <Who/>
              <What/>
              <WhereWeServe/>
              <WhyChooseUs/>
              <Feedback/>


              <ServiceReq/>
              <JobApplication/>
              <AdminFeedBack/>
              <OnlyFinals/>
            </div> } />


        {/* 02 AboutUs component */}
        <Route path="/about" element={
          <div>
            <CompanyProfile/>
            <VisionMission/>
            <UniformSection/>
            <ClientList/>
          </div>
        } />

       {/* 03 Services component */}
       <Route path="/services" element={
          <div>
          <OurServices/>
          <ServicesForm/>
          </div>
        } />

        {/* 04 Career component */}
        <Route path="/career" element={
          <div>
              <CareerSection/>
          </div>
        }/>

        {/*routes for user actions*/}
        <Route path="/UserLogin" element={ <LoginPage/>}/>
        <Route path="/UserSignup" element={  <SignupUser/>}/>
        <Route path="/UserForgetpass" element={ <UserForgetPassword/>}/>

        {/*routes user dashboard*/}
        <Route path="/UserDashboard" element={
          <div>
              <UserDashboard/>

          </div>
        }/>

         {/*routes for Admin panel*/}
         <Route path="/AdminPage" element={ <AdminHeader/>}/>
         <Route path="/SerReq" element={ <ServiceReq/>}/>
         <Route path="/adJobApp" element={ <JobApplication/>}/>
         <Route path="/adFeedback" element={ <AdminFeedBack/>}/>
         <Route path="/emailsender" element={ <EmailForm/>}/>
         <Route path="/finalizeDeal" element={ <FinalizeDeal/>}/>
         <Route path="/OnlyFinals" element={ <OnlyFinals/>}/>
         <Route element={<ProtectedRoute />}></Route>

          {/* 05 Gallery component */}
        <Route path="/gallery" element={
          <div>
            <Gallery/>
          </div>
        }/>


          {/* 06 ContactUs component */}
          <Route path="/contactus" element={
          <div>
            <ContactUs/>
            <FeedbackForm/>
          </div>
        }/>


          {/* 07 Login Page component */}
          <Route path="/login" element={
          <div>
            <Login/>
          </div>
        }/>

      

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
