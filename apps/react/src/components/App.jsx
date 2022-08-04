import React from 'react'

const ROOT_URI = 'http://localhost:4000'

function App() {
  const [payUrl, setPayUrl] = React.useState(null)
  const [showPayment, setShowPayment] = React.useState(false)
  const [showPaymentSuccess, setShowPaymentSuccess] = React.useState(false)
  const [showPaymentError, setShowPaymentError] = React.useState(false)
  // form state
  const [form, setForm] = React.useState({
    merchant: 'bhanu collection',
    title: 'red',
    description: 'description',
    amount: '124',
    currency: 'INR',
    quantity: '1',
  })

  const handlePay = async () => {
    console.log('[App] handlePay', form)
    const payment = {
      merchant: form.merchant,
      currency: form.currency,
      product: {
        name: form.title,
        description: form.description,
        amount: form.amount,
        quantity: form.quantity,
      },
    }
    const response = await (
      await fetch(`${ROOT_URI}/stripe/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
      })
    ).json()
    if (response.error) {
      setShowPaymentError(true)
    } else {
      setPayUrl(response.url)
      setShowPayment(true)
    }
  }

  const handlePayUrlChange = (e) => {
    console.log('[App] handlePayUrlChange', e)
  }

  return (
    <div className='m-5 flex flex-col items-center justify-center'>
      <form
        className='flex flex-col items-center justify-center space-y-3'
        action='#'
        onSubmit={(e) => {
          e.preventDefault()
          handlePay()
        }}
      >
        <input
          className='rounded-md'
          value={form.merchant}
          onChange={(e) => setForm({ ...form, merchant: e.target.value })}
          type='text'
          placeholder='merchant name'
        />
        <input
          className='rounded-md'
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          type='text'
          placeholder='title'
        />
        <input
          className='rounded-md'
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          type='text'
          placeholder='description'
        />
        <input
          className='rounded-md'
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          type='number'
          placeholder='amount'
        />
        <input
          className='rounded-md'
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          type='number'
          placeholder='quantity'
        />
        <select
          value={form.currency}
          onChange={(e) => setForm({ ...form, currency: e.target.value })}
          name='currency'
        >
          <option value='inr'>INR</option>
          <option value='usd'>USD</option>
        </select>
        <button
          className='rounded-lg bg-blue-600 p-2 text-white'
          type='submit'
          disabled={showPaymentSuccess || showPaymentError}
        >
          {showPaymentSuccess ? 'success' : ''}
          {showPaymentError ? 'error' : ''}
          Pay now
        </button>
      </form>
      {showPayment && <iframe src={payUrl} onLoad={handlePayUrlChange} />}
    </div>
  )
}

export default App
