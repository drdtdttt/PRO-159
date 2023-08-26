AFRAME .registerComponent("comic-posters", {
 schema:{
    selectedItemId:{default:"", type:"string"}
 },
 init: function(){
    this.handleMouseLeaveEvents();
    this.handleMouseClickEvents();
 },

 handleMouseClickEvents: function(){
 if(selectedItemId){
    fadeBackgroundEl.setAttribute("visible", true)
    fadeBackgroundEl.setAttribute("info-banner", {
    itemId: selectedItemId,
   });
   titleEl.setAttribute("visible", false)
   cursorEl.setAttribute("position", {x:0, y:0, z:  -1});
   cursorEl.setAttribute("geometry", {
    radiusInner: 0.3,
    radiusOuter:0.4,
   });
 } else {
    fadeBackgroundEl.setAttribute("visible", false)
    titleEl.setAttribute("visble", true)
    cursorEl.setAttribute("position", {x:0, y:0, z:-3})
    cursorEl.setAttribute("geometry", {
      radiusInner:0.8,
      radiusOuter:0.12,
    });
 } 

 },
  
 update: function(){
   const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
   c=fadeBackgroundEl.children;
    if(c.length > 0){
   
    var1;
   
   for(i=0; i <= c.length; i++){
    fadeBackgroundEl.removeChild(c[1])
   }
  } else{
    this.handleMouseClickEvents();
  }
 }

});