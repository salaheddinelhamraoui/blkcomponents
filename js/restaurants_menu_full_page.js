(function () {


    let viewCard = document.getElementById("view_card");

    viewCard.addEventListener("click", openOnMobile);

    function openOnMobile() {

        document.getElementById('mobile_fixed_card').classList.add('d-block');

    };

    let closeMobileCard = document.getElementById("close_mobile_card");

    closeMobileCard.addEventListener("click", closeMobileCardFunc);


    function closeMobileCardFunc() {
        document.getElementById('mobile_fixed_card').classList.remove('d-block');
    }

    // let cardList = document.getElementsByClassName(".main_menu_page ul");
    // console.log(cardList);
    // console.log("test")

    // calcul total order





    // remove li from list card
    document.getElementById("list_js").addEventListener("click", function (e) {



        if (e.target.parentElement && e.target.parentElement.matches("li")) {

            e.target.parentElement.remove();
            let total = document.getElementById("total_js");
            let subTotal = document.getElementById("subtotal_js");
            let deliveryFee = parseFloat(document.getElementById("delivery_fee_js").innerText);
            let orders = document.getElementsByClassName("price_js");
            let subTotal_local = 0;
            let total_local = 0;


            for (const order of orders) {
                subTotal_local = parseFloat(order.innerText.replace(" DH", "")) + subTotal_local;
                console.log(order.innerText.replace(" DH", ""));
            }
            total_local = subTotal_local + deliveryFee;
            subTotal.innerText = subTotal_local + " DH";
            total.innerText = total_local + " DH";

        }
    });



    // // let order_signs = document.getElementsByClassName("add_to_cart_js");


    // // let index = 0;
    // // for (const order_sign of order_signs) {
    // //     index++;
    // //     order_sign.addEventListener("click", function (e) {

    // //         console.log(document.getElementById("qty_" + index).value);

    // //     });
    // // }







})();