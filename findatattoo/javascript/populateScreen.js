const data = {
    "shops": [
        {
            "ref": "bankStreetTattoo",
            "name": "Bank Street Tattoo",
            "image": "../images/bankStreet.jpg",
            "about": "Fresh custom tattoo studio in the heart of Dundee offering high quality work at great prices, offering specialisation in numerous styles - catering to all",
            "openingTimes": "Tues-Sat  11am - 6pm",
            "priceRange": "££",
            "address": "19 Bank St, Dundee DD1 1RL"
        },
        {
            "ref": "sancturyTattoo",
            "name": "Sanctury Tattoo",
            "image": "../images/sancturyTattoo.jpg",
            "about": "Dundee based Tattoo studio.Artists: Jay Soos, Danielle Rose, Michalina Mju, and Stephen Kelly. Minimum charge is £50. Prices will be summed up by the size, detail & placement of the tattoo. Multiple sessions will be by an hourly rate of £80",
            "openingTimes": "Tues-Sat  11am - 6pm",
            "priceRange": "££",
            "address": "148 Nethergate, Dundee"
        },
        {
            "ref": "metalurgey",
            "name": "Metalurgey",
            "image": "../images/metalurgey.jpg",
            "about": "We have comfortable surroundings with separate private rooms for both tattooing, piercing and laser tattoo removal. Proudly stocking a wide range of luxury body jewellery",
            "openingTimes": "Mon-Sat  10am - 5pm",
            "priceRange": "££",
            "address": "40 Dock St, Dundee DD1 3DR"
        }
    ],
    "artists": [
        {
            "ref": "andy",
            "name": "Andy",
            "image": "../images/artists/andy.jpg",
            "about": "",
            "mainStyle": "Illistration",
            "shop": "Bank Street Tattoo",
            "shopRef": "bankStreetTattoo",
            "shopLink": "",
            "priceRange": "££",
            "insta": "@andy.mc_art",
            "instaLink": "https://www.instagram.com/andy.mc_art/",
            "facebook": "",
            "facebookLink": "",
            "website": "andymc.bigcartel.com",
            "websiteLink": "https://andymc.bigcartel.com/"
        },
        {
            "ref": "graham",
            "name": "Graham",
            "image": "../images/artists/graham.jpg",
            "about": "",
            "mainStyle": "Illistration",
            "shop": "Bank Street Tattoo",
            "shopRef": "bankStreetTattoo",
            "shopLink": "",
            "priceRange": "££",
            "insta": "@11____13",
            "instaLink": "https://www.instagram.com/11____13/",
            "facebook": "",
            "facebookLink": "",
            "website": "eleven13design.bigcartel.com",
            "websiteLink": "https://eleven13design.bigcartel.com/"
        }
    ]
}

function displayShops() {        
    let text = "";
    for (var i in data.shops) {
        // console.log(data.shops[i]);
        text += '<div class="container" style="padding-bottom: 15px;">'
        text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
        text += '<div class="col-md-auto">'
        text += '<img src="' + data.shops[i].image + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 200px; height: 200px;">'
        text += '</div><div class="col"><div>'

        shopUrl = "singleShop.html?ref=" + data.shops[i].ref;

        text += '<h2><b> <a href=' + shopUrl + '>' + data.shops[i].name + '</a></b></h2>'
        text += '<p>' + data.shops[i].about + '</p>'
        text += '<p><b>Opening Times:</b> ' + data.shops[i].openingTimes + '</p>'
        text += '<p><b>Price Range:</b> ' + data.shops[i].priceRange + '</p>'
        text += '<p><b>Address:</b> ' + data.shops[i].address + '</p>'
        text += '</div></div></div></div>'
    }
    document.getElementById("shops").innerHTML = text;
}

