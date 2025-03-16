'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import chatbotIcon from '@/images/chatbot.png'

function ChatBot() {

    const [isOpen, setIsOpen] = useState<Boolean>(false)

    return (
        <div className='fixed bottom-4 right-4 z-20'>
            {isOpen ? (
                <div className='relative w-[25vw] h-[50vh] bg-white'>
                    <p className='text-lg absolute top-2 right-2 text-white z-50 cursor-pointer hover:bg-gray-400/25 px-2 py-0.5 rounded-md' onClick={() => setIsOpen(false)}>X</p>
                    <iframe src='https://chatty-chatbot-creator-ekuzlq2nk-parkerarchibalds-projects.vercel.app/chatbot/11' title='chatbot' className='w-full h-full ' ></iframe>
                    {/* <iframe src='http://localhost:3001/chatbot/11' title='chatbot' className='w-full h-full'></iframe> */}
                </div>
            ) : (
                <div className='text-black hover:cursor-pointer' onClick={() => setIsOpen(true)}>
                    <Image src={chatbotIcon} alt='' width={100} height={100} className='size-16' />
                </div>
            )}
        </div>
    )
}

export default ChatBot
