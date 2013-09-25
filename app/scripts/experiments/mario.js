'use strict';

$(function () {
    var LEFT = 'LEFT',
        UP = 'UP',
        RIGHT = 'RIGHT',
        DOWN = 'DOWN',
        KEYCODES = {
            37: LEFT,
            38: UP,
            39: RIGHT,
            40: DOWN
        },
        pressedKeys = {
            "LEFT": false,
            "UP": false,
            "RIGHT": false,
            "DOWN": false
        },
        keyEffects = {
            "LEFT": function (item) {
                item.css('left', '-=1');
                console.log(item);
            },
            "UP": function (item) {
                item.css({top: '-=1'});
            },
            "RIGHT": function (item) {
                item.css({left: '+=1'});
            },
            "DOWN": function (item) {
                item.css({top: '+=1'});
            }
        },
        player = $('.player'),
        boxes = $('.box');

    $(document).on('keydown keyup', function (e) {
        if (KEYCODES[e.keyCode]) {
            pressedKeys[KEYCODES[e.keyCode]] = (e.type === 'keydown');
        }

        console.log(pressedKeys);
    });

    var animation = function (timestamp) {
        var key;

        for (key in keyEffects) {
            if (keyEffects.hasOwnProperty(key) && pressedKeys[key]) {
                keyEffects[key](player);
            }
        }

        window.requestAnimationFrame(animation);
    };

    window.requestAnimationFrame(animation);
});