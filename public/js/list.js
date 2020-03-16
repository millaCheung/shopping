$(function () {
    $(".login-user").on({
        mouseover: function () {
            $(".userinfo").show();
        },
        mouseout: function () {
            $(".userinfo").hide();
        }
    })
});