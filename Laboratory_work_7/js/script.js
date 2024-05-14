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
    const catalogItemsUrl = "data/catalog/";
    const catalogItemsTitleHtml = "snippets/catalog-items-title.html";
    const catalogItemHtml = "snippets/catalog-item.html";


    const insertHtml = function (selector, html) {
        const targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    const showLoading = function (selector) {
        let html = "<div class='text-center'>";
        html += "<img src='../images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    }

    const insertProperty = function (string, propName, propValue) {
        const propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }

    const switchCatalogToActive = function () {
        
        let classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;

        classes = document.querySelector("#navCatalogButton").className;
        if (classes.indexOf("active") == -1) {
            classes += "active";
            document.querySelector("#navCatalogButton").className = classes;
        }
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

    bh.loadCatalogItems = function (categoryShort) {
        showLoading("#main");

        $ajaxifyJS.sendGetRequest(
            catalogItemsUrl + categoryShort + ".json",
            buildAndShowCatalogItemsHTML);
    };


    function buildAndShowCategoriesHTML (categories) {
        $ajaxifyJS.sendGetRequest(
            categoryHtml,
            function (categoryHtml) {
                switchCatalogToActive();
                
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
            html = insertProperty(html, "full_name", full_name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }

        finalHtml += "</div>";
        return finalHtml;
    }


    function buildAndShowCatalogItemsHTML (categoryCatalogItems) {
        $ajaxifyJS.sendGetRequest(
            catalogItemsTitleHtml,
            function (catalogItemsTitleHtml) {
                $ajaxifyJS.sendGetRequest(
                    catalogItemHtml,
                    function (catalogItemHtml) {
                        const catalogItemViewHtml = buildCatalogItemsViewHtml(categoryCatalogItems, catalogItemsTitleHtml, catalogItemHtml);
                        insertHtml("#main", catalogItemViewHtml);
                    },
                    false);
            },
            false);
    }


    function buildCatalogItemsViewHtml (categoryCatalogItems, catalogItemsTitleHtml, catalogItemHtml) {
        
        catalogItemsTitleHtml = insertProperty(catalogItemsTitleHtml, "full_name", categoryCatalogItems.category.full_name);

        let finalHtml = catalogItemsTitleHtml;
        finalHtml += "<div class='catalog'>";

        const catalogItems = categoryCatalogItems.catalog_items;
        const catShortName = categoryCatalogItems.category.short_name;

        for (let i = 0; i < catalogItems.length; i++) {
            
            let html = catalogItemHtml;
            html = insertProperty(html, "catShortName", catShortName);
            html = insertProperty(html, "short_name", catalogItems[i].short_name);
            html = insertProperty(html, "full_name", catalogItems[i].full_name);
            html = insertProperty(html, "author", catalogItems[i].author);
            html = insertProperty(html, "description", catalogItems[i].description);
            html = insertProperty(html, "price", catalogItems[i].price); 
            finalHtml += html;
        }

        finalHtml += "</div>";
        return finalHtml;
    }

    global.$bh = bh;

})(window)

