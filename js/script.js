$(function(){
    
    var view = {};
    
    var templateText = $("#template").html();
    var template = Handlebars.compile(templateText);
    
    // AJAX call to our API
    $.getJSON("http://github.wikunia.de/brackets_stats.php?output=json", function(data){
        view = data;
        var rendered = template(data);
        $('#content').html(rendered);
        
        // Jump to Hash value if set
        if(location.hash !== ""){
            window.location.href = location.hash;
        }
    });
    
    
    // Toggle only the last few updates with all updates in the table
    $("body").on("click", "tbody", function(e){
        $(this).toggleClass("shortTable");
    });
    
    
    // Handlebars helper for pretty dates
    Handlebars.registerHelper('pretty', function(date) {
        return new Date(date).toLocaleDateString();
    });
    
    
    // Tips and Tricks section
    $("#tipstrickslink").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $("#tipstricks").toggleClass("hidden");
    });
    
    
})