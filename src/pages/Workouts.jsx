import React, { useState } from 'react';
import CalendarInput from '../components/CalendarInput';
import './Workouts.css';



const Workouts = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ activity, duration, selectedDate });
  };

  return (
    <div>
      <h1>Workouts</h1>
      <CalendarInput
      selectedDate={selectedDate}
      onChange={setSelectedDate} 
      />
      <div className="form-container">
    <form onSubmit={handleSubmit}>
    <div className="form-element">
      <label htmlFor="activity-select">Choose an activity:</label>
      <select
        id="activity-select"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        <option value="running">Running</option>
        <option value="cycling">Cycling</option>
        <option value="swimming">Swimming</option>
        <option value="yoga">Yoga</option>
        <option value="other">Other</option>
      </select>
      </div>

      {activity === 'other' && (
        <input
          type="text"
          placeholder="Please specify the activity"
          onChange={(e) => setActivity(e.target.value)}
        />
      )}
<div className="form-element">
      <label htmlFor="duration-input">Duration (minutes): </label>
      <input
        id="duration-input"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Mins"
        className='duration-input'
      />
      </div>

      {/* Add more inputs as needed */}

      <button type="submit">Submit</button>
    </form>
    </div> 
    </div>
    
  );
};

export default Workouts;

