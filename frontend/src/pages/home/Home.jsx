import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const { selectedConversation } = useConversation();

	return (
		<div className='flex flex-col h-[100dvh] mx-auto w-full max-w-[1800px]'>
			<div className='flex-1 flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<div className={`${selectedConversation ? 'hidden sm:block' : 'block'} w-full sm:w-[450px]`}>
					<Sidebar />
				</div>

				<div className={`${!selectedConversation ? 'hidden sm:block' : 'block'} flex-1 min-w-[350px]`}>
					<MessageContainer />
				</div>
			</div>
			<footer className='mt-2 mb-2 text-center'>
				<a href="https://aronjoji.online/" target='blank' className='text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300'>
					Made by Aron Joji
				</a>
			</footer>
		</div>
	);
};

export default Home;