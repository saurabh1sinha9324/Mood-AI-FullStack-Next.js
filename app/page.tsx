import { auth } from '@clerk/nextjs';
import Link from 'next/link'


export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'
  return (
    <div>
      <div className="w-screen h-screen bg-black flex justify-center items-center text-white  ">
        <div className=' '>
          <h1 className="text-6xl mb-4">AI Powered Journal App</h1>
          <p className="text-2xl text-white/60 mb-4">This is thee best Journal App for tracking your life through the power of AI.</p>
          <div>
            <Link href={href}>
              <button className="bg-white/20 px-4 py-2 rounded-lg text-xl"> get started</button>
            </Link>
            
          </div>
          
        </div>
    </div>
    <div className=" bg-black flex justify-center  text-white">
      <h2>Saurabh Kumar </h2>
      <h2>| Contact: saurabh1sinha9324@gmail.com</h2>
    </div>
    </div>
  );
}
