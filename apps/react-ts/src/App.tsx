import { useQuery } from '@tanstack/react-query'
import Components1 from '@components/Component1'
import Component2 from '@components/Component2'
import { IBook } from 'types'

function App() {
  const { isLoading, isError, error, data: books } = useQuery<IBook[], Error>(
    ['books'],
    () => fetch('/api/books.json').then(res => {
      console.log('[books called]')
      if (res.status === 200)
        return res.json()
      else
        throw new Error(res.statusText)
    })
    , {
      staleTime: 10000,
    })
  return (
    <div className="App">
      <div className="text-xl">Welcome to the query Library</div>
      {isError && (<div className='text-red-500'>{error.message}</div>)}
      {isLoading && (<div className='text-green-600'>loading</div>)}
      {Array.isArray(books) && (
        <div className="flex space-x-3 space-y-3 flex-wrap flex-grow-0 flex-shrink-0">
          {books?.map(book => (
            <div key={book.id} className="p-2 flex flex-col w-60 border-2 rounded-lg space-y-1">
              <h2 className='text-xl'>{book.title}</h2>
              <p className='italic'>{book.description}</p>
              <p className='text-sm font-bold'>{book.rating}</p>
              <button
                className='underline w-fit'
                onClick={() => {
                  console.log('book', book.id, 'was clicked')
                  // const {}
                }}>
                check it out
              </button>
            </div>
          ))}
        </div>
      )}
      <Components1 />
      <Component2 />
    </div>
  )
}

export default App
