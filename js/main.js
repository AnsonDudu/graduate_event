$(window).load(function() {
var runPage;
runPage = new FullPage({
    id : 'pageContain',                            // id of contain
    slideTime : 800,                               // time of slide
    continuous : false,                            // create an infinite feel with no endpoints
    effect : {                                     // slide effect
            transform : {
                translate : 'Y',                   // 'X'|'Y'|'XY'|'none'
                scale : [.1, 1],                   // [scalefrom, scaleto]
                rotate : [270, 0]                      // [rotatefrom, rotateto]
            },
            opacity : [0, 1]                       // [opacityfrom, opacityto]
        },
    mode : 'wheel,touch,nav:navBar',               // mode of fullpage
    easing : 'ease' ,                              // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
    callback :
    function(){
        var freashBack =window.setInterval(function(){
                $(".dialogue").addClass("hide");
            },2000);
        $(".dialogue").removeClass("hide");
        $(".dialogue2").removeClass("hide");
        freashBack;
    }
});
});;


//

window.setTimeout(function(){
    $(".dialogue").removeClass("hide")
    $(".dialogue").addClass("animated tada");
    window.setTimeout(function(){
          $(".dialogue").addClass("hide")
    },3000)
}, 1000);