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
var content = $("#main");
var cartIds = [];
var cartQty = [];

var loadOrderItems = function () {
    replaceInPageWithData({sum: priceOfItems()});
    var i;
    var iData;
    var data = getData();
    for (i = 0; i < cartIds.length; i++) {
        iData = {
            name: data[cartIds[i]]["name"],
            price: data[cartIds[i]]["price"],
            quantity: cartQty[i],
            cost: priceOfItem(i)
        };
        $(getTemplate("orderItem.html", iData)).insertAfter(".order-header");
    }
};
function addToCart(id) {
    pushToCart(id);
    loadCart();
    sumCartItems();
    //!cartArray.push(id); {name:id["name"], price:}
    //console.log(id + " product added to cart")
}
function sumCartItems() {
    var sum = 0;
    for (var i = 0; i < cartQty.length; i++)
        sum += cartQty[i];
    $("#header").append("<label id='counter'><p id='pcounter'></p></label>");
    $("#pcounter").text(sum);
    animateCart();
}
function priceOfItem(id) {
    return getData()[cartIds[id]]["price"] * cartQty[id];
}
function priceOfItems() {
    var sum = 0;
    for (var id = 0; id < cartIds.length; id++)
        sum += priceOfItem(id);
    return sum;
}
function loadCart() {
    clearCart();
    if (cartIds[0] != undefined)
        $(".cart-ul").append(getTemplate("cartFooter.html", {price: priceOfItems()}));
    var data = getData();
    var iData;
    for (var i = 0; i < cartIds.length; i++) {
        /*add = {quantity : cartQty[i]};
         iData = data[cartIds[i]];
         iData.push(add);*/
        iData = {
            name: data[cartIds[i]]["name"],
            price: data[cartIds[i]]["price"],
            quantity: cartQty[i]
        };
        $(".cart-ul").prepend(getTemplate("cartItem.html", iData));
    }
}
function pushToCart(id) {
    if (cartIds.indexOf(id) != -1) {
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
    for (var i = 0; i < array.length; i++) {
        if (array[i] == variable) {
            bool = true;
            break;
        }
    }
    return bool;
}
function clearCart() {
    $(".cart-li").remove();
    $(".cart-footer").remove();
    $("#counter").remove();
}
function clearCartData() {
    cartIds = [];
    cartQty = [];
    loadCart();
}
function getData() {
    var dataArray = undefined;
    /*$.ajax({
     url: "http://95.85.2.42:1488/dishes",
     async: false,
     success: function (data) {
     dataArray = data;
     }
     });*/
    dataArray = [
        {
            name: 'Хлеб',
            description: 'Хлеб: накати природу гамма-всплесков Хлеб: ласка морского конька Хлеб: апатичный допинг',
            category: 'вегетерианское',
            price: '5',
            src: './img/bread.png',
            link: '',
            id: 0
        },
        {
            name: 'Масло',
            description: 'Масло: мгновение такта Масло: бодрое олицетворение Масло: рождение морского конька',
            category: 'вегетерианское',
            price: '90',
            src: './img/butter.png',
            link: '',
            id: 1
        },
        {
            name: 'Курица',
            description: 'Курица: парадоксальное приближение Курица: рождение pH 5.5 Курица: добрая турбулентность',
            category: 'мясное',
            price: '180',
            src: './img/chicken.png',
            link: '',
            id: 2
        },
        {
            name: 'Яйца',
            description: 'Яйца: разрушь конфиденциальность Яйца: ласка северного сияния Яйца: нежность альфа-ритма',
            category: 'мясное',
            price: '60',
            src: './img/eggs.png',
            link: '',
            id: 3
        },
        {
            name: 'Рыба',
            description: 'Рыба: познай метафору Рыба: многоступенчатое качество Рыба: собери окно в Европу',
            category: 'мясное',
            price: '200',
            src: './img/fish.png',
            link: '',
            id: 4
        },
        {
            name: 'Фрукты',
            description: 'Фрукты: гравитационное укрепление',
            category: 'вегетерианское',
            price: '120',
            src: './img/fruits.png',
            link: '',
            id: 5
        },
        {
            name: 'Мёд',
            description: 'Мёд: закрась прямую речь Мёд: аромат гиперболоида',
            category: 'вегетерианское',
            price: '300',
            src: './img/honey.png',
            link: '',
            id: 6
        },
        {
            name: 'Джем',
            description: 'Джем: жахни ажитацию Джем: парадоксальное рвение',
            category: 'вегетерианское',
            price: '160',
            src: './img/jam.png',
            link: '',
            id: 7
        },
        {
            name: 'Сок',
            description: 'Сок: чувственность северного сияния',
            category: 'вегетерианское',
            price: '80',
            src: './img/juice.png',
            link: '',
            id: 8
        },
        {
            name: 'Мясо',
            description: 'Мясо: сбацай абракадабру',
            category: 'мясное',
            price: '220',
            src: './img/meat.png',
            link: '',
            id: 9
        },
        {
            name: 'Молоко',
            description: 'Молоко: аромат абзаца',
            category: 'вегетерианское',
            price: '70',
            src: './img/milk.png',
            link: '',
            id: 10
        },
        {
            name: 'Травка',
            description: 'Травка: забота аромата Травка: воткни в цезуру Травка: нервно-мутационное яблоко',
            category: 'вегетерианское',
            price: '8000',
            src: './img/salad.png',
            link: '',
            id: 11
        }
    ];
    return dataArray;
}
function getTemplate(template, data) {
    var code = getTemplateCodeNoAsync(template);
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
    var itemContent = getTemplateCodeNoAsync("item.html");
    return replaceWithData(itemContent, getData()[id]);
}
function replaceWithData(content, data) {
    for (var key in data) {
        if (data[key] === undefined)
            content = content.replace(new RegExp("{" + key + "}", 'g'), "");
        else
            content = content.replace(new RegExp("{" + key + "}", 'g'), data[key]);
    }
    return content;
}
var loadItems = function (sortBy) {
    removeItems();
    replaceInPageWithData({category: sortBy});
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
function previewItem(id) {
    loadTemplate('fullItem.html', function() {replaceInPageWithData(getData()[id])});
}
function replace(str, forFind, forReplace) {
    return str.replace(new RegExp(forFind, 'g'), forReplace);
}
function getTemplateCodeNoAsync(template) {
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
function getTemplateCode(template, callback) {
    $.ajax({
        url: "partials/" + template,
        success: function (data) {
            if (callback != undefined) callback(data);
        }
    });
}
function submitOrder(name,mail) {
    /*$.ajax({
        url: "partials/" + template,
        success: function (data) {
            if (callback != undefined) callback(data);
        }
    });*/
    var formData = $('form').serializeArray();
    $.post(
        "http://lod.misis.su/server.php",
        {
            cartIds:cartIds,
            cartQty:cartQty,
            name:formData["name"],
            mail:formData["mail"]
        },
        function () {
            $('.order-button > p').text("Ваш заказ принят");
        }
    );

}
function loadTemplate(template, callback) {
    unload();
    setTimeout(function () {
        content.fadeOut(200)
    }, 200);
    setTimeout(function () {
        content.fadeIn(200)
    }, 400);
    setTimeout(function () {
        content.load("partials/" + template, function () {
            if (callback != undefined) callback();
            load();
        });
    }, 400);
    //content.html(loadTemplate("partials/" + template));
}
function replaceInPageWithData(data) {
    content.html(replaceWithData(content.html(), data));
}

function preloadTemplate(template, callback) {
    //unload();
    content.load("partials/" + template, function () {
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
function animateCart() {
    $("#cart, #cartcard, #counter").hover(
        function () {
            $("#search").addClass('left');
            $("#cartcard, #cart").addClass('animated');
            $("#cart").removeClass('shadow-2');
        },
        function () {
            $("#search").removeClass('left');
            $("#cartcard, #cart").removeClass('animated');
            $("#cart").addClass('shadow-2');
        });
}


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