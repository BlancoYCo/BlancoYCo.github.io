console.log("inicio")
const media = document.querySelector('video');
const sound = document.querySelector('.sound');

sound.addEventListener("click", () => {
  
    
   
    if (media.muted==false){
        media.muted =true;
    }else {
        media.muted =false;
    }


});
media.addEventListener("click", () => {
  
    
   
    if (media.muted==false){
        media.muted =true;
    }else {
        media.muted =false;
    }


});