import React, {useState, useEffect} from 'react'
import axios from 'axios'

const financialSnapshot = () => {
  const [report, setReport] = useState(()=>'')
  
  useEffect(()=>{
    const runReport = async()=>{
      const { id } = (await axios.post('/api/v1/reporting/report_runs')).data
      const dataTwo = await axios.get(`/api/v1/reporting/report_runs/${id}`)
      const { data } = (await axios.get('/api/v1/reporting/report_runs')).data
      const report = data.find( report => report.status === 'succeeded')
      const balances = (await axios.post('/api/openreport', { stripeUrl: report.result.url })).data
      console.log('balance---->', balances)
      setReport(balances)
    }
    runReport()
  },[])

  return (
    <div>
      <h1>Snapshot</h1>
      <table>
        <tbody>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Net Amount</th>
            <th>Currency</th>
          </tr>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Net Amount</th>
            <th>Currency</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default financialSnapshot