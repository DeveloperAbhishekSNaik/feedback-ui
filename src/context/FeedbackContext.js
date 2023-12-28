import {createContext,useState } from 'react';
import  {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();


export const FeedbackProvider  = ({children}) => {

     const [feedback , setFeedback] = useState([
        {
        id : 1,
        rating : 8,
        text :"these website is made by a beginner developer but it still looks good enough."
       },
       {
         id : 2,
         rating : 9,
         text :"these website is made by a intermediate developer but it still looks good enough."
        },
        {
         id : 3,
         rating : 9,
         text :"these website is made by a senior developer but it still looks good enough."
        }
     ])

      const [feedbackEdit , setFeedbackEdit] = useState({
         item : {},
         edit : false
      })

     
      
     const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')){
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    }

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback ,...feedback]); 
    }
      //handles the click on the edit icon.
    const editFeedback = (item) =>{
      setFeedbackEdit({
         item : item,
         edit : true
      })
}

    //handle s1ubmit of the modified feedback item loaded in the form.
        const updateFeedback = (id,updItem) => {
             setFeedback(
               feedback.map((item) => (item.id === id ?
                  {
                       ...item,...updItem
                  } : item ))
             )
        } 
      
    return(
       <FeedbackContext.Provider value={{ feedback , deleteFeedback, addFeedback, feedbackEdit,editFeedback,updateFeedback }} >
          {children}
       </FeedbackContext.Provider>
    )  

}

export default FeedbackContext;