function displaySingleShop(shopRef) {
    const pos = getShopIndex(shopRef);

    if (pos == -1) {
        console.error("Shop Reference NOT FOUND");
        return;
    }

    let text = "";
    text += '<div class="container" style="padding-bottom: 15px;">'
    text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    text += '<div class="col-md-12">'
    text += '<img src="' + data.shops[pos].image + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 100%; height: auto; max-width: 500px;">'
    text += '</div></div>'
    text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    text += '<h2 style="text-align: center;"><b>' + data.shops[pos].name + '</b></h2></div>'
    text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    text += '<div class="col-md-4"><div>'
    text += '<p><b>About:</b> ' + data.shops[pos].about + '</p>'
    text += '<p><b>Opening Times:</b> ' + data.shops[pos].openingTimes + '</p>'
    text += '<p><b>Price Range:</b> ' + data.shops[pos].priceRange + '</p>'
    text += '<p><b>Address:</b> ' + data.shops[pos].address + '</p>'
    text += '</div></div>'
    text += '<div class="col"><div>'
    text += '<div id="artists" class="container">'
    text += displayArtistsFromShop(shopRef);
    text += '</div></div></div></div></div>'

    document.getElementById("shops").innerHTML = text;
}

function getShopIndex(shopRef) {
    let pos = -1;
    for (var i in data.shops) {
        if (data.shops[i].ref == shopRef)
            pos = i;
    }
    return pos;
}

function getArtistIndex(ref, shopRef) {
    let pos = -1;
    for (var i in data.artists) {
        if (data.artists[i].ref == ref && data.artists[i].shopRef == shopRef)
            pos = i;
    }
    return pos;
}


function displayArtists() {
    let text = "";
    for (var i in data.artists) {
        text = formatArtist(text, i);
    }
    document.getElementById("artists").innerHTML = text;
}

function displayArtistsFromShop(shopName) {
    let text = "";
    for (var i in data.artists) {
        if (data.artists[i].shopRef == shopName)
            text = formatArtist(text, i);
    }
    return text;
}

function formatArtist(text, i) {
    text += '<div class="container" style="padding-bottom: 15px;">'
    text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    text += '<div class="col-md-auto">'
    
    artistUrl = "../artists/singleArtist.html?ref=" + data.artists[i].ref + "&shopRef=" + data.artists[i].shopRef;
    text += '<a href="' + artistUrl + '">'; 
    text += '<img src="' + data.artists[i].image + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 200px; height: 200px;">'
    text += '</a>'

    text += '</div><div class="col"><div>'

    text += '<p><b>Name:</b> <a href=' + artistUrl + '>' + data.artists[i].name + '</a></p>'
    text += '<p>' + data.artists[i].about + '</p>'
    text += '<p><b>Main Style:</b> ' + data.artists[i].mainStyle + '</p>'
    text += '<p><b>Shop:</b> ' + data.artists[i].shop + '</p>'
    text += '<p><b>Price Range:</b> ' + data.artists[i].priceRange + '</p>'

    text += '</div></div><div class="col"><div>'

    text += '<p><b>Instagram:</b> <a href=' + data.artists[i].instaLink + '> ' + data.artists[i].insta + '</a></p>'
    text += '<p><b>Facebook:</b> <a href=' + data.artists[i].facebookLink + '> ' + data.artists[i].facebook + '</a></p>'
    text += '<p><b>Website:</b> <a href=' + data.artists[i].websiteLink + '> ' + data.artists[i].website + '</a></p>'

    text += '</div></div></div></div>'

    return text;
}

function displaySingleArtist(ref, shopRef) {
    const pos = getArtistIndex(ref, shopRef);

    if (pos == -1) {
        console.error("Shop Reference NOT FOUND");
        return;
    }

    console.log(pos);

    // let text = "";
    // text += '<div class="container" style="padding-bottom: 15px;">'
    // text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    // text += '<div class="col-md-12">'
    // text += '<img src="' + data.shops[pos].image + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 100%; height: auto; max-width: 500px;">'
    // text += '</div></div>'
    // text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    // text += '<h2 style="text-align: center;"><b>' + data.shops[pos].name + '</b></h2></div>'
    // text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    // text += '<div class="col-md-4"><div>'
    // text += '<p><b>About:</b> ' + data.shops[pos].about + '</p>'
    // text += '<p><b>Opening Times:</b> ' + data.shops[pos].openingTimes + '</p>'
    // text += '<p><b>Price Range:</b> ' + data.shops[pos].priceRange + '</p>'
    // text += '<p><b>Address:</b> ' + data.shops[pos].address + '</p>'
    // text += '</div></div>'
    // text += '<div class="col"><div>'
    // text += '<div id="artists" class="container">'
    // text += displayArtistsFromShop(shopRef);
    // text += '</div></div></div></div></div>'

    // document.getElementById("shops").innerHTML = text;
}