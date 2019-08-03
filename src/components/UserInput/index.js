import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

import './index.scss'
import InputGroupAccounting from '../InputGroupAccounting'
import nper from '../../utilities/nper'


export default function UserInput() {

  const [portfolioPresent, setPortfolioPresent] = useState(10000)
  const [savingsPresentMonthly, setSavingsPresentMonthly] = useState(800)
  const [expensesFutureMonthly, setExpensesFutureMonthly] = useState(2700)
  const [yearsToRetire, setYearsToRetire] = useState('')
  const [withdrawalRate] = useState(.04)
  const [returnOnSavings] = useState(10)

  useEffect( () => {

    const ir = returnOnSavings / 12
    const pmt = 0 - savingsPresentMonthly
    const pv = 0 - portfolioPresent
    const fv = expensesFutureMonthly * 12 / withdrawalRate

    setYearsToRetire( nper( ir, pmt, pv, fv ) / 12 )

  }, [
    portfolioPresent,
    savingsPresentMonthly,
    expensesFutureMonthly,
    withdrawalRate,
    returnOnSavings,
  ] )

  const onSubmit = ( event ) => { console.log('onSubmit')
    event.preventDefault()
  }

  return (
  <div className="user-input">

    <h2>How many years until you can retire?</h2>

    <Form onSubmit={ onSubmit }>

      <Form.Group controlId="portfolio-present">
        <Form.Label>
          How much is in your savings now?<br />
          <small>(Current Porfolio Value)</small>
        </Form.Label>
        <InputGroupAccounting
          value={ portfolioPresent }
          onValueChange={ value => setPortfolioPresent( value ) }
        />
      </Form.Group>

      <Form.Group controlId="savings-present-monthly">
        <Form.Label>
          How much do you put in savings each month?
        </Form.Label>
        <InputGroupAccounting
          value={ savingsPresentMonthly }
          onValueChange={ value => setSavingsPresentMonthly( value ) }
        />
      </Form.Group>

      <Form.Group controlId="expenses-future-monthly">
        <Form.Label>
          What will your monthly expenses be after retirement?
        </Form.Label>
        <InputGroupAccounting
          value={ expensesFutureMonthly }
          onValueChange={ value => setExpensesFutureMonthly( value ) }
        />
      </Form.Group>

      {/*
      <Button type="submit" variant="primary">Calculate</Button>
      */}

      { yearsToRetire && (
        <p className="h4">
          <NumberFormat
            value={ yearsToRetire }
            thousandSeparator={ true }
            displayType="text"
            decimalScale={ 2 }
          />{' '}
          years <span style={{ display:'inline-block' }}>to retirement</span>
        </p>
      ) }

    </Form>

  </div>
  )

}
