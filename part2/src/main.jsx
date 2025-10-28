import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const notes = [
  { id: 1, content: 'HTML is easy', important: false },
  { id: 2, content: 'Browser can execute only JavaScript', important: false },
  { id: 3, content: 'GET and POST are the most important methods of HTTP protocol', important: true },
  { id: 4, content: 'Learning APIs is the core of HTTP protocol', important: true },

]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />

)
