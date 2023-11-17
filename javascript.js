

let totalPrice = parseFloat(document.getElementById('totalPrice').innerText)

function showProductName(product, productName, Price) {
    document.getElementById(product).addEventListener('click', function () {
        const li = document.createElement('li')
        li.textContent = document.getElementById(productName).innerText
        const item = document.getElementById('cartItem')
        item.appendChild(li)
        const productPrice = parseFloat(document.getElementById(Price).innerText)

        totalPrice = totalPrice + productPrice
        document.getElementById('totalPrice').innerText = totalPrice

        if (totalPrice >= 200) {
            document.getElementById('applyButton').removeAttribute('disabled')
        }
        if (totalPrice >= 0) {
            document.getElementById('makePurchaseButton').removeAttribute('disabled')
        }


    })


    document.getElementById('applyButton').addEventListener('click', function () {
        const couponCode = document.getElementById('coupon-Code').value
        if (couponCode === "SELL200") {
            var discount = totalPrice * 0.20
        }
    
        else {
            discount = 0
    
        }
    
        document.getElementById('discount').innerText = discount.toFixed(2)
    
        var discountedTotalPrice = totalPrice - discount
    
        document.getElementById('totalPriceAfterDiscount').innerText = discountedTotalPrice
    })

    document.getElementById('home-button').addEventListener('click',function(){

        
        document.getElementById('totalPriceAfterDiscount').innerText = "0"
      
        document.getElementById('totalPrice').innerText = "0"
        
        document.getElementById('discount').innerText = '0'
        document.getElementById('cartItem').innerText=''
        document.getElementById('coupon-Code').value=''
        

    })

    return totalPrice

}



showProductName('product1', 'product1Name','productPrice1')
showProductName('product2', 'product2Name', 'productPrice2')
showProductName('product3', 'product3Name', 'productPrice3')
showProductName('product4', 'product4Name', 'productPrice4')
showProductName('product5', 'product5Name', 'productPrice5')
showProductName('product6', 'product6Name', 'productPrice6')













