import Header from "./Header"
import Image from "./Image"
import Input from "./Input"

 

function BaseContent() {
  return (
    
    <section className="w-full max-w-xl mx-auto grid grid-cols-1 grid-rows-[auto_auto_auto] lg:max-w-none lg:max-h-screen lg:gap-10 lg:grid-cols-2 lg:grid-rows-[5em_1fr]">
        <Header/>
        <Image/>
        <div className="p-6 lg:px-16 lg:max-w-lg lg:mx-auto" >
            <div className="flex flex-col gap-5 items-center mb-7 lg:items-start">

            
            <h1 className="text-darkRed font-semibold text-5xl tracking-[10px] text-center uppercase lg:text-left"><span className="font-light text-desaturatedRed">We're</span> coming soon</h1>
            <p className="font-medium text-base text-desaturatedRed text-center lg:text-left">  Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>
            <Input/>
        </div>
    </section>
  )
}

export default BaseContent