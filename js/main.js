var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
cat.setAttribute("src","http://www.indiewire.com/wp-content/uploads/2016/05/slender-man.48.0520PM.png?w=462");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "http://78.media.tumblr.com/408fbfeae2d8590512b9fc9cc6207090/tumblr_mr807bH7hh1st5lhmo1_1280.jpg");
});