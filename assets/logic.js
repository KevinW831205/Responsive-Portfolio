$(document).ready(function() {
    $('.portfolioTitle').bind("mouseover", function(){
        $(this).parent().children(".portfolioImages").css("opacity",0.5)

        $(this).bind("mouseout", function(){
            $(this).parent().children(".portfolioImages").css("opacity",1)
        })    
    })    
})
