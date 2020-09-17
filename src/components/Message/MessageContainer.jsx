import React from 'react';
import Message from './Message';
import { disSendMessage, disMessageTypeTemp } from "./../../redux/dialogiesPagesReducer"
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messages: state.dialogiesPages.messages,
        chats: state.dialogiesPages.chats,
        dialogiesPages: state.dialogiesPages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        disSendMessage: () => {
            dispatch(disSendMessage())
        },
        disMessageTypeTemp: (entervalue) => {
            dispatch(disMessageTypeTemp(entervalue))
        }
    }
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)