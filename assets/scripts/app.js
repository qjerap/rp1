
let wp = document.querySelectorAll('.wp');
let bird = document.querySelector('.bird');
let burger = document.querySelector('.burger');








wp.forEach(function(w){
    let waypoint = new Waypoint({
        element: w,
        handler: function(direction){
            if(direction === 'down'){  
                w.classList.add('slidedown')
            }    
        },
        offset: '85%'
    })
})

let waypoint = new Waypoint({
    element: bird,
    handler: function(direction){
        if(direction === 'down'){  
            bird.classList.add('birdAnimation')
        }    
    },
    offset: '90%'
});

