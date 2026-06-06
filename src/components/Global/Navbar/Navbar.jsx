import Logo from '@/components/Logo'
import Container from '@/components/Ui/Container'
import React from 'react'
import NavLinks from './NavLinks'



const Navbar = () => {
  return (
    <div className="py-3">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <NavLinks />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar