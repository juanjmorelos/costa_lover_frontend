import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/components/Navbar'

export const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
