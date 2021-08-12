import React from 'react'
import DatePicker from 'react-date-picker'

const DateFilter = ({ setEndDate, endDate }) => {
  return (
    <div className="date-picker">
      <p>Select end date to filter data: </p>
      <DatePicker onChange={setEndDate} value={endDate} clearIcon={null}/>
    </div>
  ) 
}

export default DateFilter