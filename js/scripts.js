//Below is a 2d array that holds all of the item info
var items = [
    //[img, name, price, description]
    ["shirt", "Fashionable T-Shirt", 15, "Hop on the trend of wearing shirts that cover up hardly anything by purchasing this shirt!"],
    ["ancient tech", "Ancient Relic", 50, "This is an old one. We have no idea when it is from, all we know is that it runs at a tolerable level."],
    ["toys", "Lot of Childrens Toys", 20, "These were found behind a local McDonald's, we are sure that any child would love to have them."],
    ["brick", "Medieval Weaponry", 25, "We are 90% sure that this was used to commit armed robbery, so if you wish to be able to defend yourself at moment's notice, this is what you need."],
    ["liquid", "Mystery Liquid", 10, "Chemical tests have come back saying that this liquid is a nonlethal substance. So summon your sense of adventure and find out what his is by buying it!"],
    ["sweater", "Christmas Sweater", 5, "We found this one on exactly December 26th, 2020. Our guess is that it is a Christmas Gift that someone just did not appreciate enough. Show this sweater that love it deserves and buy it now!"],
    ["couch", "Totally Beautiful Couch", 40, "We found this one in a neighborhood during a bulk trash pickup day. We don't know why it was tossed out, we just know that it's a functioning couch."],
    ["used", "Slightly-Used Sofa", 30, "As you can see, this sofa is only slightly used. We are sure that this sofa will fit the desired aesthetic of your home, 100% guaranteed!"],
    ["apple", "Slightly-Used Apple", 1, "The price was a little knocked off because it is more used than we had originally imagined. Still very funtional though."]
];

//function below creates an item listing (super proud of writng this one :D )
function createItem(img, name, price, description){
    document.getElementById("shopDiv").innerHTML += '<div class="item">'+
    '                <table>'+
    '                    <tr>'+
    '                        <td class="itemImage">'+
    '                            <img src="images/' + img + '.png" height="150rem">'+
    '                        </td>'+
    '                        <td class="itemInfo" style="height: 50%;">'+
    '                            <h3>'+ name + '</h3>'+
    '                            <p>$' + price + '</p>'+
    '                            <p>' + description + '</p>'+
    '                        </td>'+
    '                        <td style="vertical-align: bottom; text-align: right">'+
    '                            <button style="display: inline-block"><p>Add to Cart</p></button>'+
    '                        </td>'+
    '                    </tr>'+
    '                </table>';
}
function prepareShop(){
   for(var i = 0; i < items.length; i++){
        createItem(items[i][0], items[i][1], items[i][2], items[i][3]);
   }
}

