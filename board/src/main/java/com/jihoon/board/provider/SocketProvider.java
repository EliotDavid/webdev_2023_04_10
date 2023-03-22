package com.jihoon.board.provider;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class SocketProvider extends TextWebSocketHandler {
    
    @Override
    public void afterConnectionEstablished(WebSocketSession webSocketSession) {
        System.out.println("Socket Connected!!");
        System.out.println(webSocketSession.toString());
    }

    @Override
    protected void handleTextMessage(WebSocketSession webSocketSession, TextMessage textMessage) {
        String messagePayload = textMessage.getPayload();
        System.out.println(messagePayload);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession webSocketSession, CloseStatus closeStatus) {
        System.out.println("Socket Closed!");
        System.out.println(webSocketSession.toString());
        System.out.println(closeStatus.toString());
    }

}
