$(window).on("load", function() {
    var internalHeaderBar = '<div id="ucfhb"><div id="ucfhb-inner"><div id="ucfhb-left"><div id="ucfhb-logo"><a href="https://www.ucf.edu">University of Central Florida</a></div></div><div id="ucfhb-right"><div id="ucfhb-search"><form action="https://search.ucf.edu/" name="ucfhb-search-form" id="ucfhb-search-form"><label for="ucfhb-search-field">Search UCF</label><input type="text" name="q" id="ucfhb-search-field" placeholder="Search UCF"><input type="submit" value="Search" id="ucfhb-search-submit"></form></div></div></div></div>';
    $('body').prepend(internalHeaderBar).after("a[href=\'#content\']:first");
});
