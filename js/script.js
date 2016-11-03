$(document).ready(function () {
    /*$("#content *").css('transition', '0s');
     $("#main, #promo, #best, #products").addClass('anim');
     setTimeout(function() {
     $("#content *").css('transition', '0.2s cubic-bezier(0.55, 0, 0.1, 1);');
     }, 200);*/
    load();
});
/*$.get("http://95.85.2.42:1488/dishes", function(data){
 alert("Data Loaded: " + data[1]["description"]);
 dataArray = data;
 });*/


/*function loadTemplate(template) {
 //unload();
 setTimeout(function(){ $("#content *").fadeOut(200)}, 600);
 setTimeout(function(){ $("#content *").fadeIn(200)}, 800);
 setTimeout(function(){
 //$( "#main" ).load( "partials/" + template );
 load();
 //$(".anim > *").css("transform", "scale(1) !important");
 }, 1000);
 //setTimeout(function(){ $("#content *").fadeOut(200)}, 600);
 setTimeout(function(){
 $( "#main" ).load( "partials/" + template );
 //$(".anim > *").css("transform", "scale(1) !important");
 }, 800);
 load();
 }*/
var cartIds = [];
var cartQty = [];
function addToCart(id) {
    pushToCart(id);
    loadCart();
    sumCartItems();
    //!cartArray.push(id); {name:id["name"], price:}
    //console.log(id + " product added to cart")
}
function sumCartItems() {
    var sum = 0;
    for(var i = 0; i<cartQty.length; i++)
        sum+=cartQty[i];
    $("#header").append("<label id='counter'><p></p></label>");
    $("#counter > p").text(sum);
}
function loadCart() {
    clearCart();
    if (cartIds[0] != undefined)
        $(".cart-ul").append("<a class='clear-cart' onclick='clearCartData();'>Очистить корзину</a><div class='clearfix'></div>");
    var data = getData();
    var iData;
    for (var i = 0; i < cartIds.length; i++) {
        /*add = {quantity : cartQty[i]};
        iData = data[cartIds[i]];
        iData.push(add);*/
        iData = {
            name : data[cartIds[i]]["name"],
            price : data[cartIds[i]]["price"],
            quantity : cartQty[i]
        };
        $(".cart-ul").prepend(getTemplate("cartItem.html", iData));
    }
}
function pushToCart(id) {
    if (cartIds.indexOf(id)!=-1) {
        cartQty[cartIds.indexOf(id)]++;
    }
    else {
        cartIds.push(id);
        cartQty.push(1);
    }
    console.log(cartIds, cartQty);
}
function contain(array, variable) {
    var bool = false;
    for(var i = 0; i<array.length; i++){
        if(array[i] == variable) {
            bool = true;
            break;
        }
    }
    return bool;
}
function clearCart() {
    $(".cart-li").remove();
    $(".clear-cart").remove();
    $(".clearfix").remove();
    $("#counter").remove();
}
function clearCartData() {
    cartIds = [];
    cartQty = [];
    loadCart();
}
function getData() {
    var dataArray = undefined;
    $.ajax({
        url: "http://95.85.2.42:1488/dishes",
        async: false,
        success: function (data) {
            dataArray = data;
        }
    });
    return dataArray;
}
function getTemplate(template, data) {
    var code = getTemplateCode(template);
    if (data === undefined) {
        return code;
    }
    else {
        return replaceWithData(code, data);
    }
}
function setTemplateIn(template, inside, data) {
    return undefined;
}
function itemCode(id) {
    var itemContent = getTemplateCode("item.html");
    return replaceWithData(itemContent, getData()[id]);
}
function replaceWithData(content, data) {
    for (var key in data) {
        content = content.replace(new RegExp("{" + key + "}", 'g'), data[key]);
    }
    return content;
}
var loadItems = function (sortBy) {
    removeItems();
    var id;
    var data = getData();
    if (sortBy === undefined) {
        for (id = 0; data[id] != undefined; id++)
            $("#main").append(getTemplate("item.html", getData()[id]));
    }
    else {
        for (id = 0; data[id] != undefined; id++) {
            if (data[id]["category"] == sortBy)
                $("#main").append(getTemplate("item.html", getData()[id]));
        }
    }
};
function removeItems() {
    $(".product").remove();
}
function replace(str, forFind, forReplace) {
    return str.replace(new RegExp(forFind, 'g'), forReplace);
}
function getTemplateCode(template) {
    var code = undefined;
    $.ajax({
        url: "partials/" + template,
        async: false,
        success: function (data) {
            code = data;
        }
    });
    return code;
}
function loadTemplate(template, callback) {
    unload();
    setTimeout(function () {
        $("#content *").fadeOut(200)
    }, 200);
    setTimeout(function () {
        $("#content *").fadeIn(200)
    }, 400);
    setTimeout(function () {
        $("#main").load("partials/" + template, function () {
            if (callback != undefined) callback();
            load();
        });
    }, 400);
}

