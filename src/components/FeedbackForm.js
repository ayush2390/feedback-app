import React, { useContext, useEffect, useState } from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText]=useState('')
    const [message, setMessage]=useState('')
    const [btnDisabled, setBtnDisabled]=useState(true)
    const [rating, setRating] = useState(10) 
    const {addFeedback ,feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    useEffect(() => {
      if(feedbackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating )
      }
    }, [feedbackEdit])
    const handleTextChange = (e) =>{
         if(text === ''){
             setBtnDisabled(true);
             setMessage(null);
         }    else if(text !== '' && text.trim().length <= 10){
             setMessage('Atleast 10 characters should be there');
             setBtnDisabled(true);
         }
         else{
             setMessage(null);
             setBtnDisabled(false);
         }
        setText(e.target.value);
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(text.trim().length >10){
          const newFeedback = {
            text,
            rating
          }
          if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
          } else
          {         addFeedback(newFeedback)}
          setText('')
      }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating) => setRating(rating)}/>
         <div className='input-group'> 
         <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} ></input>
         <Button type='submit' isDisabled={btnDisabled}>Send</Button></div> 
         {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
