$(function () {
    var hash = window.location.hash;
    if (hash) {
        $('.panel').not(hash).hide();
        switch (hash.substring(1)) {
            case 'project':
                $('.nav-link:contains("Projects")').css('color', 'white');
                break;
            case 'skill':
                $('.nav-link:contains("Skill")').css('color', 'white');
                break;
            case 'love':
                $('.nav-link:contains("Love")').css('color', 'white');
                break;
            default:
                break;
        }
    } else {
        $('.panel').not('#home').hide();
        $('.nav-link').first().css('color', 'white');
    }

    $('.nav-link').on('click', function() {
        $('.nav-link').css('color', '');
        $(this).css('color', 'white');
        var tag = $(this).attr('href');
        switch (tag) {
            case '#':
                $('.panel').not('#home').stop(true, false).slideUp(100, function() {$('html, body').animate({duration:100, scrollTop:0})});
                $('#home').stop(true, false).slideDown(200);
                break;
            case '#project':
                $('.panel').not('#project').stop(true, false).slideUp(100, function() {$('html, body').animate({duration:100, scrollTop:0})});
                $('#project').stop(true, false).slideDown(200);
                break;
            case '#skill':
                $('.panel').not('#skill').stop(true, false).slideUp(100, function() {$('html, body').animate({duration:100, scrollTop:0})});
                $('#skill').stop(true, false).slideDown(200);
                break;
            case '#love':
                $('.panel').not('#love').stop(true, false).slideUp(100, function() {$('html, body').animate({duration:100, scrollTop:0})});
                $('#love').stop(true, false).slideDown(200);
                break;
            default:
                break;
        }
    });
});