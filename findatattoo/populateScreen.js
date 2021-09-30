function displayShops() {
    
    const shopNames = ["Bank Street Tattoo", "Sanctury Tattoo", "Tribal Body Art", "Metalurgey"];
    const shopImages = ["../images/bankStreet.jpg", "../images/sancturyTattoo.jpg", "../images/tribalBodyArt.png", "../images/metalurgey.jpg"];
    const shopAbout = ["Fresh custom tattoo studio in the heart of Dundee offering high quality work at great prices, offering specialisation in numerous styles - catering to all",
                    "Dundee based Tattoo studio.Artists: Jay Soos, Danielle Rose, Michalina Mju, and Stephen Kelly. Minimum charge is £50. Prices will be summed up by the size, detail & placement of the tattoo. Multiple sessions will be by an hourly rate of £80",
                    "Tribal Body Art opened on Edinburgh’s royal mile in 1996 with an emphasis on quality and customer care.",
                    "We have comfortable surroundings with separate private rooms for both tattooing, piercing and laser tattoo removal. Proudly stocking a wide range of luxury body jewellery"];
    const shopOpeningTImes = ["Tues-Sat  11am - 6pm",
                    "Tues-Sat  11am - 6pm",
                    "Mon-Sat  10am - 6pm     Sun 12pm - 6pm",
                    "Mon-Sat  10am - 5pm"];
    const shopPriceRange = ["££", "££", "££", "££"];
    const shopAddress = ["19 Bank St, Dundee DD1 1RL",
                    "148 nethergate, Dundee",
                    "248 Canongate, Edinburgh EH8 8AA",
                    "40 Dock St, Dundee DD1 3DR"];
    
    let i, len, text;
    for (i = 0, len = shopNames.length, text = ""; i < len; i++) {
        text += '<div class="container" style="padding-bottom: 15px;">'
        text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
        text += '<div class="col-md-auto">'
        text += '<img src="' + shopImages[i] + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 200px; height: 200px;">'
        text += '</div><div class="col"><div>'
        text += '<h2><b>' + shopNames[i] + '</b></h2>'
        text += '<p>' + shopAbout[i] + '</p>'
        text += '<p><b>Opening Times:</b> ' + shopOpeningTImes[i] + '</p>'
        text += '<p><b>Price Range:</b> ' + shopPriceRange[i] + '</p>'
        text += '<p><b>Address:</b> ' + shopAddress[i] + '</p>'
        text += '</div></div></div></div>'
    }
    document.getElementById("demo").innerHTML = text;
}


function displayArtists() {
    
    const artistNames = ["Andy", "Calum Cochrane"];
    const artistImage = ["../images/artists/andy.jpg", "../images/artists/calumCochrane.jpg"];
    const artistAbout = ["", "Calum served his apprenticeship in Edinburgh and then joined us in 2015. He specialises in geometeric, dotwork and big bold colour pieces."];
    const artistMainStyle = ["Illistration", "Geometric / Dotwork / Large Colour"];
    const artistShop = ["Bank Street Tattoo", "Tribal Body Art"];
    const artistPriceRange = ["££", "££"];
    const artistInsta = ["@andy.mc_art", "@calumtattoo"];
    const artistFacebook = ["", ""];
    const artistWebsite = ["andymc.bigcartel.com", ""];

    let i, len, text;
    for (i = 0, len = artistNames.length, text = ""; i < len; i++) {
        text += '<div class="container" style="padding-bottom: 15px;">'
        text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
        text += '<div class="col-md-auto">'
        
        text += '<img src="' + artistImage[i] + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 200px; height: 200px;">'
        
        text += '</div><div class="col"><div>'

        text += '<p><b>Name:</b> ' + artistNames[i] + '</p>'
        text += '<p>' + artistAbout[i] + '</p>'
        text += '<p><b>Main Style:</b> ' + artistMainStyle[i] + '</p>'
        text += '<p><b>Shop:</b> ' + artistShop[i] + '</p>'
        text += '<p><b>Price Range:</b> ' + artistPriceRange[i] + '</p>'

        text += '</div></div><div class="col"><div>'

        text += '<p><b>Instagram:</b> ' + artistInsta[i] + '</p>'
        text += '<p><b>Facebook:</b> ' + artistFacebook[i] + '</p>'
        text += '<p><b>Website:</b> ' + artistWebsite[i] + '</p>'

        text += '</div></div></div></div>'

    }
    document.getElementById("demo").innerHTML = text;
}