function likeRecipe(target){
    if(!target.classList.contains('active')){
        const likeAnimation = [
            { transform: "translatey(0px)" },
            { transform: "translatey(-8px) scale(200)" },
          ];
        
        const likeTiming = {
            duration: 500,
            iterations: 1,
          };
    target.animate(likeAnimation, likeTiming);
    }
    target.classList.toggle('active');
}

function bookmarkRecipe(target){
     target.classList.toggle('active');
}
