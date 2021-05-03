$(function () {
    var hash = window.location.hash;
    if (hash) {
        $('.panel').not(hash).hide();
        switch (hash.substring(1)) {
            case 'project':
                $('.nav-link:contains("Projects")').css('color', 'white');
                break;
            case 'education':
                $('.nav-link:contains("Education")').css('color', 'white');
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
                $('.panel').not('#home').stop(true, true).slideUp(100);
                $('#home').stop(true, true).slideDown(200);
                break;
            case '#project':
                $('.panel').not('#project').stop(true, true).slideUp(100);
                $('#project').stop(true, true).slideDown(200);
                break;
            case '#education':
                $('.panel').not('#education').stop(true, true).slideUp(100);
                $('#education').stop(true, true).slideDown(200);
                break;
            case '#love':
                $('.panel').not('#love').stop(true, true).slideUp(100);
                $('#love').stop(true, true).slideDown(200);
                break;
            default:
                break;
        }
    });
});