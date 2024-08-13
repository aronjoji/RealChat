import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-grow flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<Sidebar />
				<MessageContainer />
			</div>
			<footer className='mt-4 mb-2 text-center'>
				<a href="https://aronjoji.online/" target='blank' className='text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300'>
					Made by Aron Joji
				</a>
			</footer>
		</div>
	);
};

export default Home;