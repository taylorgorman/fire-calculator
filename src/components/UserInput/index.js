import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import './index.scss'
import nper from '../../utilities/nper'


export default function () {

  const [portfolioPresent, setPortfolioPresent] = useState(525686)
  const [savingsPresentMonthly, setSavingsPresentMonthly] = useState(1748)
  const [expensesFutureMonthly, setExpensesFutureMonthly] = useState(2700)
  const [yearsToRetire, setYearsToRetire] = useState('')
  const [withdrawalRate] = useState(.04)
  const [returnOnSavings] = useState(10)

  const onFieldChange = ( event ) => { console.log('onFieldChange')



  }

  const onSubmit = ( event ) => { console.log('onSubmit')
    event.preventDefault()

    const ir = returnOnSavings / 12
    const pmt = 0 - savingsPresentMonthly
    const pv = 0 - portfolioPresent
    const fv = expensesFutureMonthly * 12 / withdrawalRate

    setYearsToRetire( nper( ir, pmt, pv, fv ) / 12 )

  }

  return (
  <div className="Form">

    <Form onSubmit={ onSubmit }>

      <Form.Group controlId="portfolio-present">
        <Form.Label>Current Savings Balance</Form.Label>
        <Form.Control
          type="number"
          value={ portfolioPresent }
          onChange = { event => {
            setPortfolioPresent( event.target.value )
            onFieldChange( event )
          } }
        />
      </Form.Group>

      <Form.Group controlId="savings-present-monthly">
        <Form.Label>Monthly Savings</Form.Label>
        <Form.Control
          type="number"
          value={ savingsPresentMonthly }
          onChange = { event => {
            setSavingsPresentMonthly( event.target.value )
            onFieldChange( event )
          } }
        />
      </Form.Group>

      <Form.Group controlId="expenses-future-monthly">
        <Form.Label>Monthly expenses after retirement</Form.Label>
        <Form.Control
          type="number"
          value={ expensesFutureMonthly }
          onChange = { event => {
            setExpensesFutureMonthly( event.target.value )
            onFieldChange( event )
          } }
        />
      </Form.Group>

      <Button type="submit" variant="primary">Calculate</Button>

      <h3>Years to retire: { yearsToRetire }</h3>

    </Form>

  </div>
  )

}
