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
    '                        <td style="vertical-align: bottom;">'+
    '                            <button><p>Add to Cart</p></button>'+
    '                        </td>'+
    '                    </tr>'+
    '                </table>';
    testNum++;
    console.log(testNum);
}
var testNum = 0;

createItem("shirt", "Fashionable T-Shirt", 15, "Hop on the trend of wearing shirts that cover up hardly anything by purchasing this shirt!");
createItem("big logo", "test2", 400, "this is a description")