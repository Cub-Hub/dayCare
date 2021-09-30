import React, {useState, useEffect} from 'react'
import axios from 'axios'

const financialSnapshot = () => {
  const [finalReport, setFinalReport] = useState(()=>[])
  
  useEffect(()=>{
    const runReport = async()=>{
      const { id } = (await axios.post('/api/v1/reporting/report_runs')).data
      const dataTwo = await axios.get(`/api/v1/reporting/report_runs/${id}`)
      const { data } = (await axios.get('/api/v1/reporting/report_runs')).data
      const report = data.find( report => report.status === 'succeeded')
      const balances = (await axios.post('/api/openreport', { stripeUrl: report.result.url })).data
      const adjReport = balances.slice(1)
      setFinalReport(adjReport) 
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
          {
            finalReport.map( (row, idx)=>{
              return (
                <tr key={idx}>
                  <>
                    {
                      row.map( (info, idx) =>{
                        return (
                          <td key={idx}>{info}</td>
                        )
                      })
                    }
                  </>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default financialSnapshot