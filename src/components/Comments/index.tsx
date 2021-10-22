import { useEffect } from "react"
import { useUtterances } from "../../hooks/useUtterances";

// const commentNodeId = 'comments'; 
//<Link /> mantendo o mesmo container de comentários

interface CommentsProps {
    commentNodeId: string;
}

export function Comments({ commentNodeId }: CommentsProps) {

    useUtterances(commentNodeId);


    return <div id={commentNodeId} />;
}