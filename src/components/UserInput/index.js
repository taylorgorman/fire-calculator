import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import './index.scss'


export default function () {

  const [portfolioPresent, setPortfolioPresent] = useState('')
  const [savingsPresentMonthly, setSavingsPresentMonthly] = useState('')
  const [expensesFutureMonthly, setExpensesFutureMonthly] = useState('')
  const [withdrawalRate] = useState(0.04)

  const onFieldChange = ( event ) => { console.log('onFieldChange')



  }

  const onSubmit = ( event ) => { console.log('onSubmit')
    event.preventDefault()



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
        <Form.Label>Expenses after retirement</Form.Label>
        <Form.Control
          type="number"
          value={ expensesFutureMonthly }
          onChange = { event => {
            setExpensesFutureMonthly( event.target.value )
            onFieldChange( event )
          } }
        />
      </Form.Group>

      <Button variant="primary" type="submit">Calculate</Button>

    </Form>

  </div>
  )

}
