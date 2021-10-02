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
    <div id='fin-summary'>
    {
      finalReport.length === 0 
      ?
        <>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div><div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div><div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div><div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div><div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      :
        <div>
          <h1 id='summary-title'>Financial Summary</h1>
            <table>
              <tbody className='table'>
                <tr>
                  <th className='table-words'>Category</th>
                  <th className='table-words'>Description</th>
                  <th className='table-words'>Net Amount</th>
                  <th className='table-words'>Currency</th>
                </tr>
                {
                  finalReport.map( (row, idx)=>{
                    return (
                      <tr key={idx}>
                        <>
                          {
                            row.map( (info, idx) =>{
                              return (
                                <td className='table-words' key={idx}>{info}</td>
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
        }
      </div> 
  )
}

export default financialSnapshot