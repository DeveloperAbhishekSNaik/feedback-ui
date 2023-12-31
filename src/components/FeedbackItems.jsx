
import React from 'react';
import {useState} from 'react';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa';

function FeedbackItems ({item,handleDelete}){
    

    return(
        
          <Card>
              <div className="num-display">{item.rating}</div>
              <button  onClick={() => handleDelete(item.id)}
              className="close">
                 <FaTimes color="red" />
              </button>
              <div className="text-display">{item.text}</div> 
        </Card>
        
    )
}

export default FeedbackItems ;