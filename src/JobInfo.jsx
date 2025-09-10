import React from 'react'
import Duties from './Duties'
const JobInfo = ({ company, title, location, dates, duties }) => {
  return (
    <div className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p>{location}</p>
      <p className="job-dates">{dates}</p>
      <Duties duties={duties} />
    </div>
  )
}

export default JobInfo
