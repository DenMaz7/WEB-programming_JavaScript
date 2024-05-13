// document.addEventListener("DOMContentLoaded", 
//     function(event) {
        
//     }
// );



(function (global){

    const bh = {};

    const homeHtml = "snippets/home-snippets.html";

    const insertHtml = function (selector, html) {
        const targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    // const showLoading = function (selector) {
    //     let html = "<div class='text-center'>";
    //     html += "<img src='../images/ajax-loader.gif'</div>";
    //     insertHtml(selector, html);
    // }

    document.addEventListener("DOMContentLoaded", function(event) {
        
        showLoading("#main");

        $ajaxifyJS.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("#main").innerHTML = responseText;
            },
            false
        );






    });



    global.$bh = bh;

})(window)

