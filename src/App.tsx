import React from 'react'
import './App.css'
import { Layout } from './components/MainLayout'

const description = 'Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.'

const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex h-full w-full">
        <div className='bg-[#F4F9E2] w-3/4'>
          <div className='flex flex-col gap-y-[2rem] w-[34rem] mx-auto my-[3rem]'>
            <h3 className='text-[#62D0DF] text-2xl'>Thrivetalk</h3>
            <h1 className='text-[#22356F] text-5xl'>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
            <p>{description}</p>
            <div className='flex items-center justify-between px-[2rem]'>
              <div className='w-[10rem] bg-secondary text-white text-center py-[1rem] rounded-md cursor-pointer shadow
                hover:shadow-lg hover:scale-[1.01] active:shadow-inner active:scale-[1] transition-all duration-200'
              >WHO AM I</div>
              <p className='text-secondary w-[10rem] text-center'>WHAT DO I DO</p>
            </div>
          </div>

        </div>
        <div className='bg-sky-400 w-1/4'>
          хахахахах
        </div>
      </div>
    </Layout>
  )
}

export default App