//function below sets up each item in the cart
function createCartItem(img, name, price){
    document.getElementById("cartDiv").innerHTML +=
    '<div class="item" style="padding: 0; height: 5rem; margin-bottom: 0.5rem;">'+
'                <table>'+
'                    <tr>'+
'                        <td class="itemImage"><img src="images/' + img + '.png" height="75rem"></td>'+
'                        <td style="width: 50%"><h4>' + name + '</h4></td>'+
'                        <td><p>$' + price + '</p></td>'+
'                        <td style="text-align: right">'+
'                            <label for="count">Qty.</label>'+
'                            <input type="text" id="count" style="width: 3rem;">'+
'                        </td>'+
'                    </tr>'+
'                </table>'+
'            </div>';
}
function prepareCart(){
    for(var i = 0; i < items.length; i++){
         createCartItem(items[i][0], items[i][1], items[i][2]);
    }
    document.getElementById("cartDiv").innerHTML += '<h2>Please fill out the following information:</h2>'+
    '            <!--Order Form-->'+
    '            <form>'+
    '                <fieldset>'+
    '                    <!--Personal Info Section-->'+
    '                    <legend style="text-align: left;">Personal information</legend>'+
    '                    <!--'+
    '                        Name, Address (Street Address, ZIP, city, state), Bank Info, phone-num'+
    '                    -->'+
    '                    <ul style="list-style-type: none;">'+
    '                        <li>'+
    '                            <!--Name-->'+
    '                            <label for="nameInput1">First Name:</label>'+
    '                            <input type="text" id="nameInput1" style="width: 5rem;">'+
    '                            <label for="nameInput2">Last Name:</label>'+
    '                            <input type="text" id="nameInput2" style="width: 5rem;">'+
    '                            <label for="nameInput3">Middle Inital (If Applicable):</label>'+
    '                            <input type="text" id="nameInput3" maxLength="1" style="width: 1rem;">'+
    '                        </li>'+
    '                        <br>'+
    '                        <li>'+
    '                            <!--Address-->'+
    '                            <label for="streetAddress">Street Address:</label>'+
    '                            <input type="text" id="streetAddress" style="width: 50%;">'+
    '                        </li>'+
    '                        <li>'+
    '                            <!--Other Location Information-->'+
    '                            <label for="zipCode">Zip Code:</label>'+
    '                            <input type="text" id="zipCode" maxlength = "5" style="width:2.5rem;">'+
    '                            <label for="city">City:</label>'+
    '                            <input type="text" id="city" style="width: 6rem;">'+
    '                            <label for="state">State:</label>'+
    '                            <select style="width: 8rem;">'+
    '                                <option value="NONE">[Please Select]</option>'+
    '                                <option value="AL">Alabama</option>'+
    '                                <option value="AK">Alaska</option>'+
    '                                <option value="AZ">Arizona</option>'+
    '                                <option value="AR">Arkansas</option>'+
    '                                <option value="CA">California</option>'+
    '                                <option value="CO">Colorado</option>'+
    '                                <option value="CT">Connecticut</option>'+
    '                                <option value="DE">Delaware</option>'+
    '                                <option value="FL">Florida</option>'+
    '                                <option value="GA">Georgia</option>'+
    '                                <option value="HI">Hawaii</option>'+
    '                                <option value="ID">Idaho</option>'+
    '                                <option value="IL">Illinois</option>'+
    '                                <option value="IN">Indiana</option>'+
    '                                <option value="IA">Iowa</option>'+
    '                                <option value="KS">Kansas</option>'+
    '                                <option value="KY">Kentucky</option>'+
    '                                <option value="LA">Louisiana</option>'+
    '                                <option value="ME">Maine</option>'+
    '                                <option value="MD">Maryland</option>'+
    '                                <option value="MA">Massachusetts</option>'+
    '                                <option value="MI">Michigan</option>'+
    '                                <option value="MN">Minnesota</option>'+
    '                                <option value="MS">Mississippi</option>'+
    '                                <option value="MO">Missouri</option>'+
    '                                <option value="MT">Montana</option>'+
    '                                <option value="NE">Nebraska</option>'+
    '                                <option value="NV">Nevada</option>'+
    '                                <option value="NH">New Hampshire</option>'+
    '                                <option value="NJ">New Jersey</option>'+
    '                                <option value="NM">New Mexico</option>'+
    '                                <option value="NY">New York</option>'+
    '                                <option value="NC">North Carolina</option>'+
    '                                <option value="ND">North Dakota</option>'+
    '                                <option value="OH">Ohio</option>'+
    '                                <option value="OK">Oklahoma</option>'+
    '                                <option value="OR">Oregon</option>'+
    '                                <option value="PA">Pennsylvania</option>'+
    '                                <option value="RI">Rhode Island</option>'+
    '                                <option value="SC">South Carolina</option>'+
    '                                <option value="SD">South Dakota</option>'+
    '                                <option value="TN">Tennessee</option>'+
    '                                <option value="TX">Texas</option>'+
    '                                <option value="UT">Utah</option>'+
    '                                <option value="VT">Vermont</option>'+
    '                                <option value="VA">Virginia</option>'+
    '                                <option value="WA">Washington</option>'+
    '                                <option value="WV">West Virginia</option>'+
    '                                <option value="WI">Wisconsin</option>'+
    '                                <option value="WY">Wyoming</option>'+
    '                            </select>'+
    '                        </li>'+
    '                    </ul>'+
    '                </fieldset>'+
    '                <fieldset style="flex-wrap: nowrap;">'+
    '                    <legend>Payment Information</legend>'+
    '                    <label for="cardNum">Card Number</label>'+
    '                    <input type="text" id="cardNum" maxlength="16" style="width: 8rem;">'+
    '                    <label for="ccv">CCV</label>'+
    '                    <input type="text" id="ccv" maxlength="3" style="width: 3rem;">'+
    '                    <label for="exp">Expiration Date</label>'+
    '                    <input type="text" id="exp" maxlength="2" style="width: 2rem">'+
    '                    /'+
    '                    <input type="text" id="exp" maxlength="2" style="width: 2rem">   '+
    '                </fieldset>'+
    '                <br>' +
    '                <button type="submit">Checkout</button>';
 }