import React, { useState } from 'react'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  return <h2>Tabs Starter</h2>
}
export default App
