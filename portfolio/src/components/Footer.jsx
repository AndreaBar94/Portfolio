import { Container, Link } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div className='sectionBox'>
            <Container className='text-center text-muted'>
                <p>Icons from <Link href='https://www.svgrepo.com/' underline='none'>SVGRepo.com</Link></p>
                <p>© 2023 Andrea Barocchi.</p>
                <Link underline='none' href='#about-section'>Back to top</Link>
            </Container>
        </div>
    )
}

export default Footer