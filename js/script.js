$(function(){
    
    var view = {};
    
    var template = $("#template").html();
    Mustache.parse(template);
    
    $.getJSON("http://github.wikunia.de/brackets_stats.php?output=json", function(data){
        view = data;
        var rendered = Mustache.render(template, data);
        $('#content').html(rendered);
    })
    
    
})