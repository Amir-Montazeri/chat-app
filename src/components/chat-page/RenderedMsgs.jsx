import TextRendering from './TextRendering';

const RenderedMsgs = ({ clientUsername, msgs }) => {
  console.log(msgs);
  return msgs.map(msg => {
    const msgFromClient = msg.from === clientUsername,
      renderingMethod = {
        'text': <TextRendering
          key={msg.id}
          fromClient={msgFromClient}
          from={msg.from} 
          text={msg.text}
          time={msg.time} 
          status={msg.status} 
        />
      }
    return renderingMethod[msg.method]
  })
}

export default RenderedMsgs;