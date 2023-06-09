import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { checkLogin } from '../../helper'

export default function Layout() {
  // const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!checkLogin()) {
    return <Navigate to='/login' />
    // navigate('/login')
    // window.location.assign('/login')
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
