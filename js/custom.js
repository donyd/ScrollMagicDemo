
$(document).ready(function(){
    // Create a scroll container
    var controller = new ScrollMagic.Controller();

    // Create a scene for first trigger and set properties via an object
    var sceneOne = new ScrollMagic.Scene({
        duration: 500
    }).setPin('#triggerOne');


    // Create a Scene for second trigger and set properties via an object
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#triggerTwo',
        duration: 460
    }).setPin('#triggerTwo');

    // Add scenes to controller
    controller.addScene([
        sceneOne,
        sceneTwo
    ]);


});