function preloadTemplate(template, callback) {
    //unload();
    $("#main").load("partials/" + template, function () {
        if (callback != undefined) callback();
        load();
    });
}

function link(link) {
    unload();
    setTimeout(function () {
        $("#content *").fadeOut(200)
    }, 200);
    setTimeout(function () {
        location.href = link;
    }, 300);
}

//▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮ █

function load() {
    $(function ($) {
        animate('.anim', 0);
        /*animate('.p1',0);
         animate('.p2',360);
         animate('.p3',360+250);
         animate('.p4',360+250+90);*/
    });
}

function unload() {
    $(function ($) {
        $("#category").removeClass('animated');
        $("header").addClass('shadow-2');
        setTimeout(function () {
            $("#category").removeClass('animate');
            $("#content").css('padding-top', '84px');
        }, 200);
        t = true;
        unanimate('.anim', 0);
        /*unanimate('.p1',0);
         unanimate('.p2',360);
         unanimate('.p3',360+250);
         unanimate('.p4',360+250+90);*/
    });
}

function unanimate(cont, top) {
    $(function ($) {
        $(".anim > *").css("transform", "scale(1)");
        var speed = 5000;
        var container = $(cont);
        container.each(function () {
            var elements = $(this).children();
            elements.each(function () {
                var elementOffset = $(this).offset();
                var offset = elementOffset.left * 0.8 + elementOffset.top + top;
                var delay = parseFloat(offset / speed).toFixed(2);
                $(this)
                    .css("animation-delay", delay + 's')
                    .css("-webkit-animation-delay", delay + 's')
                    .css("-o-animation-delay", delay + 's')
                    .removeClass('animated')
                    .addClass('unanimated');
            });
        });
    });
}
function animate(cont, top) {
    $(function ($) {
        var speed = 3000;
        var container = $(cont);
        container.each(function () {
            var elements = $(this).children();
            elements.each(function () {
                var elementOffset = $(this).offset();
                var offset = elementOffset.left * 0.8 + elementOffset.top + top;
                var delay = parseFloat(offset / speed).toFixed(2);
                $(this)
                    .css("animation-delay", delay + 's')
                    .css("-webkit-animation-delay", delay + 's')
                    .css("-o-animation-delay", delay + 's')
                    .removeClass('unanimated')
                    .addClass('animated');
            });
        });

    });
}

$("#cart, #cartcard, #counter").hover(function () {
        $("#search").addClass('left');
        $("#cartcard, #cart").addClass('animated');
        $("#cart").removeClass('shadow-2');
    },
    function () {
        $("#search").removeClass('left');
        $("#cartcard, #cart").removeClass('animated');
        $("#cart").addClass('shadow-2');
    });

$("#search").hover(function () {
        $("#search").addClass('animated').removeClass('shadow-2');
    },
    function () {
        $("#search").removeClass('animated').addClass('shadow-2');
    });

$("#bday").hover(function () {
        $(".top").addClass('animate');
        $(".bottom").addClass('animate');
        $(".imgbd").addClass('animate');
    },
    function () {
        $(".top").removeClass('animate');
        $(".bottom").removeClass('animate');
        $(".imgbd").removeClass('animate');
    });
var t = true;
$("#cat").click(function () {

    if (t === true) {
        $("#category").addClass('animate');
        $("#content").css('padding-top', '136px');
        setTimeout(function () {
            $("#category").addClass('animated');
            $("header").removeClass('shadow-2');
        }, 200);
        t = false;
    }
    else if (t === false) {
        $("#category").removeClass('animated');
        $("header").addClass('shadow-2');
        setTimeout(function () {
            $("#category").removeClass('animate');
            $("#content").css('padding-top', '84px');
        }, 200);
        t = true;
    }
});

$(function ($) {
    $(document).mouseup(function (e) {
        var div = $("header, #category");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $("#category").removeClass('animated');
            $("header").addClass('shadow-2');
            setTimeout(function () {
                $("#category").removeClass('animate');
                $("#content").css('padding-top', '84px');
            }, 200);
            t = true;
        }
    });
});


$(".product div").hover(function () {
        $(this).find(".bottomit").addClass('animate');
        $(this).find(".imgit").addClass('animate');
    },
    function () {
        $(this).find(".bottomit").removeClass('animate');
        $(this).find(".imgit").removeClass('animate');
    });

function sayHi() {
    alert("Hi!");
}