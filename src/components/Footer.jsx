import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
        <section className='footer-primary px-15 min-w-full p-2 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-5'>
    
        <div className='gap-5 flex flex-col text-center md:text-start md:w-1/3 '>
        <h1 className='text-2xl font-semibold '>Lilac Template</h1>
        <address className='text-lg text-wrap '>
            123 Example Road
            Minneapolis, MN
        </address>
        <p className='underline text-lg '>
            email@example.com
            (555) 555-5555
        </p>
        </div>
        <div className='flex flex-col  text-center gap-5 md:flex-row md:text-start'>
            <div className='flex flex-col gap-4'>
        <h2 className='font-semibold text-2xl'>Hours</h2>
        <p className='text-center text-lg md:text-start'>
            Monday - Friday <br />
            10am - 6pm
        </p>
        </div>
       <div className='flex flex-col gap-4'> 
        <h2 className='font-semibold text-2xl'>Find</h2>
        <ul className='flex flex-col items-center underline text-lg md:items-start '>
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
        </div>
        </div>
        </section>
        <section className='footer-secondary min-w-full gap-4 flex flex-col text-center p-2 pt-5 '>
            <ul className='underline text-lg flex flex-wrap gap-3 justify-center'>
                <li><a>Privacy & Cookies Policy</a></li>
                <li><a>Good Faith Estimate</a></li>
                <li><a>Website Terms & Conditions</a></li>
                <li><a>Disclaimer</a></li>
            </ul>
            <p className='text-lg  pb-5'><span className='footer-text '>Website Template Credits:</span> <a className='underline'>Go Bloom Creative</a></p>
            <p className='text-lg footer-text'>All Rights Reserved © 2024 Your Business Name Here, LLC. </p>
        </section>
    </footer>
  )
}

export default Footer
