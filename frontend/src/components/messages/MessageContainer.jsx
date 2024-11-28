import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { IoArrowBack } from "react-icons/io5";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='w-full flex flex-col h-full'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className='bg-slate-500 px-6 py-4 mb-2 flex items-center'>
						<button 
							onClick={() => setSelectedConversation(null)}
							className='md:hidden mr-4 hover:bg-slate-600 p-2 rounded transition-colors'
						>
							<IoArrowBack size={20} />
						</button>
						<div className='flex items-center gap-3'>
							<div className='avatar'>
								<div className='w-10 rounded-full'>
									<img src={selectedConversation.profilePic} alt='user avatar' />
								</div>
							</div>
							<span className='font-bold text-gray-900 text-lg'>{selectedConversation.fullName}</span>
						</div>
					</div>
					<div className='flex-1 overflow-auto px-4'>
						<Messages />
					</div>
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full p-4'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p className='text-base sm:text-lg'>Welcome 👋 {authUser.fullName} ❄</p>
				<p className='text-sm sm:text-base'>Select a chat to start messaging</p>
				<TiMessages className='text-2xl sm:text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

