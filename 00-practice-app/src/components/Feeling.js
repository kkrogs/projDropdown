import React, { useState } from 'react';
import EmotionsForm from './EmotionsForm';

function Feeling(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    emotions: '',
  });

  console.log(props.feeling);

  const submitUpdate = (value) => {
    props.editFeelingItem(edit.id, value);
    setEdit({ id: null, value: '', emotions: '' });
  };

  if (edit.id) {
    return <EmotionsForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.feeling.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `bucket-row complete ${item.emotions}`
          : `bucket-row ${item.emotions}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeFeelingItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p>date here</p>
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, value: item.text, emotions: item.emotions })}> ✏️</p>
        <p onClick={() => props.removeFeelingItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Feeling;