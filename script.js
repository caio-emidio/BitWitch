function bitcoinSet(currency, country) {
    const value = document.getElementById(`value-${currency}`);
    fetch(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((result) => {
            const params = Object.fromEntries(new URLSearchParams(location.search));
            console.log(params)
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
