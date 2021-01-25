function bitcoinSet(currency, country) {
    const value = document.getElementById(`value-${currency}`);
    fetch(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((result) => {
            const info = parseFloat(result.data.amount).toLocaleString(country, { style: 'currency', currency });
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