import { Link } from "react-router-dom"

const Landing = () => {

    return(
    <div className='rounded-sm p-4 m-4 bg-white'>
        <h1 className='grid justify-items-center text-4xl pt-2 m-6'>Plant Keeper</h1>
        
        <div className='grid grid-flow-col justify-items-start'>
            <div className='pl-6 m-4'>
                <img src='images\plantImages\logo.png' alt='Plant Keeper Logo' className='pl-3 ml-6 w-45 h-40 rounded-full'></img>
            </div>

            <div className='bg-green-500 bg-opacity-75 rounded-sm p-6 m-6 grid grid-flow-col'>
                <button className='rounded-sm bg-gray-200 pr-6 pl-5 m-6 hover:bg-blue-400'><Link to='/register'>Register</Link></button>                
                <button className='rounded-sm bg-gray-200 pr-6 pl-5 m-6 hover:bg-blue-400'><Link to='/login'>Login</Link></button>
            </div>
        </div>

        <div className='bg-white'>
            <h2 className='grid justify-items-center pt-5 m-5 text-4xl'>What is Plant-Keeper?</h2>
            <p className='grid justify-items-center p-5 m-2 text-xl'>Plant Keeper is an application that can help your
            keep track of your plants! Add your plants, give us some information
            about them, and sit back and let us do the tracking!  Make plant friends,
            share pictures of your plants, and see other's plants!
            </p>
        </div>
    </div>
  );
}

export default Landing;