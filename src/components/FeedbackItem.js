import React, { useContext } from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import Card from '../shared/Card'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>    
          <div className='num-display'>{item.rating}</div>
          <button className='close' onClick = {() => deleteFeedback(item.id)}>
              <FaTimes color='purple' />
          </button>
          <button onClick = {() => editFeedback(item)} className='edit'><FaEdit color='purple'/></button>
      <div className='text-display'>{item.text}</div>
      </Card>

  )
}

export default FeedbackItem
