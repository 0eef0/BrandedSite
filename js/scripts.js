//function below creates an item listing (super proud of writng this one :D )
function createItem(img, name, price, description){
    document.getElementById("shopDiv").innerHTML += '<div class="item">'+
    '                <table>'+
    '                    <tr>'+
    '                        <td class="itemImage">'+
    '                            <img src="images/' + img + '.png" height="150rem">'+
    '                        </td>'+
    '                        <td class="itemInfo">'+
    '                            <h3>'+ name + '</h3>'+
    '                            <p>$' + price + '</p>'+
    '                            <p>' + description + '</p>'+
    '                        </td>'+
    '                        <td style="vertical-align: bottom; text-align: right;">'+
    '                            <button><p>Add to Cart</p></button>'+
    '                        </td>'+
    '                    </tr>'+
    '                </table>';
}
function prepareShop(){
    //createItem("image name, name of product, price, description")
    createItem("shirt", "Fashionable T-Shirt", 15, "Hop on the trend of wearing shirts that cover up hardly anything by purchasing this shirt!");
    createItem("ancient tech", "Ancient Relic", 50, "This is an old one. We have no idea when it is from, all we know is that it runs at a tolerable level.");
    createItem("toys", "Lot of Childrens Toys", 20, "These were found behind a local McDonalds, we are sure that any child would love to have them.");
    createItem("brick", "Medieval Weaponry", 25, "We are 90% sure that this was used to commit armed robbery, so if you wish to be able to defend yourself at moments notice, this is what you need.");
    createItem("liquid", "Mystery Liquid", 10, "Chemical tests have come back saying that this liquid is a nonlethal substance. So summon your sense of adventure and find out what his is by buying it!");
    createItem("sweater", "Christmas Sweater", 5, "We found this one on exactly December 26th, 2020. Our guess is that it is a Christmas Gift that someone just did not appreciate enough. Show this sweater that love it deserves and buy it now!");
}

//function below sets up each item in the cart
function createCartItem(img, name, price){

}