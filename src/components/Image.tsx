 import heroMobile from '../assets/hero-mobile.jpg'
 import heroDesktop from '../assets/hero-desktop.jpg'


function Image() {
  return (
    <div className='lg:row-span-2 lg:h-full'>
        <picture>
            <source media="(min-width:1024px )" srcSet={heroDesktop} />
            <img src={heroMobile} alt="" className='block w-full h-full' />
        </picture>
    </div>
  )
}

export default Image