module.exports = function GmDetector(mod) {

	mod.hook('S_SPAWN_USER', 15, event => {
    if (event.gm) {
      let message = '[GM] ' + event.name + ' Detected!';
      if (event.gmInvisible) message += ' (Invisible)';           
      
      // send messages to client
      mod.command.message(message);

      let msgObject = {
        message: text,
        type: 42, // 42 Blue Shiny Text, 31 Normal Text
        chat: 0, 
        channel: 27
      };      
      mod.send("S_DUNGEON_EVENT_MESSAGE", 2, msgObject);
      
      // show hidden GMs?
      event.gmInvisible = false;
      return true;
    }
  });
}