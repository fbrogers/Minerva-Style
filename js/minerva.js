$(function(){ 
    //open external links and PDF files in new tabs
    $("a.external, a[href$='.pdf']").click(function(e){
        window.open(this.href);
        e.preventDefault();
    });
});