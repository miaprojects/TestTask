$(document).ready(function() {
    $('a#open').click(function(event) {
        event.preventDefault(); // выкл стaндaртную рoль элементa
        $('#overlay').fadeIn(400, function() {
            $('#unblock__form')
            .css('display', 'block')
            .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('.close, #overlay').click(function(){
        $('#unblock__form').animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            })
        ;
    });

});

if (window.matchMedia('(max-width: 730px)').matches) {
    function cutText() {
        var text = document.getElementById('msg_text').textContent,
            new_text = document.getElementById('msg_text').getElementsByTagName('i')[0],
            size = 250;
            if (text.length > size) {
                text = text.slice(0, size) + "...";
                new_text.textContent = text;
            }
    }
    cutText();
}


