import { createContext, useContext, useState } from 'react';

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);

    const updateComments = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    return (
        <CommentsContext.Provider value={{ comments, updateComments }}>
            {children}
        </CommentsContext.Provider>
    );
};

export const useComments = () => useContext(CommentsContext);
