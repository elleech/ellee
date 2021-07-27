$(function () {
    // Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // initial nav-item
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
        
        if (!window.onscroll) {
            $('html, body, main').stop(true, true).animate({duration:50, scrollTop:0});
        }

        var tag = $(this).attr('href');
        switch (tag) {
            case '#':
                $('.panel').not('#home').stop(true, false).slideUp(100);
                $('#home').stop(true, false).slideDown(200);
                break;
            case '#project':
                $('.panel').not('#project').stop(true, false).slideUp(100);
                $('#project').stop(true, false).slideDown(200);
                break;
            case '#skill':
                $('.panel').not('#skill').stop(true, false).slideUp(100);
                $('#skill').stop(true, false).slideDown(200);
                break;
            default:
                break;
        }
    });
});