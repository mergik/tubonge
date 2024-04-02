import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);

      const senderName = selectedConversation?.fullName;
      // toast notification
      toast(`${senderName} sent you a message!`,
      {
        icon: '🆕',
        duration: 5000, // time in milliseconds
        style: {
          borderRadius: '6px',
          background: '#2e333d',
          color: '#fff',
        },
      });
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
