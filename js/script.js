$(document).ready(function(){

    // Ref
    var dropLink = $('.with-dropdown > a');
    var dropMenu = $('.with-dropdown > .dropdown-menu');

    // Show Hide Toggle Menu

    dropLink.click( function (){
        $(this).next('.dropdown-menu').toggle();
    });

}); // <--- end doc ready