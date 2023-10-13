import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {

    return <div style={{ height: "100vh" }}>
        <PrettyChatWindow
            projectId="d2392579-9b8a-4463-b557-caf18d9e24ba"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>;
};
export default ChatsPage;