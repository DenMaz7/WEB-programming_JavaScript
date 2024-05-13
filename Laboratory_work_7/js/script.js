// document.addEventListener("DOMContentLoaded", 
//     function(event) {
        
//     }
// );



(function (global){

    const bh = {};

    const homeHtml = "snippets/home-snippets.html";
    const allCategoriesUrl = "data/categories.json";
    //const categoriesTitleHtml = "snippets/home-snippets.html";
    const categoryHtml = "snippets/category-snippets.html";



    const insertHtml = function (selector, html) {
        const targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    const showLoading = function (selector) {
        let html = "<div class='text-center'>";
        html += "<img src='../images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    }

    const insertProoerty = function (string, propName, propValue) {
        const propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g", propValue));
        return string;
    }

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


    bh.loadCatalogCategories = function () {
        showLoading("#main");

        $ajaxifyJS.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHTML);
    };


    function buildAndShowCategoriesHTML (categories) {
        $ajaxifyJS.sendGetRequest(
            categoryHtml,
            function (categoryHtml) {
                const categoriesViewHtml = buildCategoriesViewHtml(categories, categoryHtml);
                insertHtml("#main", categoriesViewHtml);
            },
            false);
    }


    function buildCategoriesViewHtml (categories, categoryHtml) {
        
        let finalHtml = "<div class='catalog'>";

        for (let i = 0; i < categories.length; i++) {
            let html = categoryHtml;
            const full_name = "" + categories[i].full_name;
            const short_name = categories[i].short_name;
            html = insertHtml(html, full_name);
            html = insertHtml(html, short_name);
            finalHtml += html;
        }

        finalHtml += "</div>";
        return finalHtml;
    }

    global.$bh = bh;

})(window)

