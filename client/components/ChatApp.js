import React, {useState, useEffect} from 'react';
import { ChatEngine } from 'react-chat-engine';
import {getUsers} from './../store'
import {connect} from 'react-redux'

//import ChatFeed from './ChatFeed.jsx';




const ChatApp = (props) => {
  //const backendUsers = props.users.slice(0, 5)
  //console.log(backendUsers)
  //console.log(props)

  return (
    <ChatEngine
        height= "87vh"
        width="80vw"
        projectID="b1b55481-146d-4d7d-9cf1-d9f875e22b42"
        userName={props.auth.username}
        userSecret="123"
    />
  )
}

/*
const ChatApp = () => {
	return (
		<ChatEngine
			projectID='b1b55481-146d-4d7d-9cf1-d9f875e22b42'
			userName='cody'
			userSecret='123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}
*/
const mapState = (state) => {
  return state;
};

const mapDispatch = {
  getUsers,
};
export default connect(mapState, mapDispatch)(ChatApp);


/* code from streamchat 
import React from 'react'; 
import { StreamChat } from 'stream-chat'; 
import { 
  Chat, 
  Channel, 
  ChannelHeader, 
  ChannelList, 
  InfiniteScrollPaginator, 
  MessageInput, 
  MessageInputFlat, 
  MessageList, 
  MessageTeam, 
  Thread, 
  Window, 
} from 'stream-chat-react'; 

 
const apiKey = '3xvm2a95mryn'; 
const userId = '1144234'; 
const userToken = 'aw2h95f6wmqcj6sqbhcy7m472nwha4pdynf6kw48gcdnyh6bf2eqamhn4fw84kyz' 
 
const filters = { type: 'messaging' }; 
const sort = { last_message_at: -1 }; 
const theme = 'messaging dark'; 
 
const Paginator = (props) => <InfiniteScrollPaginator threshold={300} {...props} />; 
 
const chatClient = StreamChat.getInstance(apiKey); 
 
chatClient.connectUser({ id: userId }, userToken); 
 
const ChatApp = () => ( 
  <Chat client={chatClient} theme={theme}> 
    <ChannelList filters={filters} sort={sort} Paginator={Paginator} /> 
    <Channel> 
      <Window> 
        <ChannelHeader /> 
        <MessageList Message={MessageTeam} /> 
        <MessageInput Input={MessageInputFlat} /> 
      </Window> 
      <Thread /> 
    </Channel> 
  </Chat> 
); 
 
export default ChatApp;*/
