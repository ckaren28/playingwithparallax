    $(function() {
        // Init Controller
        var scrollMagicController = new ScrollMagic.Controller();

        // Create Animation for 0.5s
        var tween = TweenMax.to('#animation', 0.5, {
            backgroundColor: 'rgb(255, 39, 46)',
            scale: 1,
            rotation: 360
        });
        // Create the Scene and trigger when visible with ScrollMagic
        var scene = new ScrollMagic.Scene({
            triggerElement: '#scene',
            offset: 150
        /* offset the trigger 150px below #scene's top */
        })
        .setTween(tween)
        .addTo(scrollMagicController);
                    });
