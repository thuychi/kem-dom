var WS = require('kem/ws/client');
var chat = new WS('ws://localhost:3000/chat');
var post = new WS('ws://localhost:3000/post');

chat.emit('chat', 'Chat - haha');
post.emit('chat', 'Post - other emit');