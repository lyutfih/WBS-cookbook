function likeRecipe(target){
  if(!target.classList.contains('active')){
      const likeAnimation = [
          { transform: "translatey(0px)" },
          { transform: "translatey(-8px) scale(200)", opacity: 0.5 },
        ];
      
      const likeTiming = {
          duration: 500,
          iterations: 1,
        };
  target.animate(likeAnimation, likeTiming);
  target.classList.toggle('active');

  target.style.zIndex = "9999";
      
  target.animate(likeAnimation, likeTiming).onfinish = () => {
      target.style.zIndex = "auto";
      target.classList.add('active');
  };
  
 }
 else {
  target.classList.remove('active');
 }
} 

function bookmarkRecipe(target){
   target.classList.toggle('active');
}