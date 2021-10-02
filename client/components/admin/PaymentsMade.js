import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PaymentsMade = () =>{
  const [madePayments, setMadePayments] = useState( ()=> [])

  useEffect(()=>{
    async function getParents (){
      const parents = await axios.get('/api/parentswhopaid/')
      console.log('PARENTS---->>', parents.data)
      setMadePayments(parents.data)
    }
    getParents()
  }, [])

  return (
    <div id="parent-payment-tracker">
      <h1 id='parent-tracker-title'>Payments Made by parents</h1>
            <table id='tracker-table'>
              <tbody className='table'>
                <tr>
                  <th className='table-words'>Parent</th>
                  <th className='table-words'>Email</th>
                  <th className='table-words'>Phone Numbers</th>
                  <th className='table-words'>Date</th>
                  <th className='table-words'>Paid</th>
                  {/* <th className='table-words'>Net Amount</th>
                  <th className='table-words'>Currency</th> */}
                </tr>
                {
                  madePayments.length === 0 
                  ?
                  <tr>
                    <td className='payment-made'>n/a</td>
                    <td className='payment-made'>n/a</td>
                    <td className='payment-made'>n/a</td>
                    <td className='payment-made'>n/a</td>
                    <td className='payment-made'>n/a</td>
                  </tr>
                  :
                  madePayments.map( (payment, idx)=>{
                    return (
                      <tr className='payment-made-row' key={payment.id}>  
                        <td className='payment-made'>{`${payment.user.username} ${payment.user.lastName}`}</td>
                        <td className='payment-made'>{payment.user.email}</td>
                        <td className='payment-made'>{payment.user.phone}</td>
                        <td className='payment-made'>{payment.createdAt.slice(0,10)}</td>
                        <td className='payment-made'>{'$199.99'}</td>
                      </tr>
                    )}
                  )  
                }
              </tbody>
            </table>
    </div>
  )
}

export default PaymentsMade