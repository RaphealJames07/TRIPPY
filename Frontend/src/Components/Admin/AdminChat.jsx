const AdminChat = () => {
    return (
        <>
            <div className="AdminChatBody">
                <div className="AdminChatWrap">
                    <div className="AdminChatTop">
                        <div>Close</div>
                        <div>Pfp</div>
                        <div>John Doe</div>
                    </div>
                    <div className="AdminChatMid">
                        <div className="AdminChatMidWrap">
                            <div className="AdminChatMidA">Hello</div>
                            <div className="AdminChatMidB"> Hi</div>
                        </div>
                    </div>
                    <div className="AdminChatDown">
                      <div><input type="text" placeholder="write a message"/></div>
                      <button>send</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminChat;
