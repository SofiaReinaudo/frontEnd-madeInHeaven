import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { NavBar } from './NavBar/NavBar.jsx';

const socket = io('/')

export const ChatComponent = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on("mensaje", data => {
            console.log({ data });
        })

        return () => {
          socket.off("mensaje", receiveMessage);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = {
            body: message,
            from: 'Me',
        };
        // setMessages(state => [newMessage, ...state]);
        setMessage('');
        socket.emit('mensaje', newMessage.body);
    };

    return (
        <>  
            <NavBar />
            <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
                <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
                    <h1 className='text-2xl font-bold my-2'>Bienvenidos al chat de Made In Heaven</h1>
                    <input
                        name='message'
                        type='text'
                        placeholder='Write your message...'
                        onChange={(e) => setMessage(e.target.value)}
                        className='border-2 border-zinc-500 p-2 w-full text-black'
                        value={message}
                        autoFocus
                    />
                </form>
            </div>
        </>


    )
}