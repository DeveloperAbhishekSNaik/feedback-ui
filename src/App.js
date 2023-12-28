// The work of the App component is to load all the custom created components inside the DOM in the sequence that they are specified 
// in the app component.

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutPages from './components/pages/AboutPages';
import AboutLinkIcon from './components/AboutLinkIcon';
import Post from './components/Post';
import NotFound from './components/NotFound';
import { FeedbackProvider } from './context/FeedbackContext';

function App(){
    
    return(
         <FeedbackProvider>
           <Router>
            <Header />
            <div className="container">
           <Routes>
            <Route path='/' element={
            <>
            <FeedbackForm  /> 
            <FeedbbackStats  />
            <FeedbackList   /> 
            <AboutLinkIcon />
            </>
           }>
           </Route>
           <Route path='/about' element={
            <AboutPages />
           }>

           </Route> 
           <Route path='/about' element={
            <Post />
           }>

           </Route>
           <Route path='/NotFound' element={
            <NotFound />
           }>

           </Route>  
           </Routes>
           </div>
           </Router>
        </FeedbackProvider>
    )
}

export default App ;