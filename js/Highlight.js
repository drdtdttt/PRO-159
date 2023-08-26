AFRAME.registerComponent("comics-posters", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        const placesId = ["superman", "spiderman", "captain-aero", "outer-space"];
        if (placesId.includes(id)) {
          const placeContainer = document.querySelector("#poster-container");
          placeContainer.setAttribute("comics-posters", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#D76B30",
            opacity: 1,
          });
        }
    },
      
      
      
    
    handleMouseEnterEvents: function(){
        this.el.addEventListners("mouseenter", ()=> {
          constid=this.el.getAttribute("id");
          const posterId=[
          "superman",
          "spiderman",
          "captain-zero",
          "outer-space",
          ];
          if(posterId.includes(id)){
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
          });
          this.el.setAttribute("material", {color:"#1565c0"});
          }
        })
    },

    handleMouseLeaveEvents: function(){
        // Mouse Leave Events
        this.el.addEventListener("mouseleave", () => {
          const{selectedItemId}=this.data=this.data
          if(selectedItemId){
            const el=document.querySelector(`#${selectedItemId}`)
            const id= el.getAttribute("id")
            if(id === selectedItemId){
              el.setAttribute("material",{color:"#0077CC",opacity:1})
            }
    
          }
        })
        
      },
})