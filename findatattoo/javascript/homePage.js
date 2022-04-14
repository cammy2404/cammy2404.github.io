function tattooOfTheMonth() {

    const tattooImage = "./images/tattoos/featured.jpg";
    const artistName = "Andy";
    const shopName = "Bank Street Tattoo";
    const duration = "3hr";

    let text = "";
    text += '<div class="container" style="padding-bottom: 15px;">'
    text += '<div class="row" style="background-color: rgb(240, 240, 240); padding-top: 10px; padding-bottom: 10px;">'
    text += '<div class="col">'
    text += '<img src="' + tattooImage + '" class="rounded mx-auto d-block" alt="Image of artist" style="width: 50%;">'
    text += '</div><div class="col"><div>'
    text += '<h2><b>' + artistName + ' - ' + shopName + '</b></h2>'
    text += '<p><b>Duration:</b> ' + duration + '</p>'
    text += '</div></div></div></div>'

    document.getElementById("demo").innerHTML = text;
}