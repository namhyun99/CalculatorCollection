

function calHandler() {

    const sales_price = Number(document.getElementById("sales_price").value);
    const cost_price = Number(document.getElementById('cost_price').value);

    if (sales_price == 0 || cost_price == 0) {

        alert("데이터를 입력해주세요");

    } else {

        calResult(sales_price, cost_price);
    }

}

calResult(sales_price, cost_price){


}

