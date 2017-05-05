// ==UserScript==
// @name         Are you sure?
// @namespace    https://github.com/bripc
// @version      0.1
// @description  Block time wasting sites.
// @author       B.P. Cole
// @include      https://www.facebook.com/
// @include      https://www.tumblr.com/dashboard
// @include      http://imgur.com/
// @include      https://www.netflix.com/browse
// @include      https://www.youtube.com/
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // hide all content
    $('body div').css('opacity', '0');

    // ask if content should be shown
    $('body').append('<div id="are_you_sure_bripc"></div>');
    $('#are_you_sure_bripc').css({
        'display': 'block',
        'position': 'absolute',
        'top': '2%',
        'left': 0,
        'right': 0,
        'margin': '0 auto',
        'background-color': 'white',
        'text-align': 'center',
        'width': '50%',
        'color': 'black',
        'padding': '20px'
    });
    $('#are_you_sure_bripc').append('<h2>Are you sure you want to keep using this time wasting site?</h2><input id="are_you_sure_answer_bripc" type="text"><button>Submit</button>');
    $('#are_you_sure_bripc h2').css('color', 'black');
    $('#are_you_sure_bripc button').on('click', function () {
        // show content if they give the right answer
        if ($('#are_you_sure_answer_bripc').val() === 'Yes I Really Really Do') {
            $('body div').css('opacity', '1');
            $('#are_you_sure_bripc').remove();
        }
    });
})();