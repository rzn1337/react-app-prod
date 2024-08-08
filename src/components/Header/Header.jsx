import React from 'react'
import { Container, Logo, LogoutButton } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/authSlice'

function Header() {

  const authStatus = useSelector(state => state.auth.status)
  
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    }, {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    }, {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    }, {
      name: 'Posts',
      slug: '/all-posts',
      active: authStatus
    }, {
      name: 'Add Post',
      slug: '/add-posts',
      active: authStatus
    }
  ]

  return (
    <header className='py-3 shadow bg-black'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
              <Link to='/'>
                <Logo width='70px' />
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => (
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                  >{item.name}</button>
                </li>
              ) : null
            ))}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header