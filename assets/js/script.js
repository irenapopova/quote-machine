$(document).ready(function() {
    var quote;
    var author;
    getQuote(); // initial quote

    function getQuote() {
      var forismaticAPI = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

      $.getJSON(forismaticAPI, function(data) {
        quote = data.quoteText;
        author = data.quoteAuthor;
         $("#quote").text(data.quoteText);
         $("#author").text("-"+data.quoteAuthor);
      });
    }; // getQuote function

    $("#new-quote").on("click", function() {
        getQuote();
    });

    $("#twitter-share").on("click", function() {
        window.open("https://twitter.com/intent/tweet?text=" + quote + "-" + author + " @traveldev" + " https://goo.gl/CKSfrt");
    });

    $("#facebook-share").on("click", function() {
        window.open("https://www.facebook.com/sharer/sharer.php?u=https://github.com/irenapopova/random-quote-machine/");
    });
}); // docready
