import MessageContainer from "../../components/messages/MessageContainer";
<<<<<<< HEAD
import useConversation from "../../zustand/useConversation";
=======
import Sidebar from "../../components/sidebar/Sidebar";
>>>>>>> 9c7b9ae70bb27ac481e19fec7dc69c5b166be593

const Home = () => {
	const { selectedConversation } = useConversation();

	return (
<<<<<<< HEAD
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
=======
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
>>>>>>> 9c7b9ae70bb27ac481e19fec7dc69c5b166be593
		</div>
	);
};
export default Home;
