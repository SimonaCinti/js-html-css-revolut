$(document).ready(function(){

    // Ref
    var dropLink = $('.with-dropdown > a');
    var dropMenu = $('.with-dropdown > .dropdown-menu');

    // Show Hide Toggle Menu

    dropLink.click( function (){

        var actualMenu = $(this).next('.dropdown-menu');
        dropMenu.not(actualMenu).hide();
        actualMenu.toggle();
        
    });

}); // <--- end doc ready