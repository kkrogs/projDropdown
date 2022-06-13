import React, { useState } from 'react';
import EmotionsForm from './EmotionsForm';
import Feeling from './Feeling';
import RecallMem from './RecallMem';

import { Navbar, Container, Nav, Col, Form, FormControl, Button} from 'react-bootstrap';

function FeelingList() {
  const [feeling, setFeeling] = useState([]);

  // Function to add a feeling list item
  const addFeelingItem = (item) => {
    console.log(
      '🚀 ~ file: feelingList.js ~ line 10 ~ addfeelingItem ~ item',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new feeling list item to the existing array of objects
    const newFeeling = [item, ...feeling];
    console.log(newFeeling);

    // Call setfeeling to update state with our new set of feeling list items
    setFeeling(newFeeling);
  };

  // Function to mark feeling list item as complete
  const completeFeelingItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedFeeling = feeling.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedFeeling);
    setFeeling(updatedFeeling);
  };

  // Function to remove feeling list item and update state
  const removeFeelingItem = (id) => {
    const updatedFeeling = [...feeling].filter((item) => item.id !== id);

    setFeeling(updatedFeeling);
  };

  // Function to edit the feeling list item
  const editFeelingItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setFeeling((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div className='MemPosition'>
      
      <Col xs={7} md={{ span: 50, offset: 1 }}>
      <EmotionsForm onSubmit={addFeelingItem}  />
      <Feeling
        feeling={feeling}
        completeFeelingItem={completeFeelingItem}
        removeFeelingItem={removeFeelingItem}
        editFeelingItem={editFeelingItem}
      ></Feeling>
      </Col>
      </div>
  );
}

export default FeelingList;
