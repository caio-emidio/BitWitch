function bitcoinSet(currency, country) {
    const value = document.getElementById(`value-${currency}`);
    fetch(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((result) => {
            const params = Object.fromEntries(new URLSearchParams(location.search));
            if (params.bgcolor) {
                const test = document.getElementById("bitcoin");
                test.style.backgroundColor = `#${params.bgcolor}`
            }

            if (params.color) {
                const test = document.getElementById("bitcoin");
                test.style.color = `#${params.color}`
            }

            const quantity = params.quantity || 1
            const parseValue = parseFloat(result.data.amount);
            const total = parseValue * quantity;
            const info = total.toLocaleString(country, { style: 'currency', currency });
            value.innerHTML = info
        })
        .catch(error => console.log('error', error));
    setTimeout(function() {
        bitcoinSet(currency, country)
    }, 30000);
}

bitcoinSet("eur", "eur")
bitcoinSet("usd", "usd")
bitcoinSet("brl", "pt-br")

// slider section

// euro, dolar, bitcoin, brl

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("values");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }    
    x[myIndex-1].style.display = "flex";
    setTimeout(carousel, 7000);
}