
$(document).ready(function() {
    console.log("App started...");
    
    // Set navbar item to active
    var page = window.location.href.substr(window.location.href.lastIndexOf("/"));
    console.log("Current page: " + page);
    
    $('nav li').each(function() {
        if($(this).find('a').attr('href') == page) {
            $(this).addClass('active');
            return false;
        }
    });
    
    // Manual sizing of the list images
    if(page == "/list") {
        var maxHeight = 0;
        $('.thumbnail img').each(function() {
            if($(this).height() > maxHeight) { 
                maxHeight = $(this).height(); 
            }
        });
        $('.thumbnail img').height(maxHeight);
    }
});