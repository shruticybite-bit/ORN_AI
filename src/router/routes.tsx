import Data from '@/pages/Components/Data';
import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
 
const Overview = lazy(() => import('../pages/Dashboard'));
const MessagesList = lazy(() => import('../pages/MessagesList'));
const AdminMessages = lazy(() => import('../pages/AdminMessages'));
const BlogAdmin = lazy(() => import('../pages/BlogAdmin'));


const ChangePasswordPortal = lazy(() => import('../pages/ChangePassword'));

const AdminChangePasswordPortal = lazy(() => import('../pages/AdminChangePassword'));


const Contacts = lazy(() => import('../pages/Apps/Contacts'));
const FeedbackListNew = lazy(() => import('../pages/Components/FeedbackListNew.tsx'));
const PaymentList = lazy(() => import('../pages/Components/PaymentList.tsx'));
const PaymentListNormal = lazy(() => import('../pages/Components/PaymentListNormal.tsx'));

const LabList = lazy(() => import('../pages/Components/LabList.tsx'));
const LabListNormal = lazy(() => import('../pages/Components/LabListNormal.tsx'));
const UsersList = lazy(() => import('../pages/Components/UserList.tsx'));


//const Chat = lazy(() => import('../pages/Apps/Chat'));





//const PricingTable = lazy(() => import('../pages/Components/PricingTable'));

const Profile = lazy(() => import('../pages/Users/Profile'));


const UserProfile = lazy(() => import('../pages/Users/UserProfile'));

const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));

const Faq = lazy(() => import('../pages/Pages/Faq'));

const Home = lazy(() => import('../pages/websites/Home'));
const Pricing = lazy(() => import('../pages/Components/Pricing'));
const TechnologyPrograms = lazy(() => import('../pages/Components/Technology'));
const DataScientce = lazy(() => import('../pages/Components/Data'));
const Telecommunication = lazy(() => import('../pages/Components/TelecommunicationC'));
const Advancedprograms = lazy(() => import('../pages/Components/Advancedprograms'));
const ScienceProgramsD = lazy(() => import('../pages/Components/SciencePrograms'));
const BusinessDataAnalyticsD = lazy(() => import('../pages/Components/BusinessDataAnalytics'));

const PrivacyPolicy = lazy(() => import('../pages/Components/PrivacyPolicy'));
const ContactPage = lazy(() => import('../pages/Components/ContactPage'));
const TermsCondition = lazy(() => import('../pages/Components/TermsCondition'));
const RefoundPolicy = lazy(() => import('../pages/Components/RefoundPolicy'));
const BlogList = lazy(() => import('../pages/BlogList'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
//const PageOfferService = lazy(() => import('../pages/Components/PageOfferService'));

const FeedbackForm = lazy(() => import('../pages/Components/FeedbackForm'));

const AboutUs = lazy(() => import('../pages/Components/AboutUs'));
const OurServices = lazy(() => import('../pages/Components/OurServices'));
const Support = lazy(() => import('../pages/Components/Support'));

const LabDetail = lazy(() => import('../pages/Components/LabDetail'));

// import LabDetail from "./pages/LabDetail";



const routes = [
    // dashboard
     {
        path: '/',
        element: <Home />,
        layout:'web',
    },
    
   
     {
        path: '/change-password',
        element: <ChangePasswordPortal />,
        layout:'web',

    },
    {
        path: '/admin-change-password',
        element: <AdminChangePasswordPortal />,

    },
    {
        path: '/apps/PaymentListNormal',
        element: <PaymentListNormal />,
        layout:'web',

    },
    
     
     {
        path: '/index',
        element: <Index />,
    },
    
    {
        path: '/about-us',
        element: <AboutUs />,
        layout:'web',
    },
    {
        path: '/support',
        element: <Support />,
        layout:'web',
    },
    
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
        layout:'web',
    },
   
    {
        path: '/contact-us',
        element: <ContactPage />,
        layout:'web',
    },
     {
        path: '/cyber-security',
        element: <Pricing />,
        layout:'web',
    },
     {
        path: '/data-science-ai',
        element: <DataScientce />,
        layout:'web',
    },
    {
        path: '/telecommunication',
        element: <Telecommunication />,
        layout:'web',
    },
     {
        path: '/advanced-programs',
        element: <Advancedprograms />,
        layout:'web',
    },
      {
        path: '/business-analytics',
        element: <BusinessDataAnalyticsD />,
        layout:'web',
    },
    {
        path: '/science-programs',
        element: <ScienceProgramsD />,
        layout:'web',
    },
     {
        path: '/technology-programs',
        element: <TechnologyPrograms />,
        layout:'web',
    },
    {
        path: '/lab/:id',
        element: <LabDetail />,
        layout:'web',
    },
    {
        path: '/terms-and-conditions',
        element: <TermsCondition />,
        layout:'web',
    },
    {
        path: '/refund-policy',
        element: <RefoundPolicy />,
        layout:'web',
    },
    {
        path: '/blogs',
        element: <BlogList />,
        layout:'web',
    },
    
    {
        path: '/blog-detail/:id',
        element: <BlogDetail />,
        layout:'web',
    },
    // {
    //     path: '/process',
    //     element: <PageOfferService />,
    //     layout:'web',
    // },
     {
        path: '/index/overview',
         element: <Overview />,
    },
    // {
    //     path: '/Messages',
    //      element: <MessagesList />,
    // },
    // {
    //     path: '/AdminMessages',
    //      element: <AdminMessages />,
    // },
     {
        path: '/blogs',
         element: <BlogAdmin />,
    },
    
    {
        path: '/apps/FeedbackList',
        element: <FeedbackListNew />,
    },
    {
        path: '/apps/LabList',
        element: <LabList />,
    },
    {
        path: '/apps/LabListNormal',
        element: <LabListNormal />,
    },
    
     {
        path: '/apps/PaymentList',
        element: <PaymentList />,
    },
    {
        path: '/apps/UsersList',
        element: <UsersList />,
    },
    
    {
        path: '/apps/contacts',
        element: <Contacts />,
    },
    
    {
        path: '/users/profile',
        element: <Profile />,
    },
    {
        path: '/users/user-profile',
        element: <UserProfile />,
        layout: 'web',
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    },
    {
        path: '/pages/faq',
        element: <Faq />,
    },
    
];

export { routes };
