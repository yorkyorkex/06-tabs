import React, { useEffect, useState } from 'react'
import { use } from 'react'
import JobInfo from './JobInfo'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isLoading) {
    return (
      <section className="job-center">
        <div className="loading">Loading...</div>
      </section>
    )
  }

  return (
    <section className="job-center">
      {jobs.map((job) => {
        return <JobInfo key={job.id} {...job} />
      })}
    </section>
  )
}

export default App
