import {createContext,useState } from 'react';

const FeedbackContext = createContext();


export const FeedbackProvider  = ({children}) => {

     const [feedback , setFeedback] = useState([
        {
        id : 1,
        rating : 8,
        text :"these website is made by a beginner developer but it still looks good enough."
       },
     ]);

      
    return(
       <FeedbackContext.Provider value={{feedback}} >
          {children}
       </FeedbackContext.Provider>
    )  

}

export default FeedbackProvider;