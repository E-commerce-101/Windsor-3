import Footer from "./Footer"


const MyAccount = () =>{
    return(
        <>
        <div className="">
            <h2 className="text-center uppercase text-5xl font-bold">My Account </h2>

        </div>
        <p className="block my-4 mx-0 mt-0 text-xs box-border font-poppins font-normal text-base leading-6"></p>
        <div className="grid grid-cols-2 gap-20  ">
            <div className= " ml-12">
                <h2 className="font-poppins font-bold text-4xl tracking-tighter antialiased leading-tight my-10">Sign In to Your Account</h2>
                <p className="font-poppins font-normal text-base leading-6">
                Hey there gorgeous!
                Welcome to MJAY.com!
                If you've already created an account, just sign in below!</p>
                <form action="" >
                    <div className="">
                        <label htmlFor="customer email" className="cursor-pointer block text-base text-black font-poppins font-normal leading-6 mb-5 min-h-6 text-center touch-manipulation outline-none box-border antialiased text-size-auto mt-3" >Email </label>
                    </div>
                    <div className="relative w-full box-border block text-center">
                        <input type="Customer Email" placeholder="Email" className="border border-black rounded-none w-full antialiased text-size-auto text-sm h-9 leading-9 px-2 text-gray-700 bg-white font-poppins font-normal text-none border-opacity-100 touch-manipulation outline-none overflow-visible"/>

                    </div>
                    <div className="">
                    <label htmlFor="customer email" className="cursor-pointer block text-base text-black font-poppins font-normal leading-6 mb-5 min-h-6 text-center touch-manipulation outline-none box-border antialiased text-size-auto mt-3" >Password </label>
                    </div>
                    <div className="">
                    <input type="Customer Email" placeholder="Password" className="border border-black rounded-none w-full antialiased text-size-auto text-sm h-9 leading-9 px-2 text-gray-700 bg-white font-poppins font-normal text-none border-opacity-100 touch-manipulation outline-none overflow-visible"/>

                    </div>
                    <div className="flex items-center justify-center">
                    <div className="cursor-pointer line-height-38px border border-black min-w-200px text-sm appearance-none inline-block whitespace-nowrap text-center align-middle leading-42px rounded-none font-poppins font-bold bg-black text-white mt-6">
                        <button className="writing-horizontal-tb  m-0 pb-2 px-20 select-none box-border overflow-visible text-center py-2   uppercase">
                            Sign In 
                        </button>

                       

                    </div>
                    <div className="mt-6  ">
                    <a href="Forgot your password" className=" text-underline underline text-under font-base ml-5 text-black hover:text-gray-800 cursor-pointer transition duration-250 ease-in-out font-normal">Forgot Your Password ?</a>
                    </div>
                    </div>
                </form>
            </div>
            <div>
                <div className="">
                <h2 className="font-poppins font-bold text-4xl tracking-tighter antialiased leading-tight my-10">Create Account</h2>
                </div>
                <div className="cursor-pointer line-height-38px border border-black min-w-200px text-sm appearance-none inline-block whitespace-nowrap text-center align-middle leading-42px rounded-none font-poppins font-bold bg-black text-white mt-6">
                    <button className="writing-horizontal-tb  m-0 pb-2 px-20 select-none box-border overflow-visible text-center py-2   uppercase">
                            Create Account
                    </button>
                </div>

            </div>

        </div>

        <div className="mt-36">
        <Footer />
        </div>

        </>
       
        
        

    )
}
export default MyAccount