// The work of the App component is to load all the custom created components inside the DOM in the sequence that they are specified 
// in the app component.

import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import {useState} from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import  {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AboutPages from './components/pages/AboutPages';
import AboutLinkIcon from './components/AboutLinkIcon';
import Post from './components/Post';
import NotFound from './components/NotFound';

function App(){
    const [feedback , setFeedback ] = useState(FeedbackData);


    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    }

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback ,...feedback]); 
    }

    return(
        <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path='/' element={
            <>
            <FeedbackForm handleAdd={addFeedback} /> 
            <FeedbbackStats feedback={feedback} />
            <FeedbackList  feedback={feedback}  
            handleDelete={deleteFeedback} /> 
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
    )
}

export default App ;