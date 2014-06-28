$(function(){
    
    var view = {};
    
    var template = $("#template").html();
    Mustache.parse(template);
    
    // AJAX call to our API
    $.getJSON("http://github.wikunia.de/brackets_stats.php?output=json", function(data){
        view = data;
        var rendered = Mustache.render(template, data);
        $('#content').html(rendered);
        
        // Jump to Hash value if set
        if(location.hash !== "#" || location.hash !== ""){
            window.location.href = location.hash;
        }
    });
    
    
    // Toggle only the last few updates with all updates in the table
    $("body").on("click", "tbody", function(e){
        $(this).toggleClass("shortTable");
    });
    
    
})