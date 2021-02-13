(function () {


    let viewCard = document.getElementById("view_card");

    viewCard.addEventListener("click", openOnMobile);

    function openOnMobile() {

        document.getElementById('mobile_fixed_card').classList.add('d-block');

    }

    let closeMobileCard = document.getElementById("close_mobile_card");

    closeMobileCard.addEventListener("click", closeMobileCardFunc);


    function closeMobileCardFunc() {
        document.getElementById('mobile_fixed_card').classList.remove('d-block');
    }

    

})();