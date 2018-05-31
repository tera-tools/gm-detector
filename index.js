module.exports = function GmDetector(dispatch) {

	dispatch.hook('S_SPAWN_USER', 13, event => {
        if (event.gm) {
            let message = '[GM] ' + event.name + ' Detected!';
            if (event.gmInvisible) message += ' (Invisible)';           
            
            // send messages to client
            dispatch.toClient('S_CHAT', 1, {
                channel: 7,
                authorName: '',
                message: message
            }); 
            
            dispatch.toClient('S_DUNGEON_EVENT_MESSAGE', 1, {
                unk1: 42, // 42 Blue Shiny Text, 31 Normal Text
                unk2: 0,
                unk3: 27,
                message: message
            }); 
            
            // show hidden GMs?
            event.gmInvisible = false;
            return true;
        }
    });
    
}