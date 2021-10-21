import { useEffect } from "react"
import { useUtterances } from "../../hooks/useUtterances";

const commentNodeId = 'comments';

export function Comments() {

    useUtterances(commentNodeId);


    return <div id={commentNodeId} />;
}