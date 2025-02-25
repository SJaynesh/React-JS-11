import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Users from './Users'
import First from './First'

// function Hello() {
//   return <h1>Hello</h1>
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Users />
    {/* <First></First> */}
  </StrictMode>
)

