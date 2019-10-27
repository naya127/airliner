$(function () {
    baloonUp();

    function baloonUp() {
        $('.airplane').animate({
            'top': 331
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.airplane').animate({
            'top': 300
        }, 700, null, baloonUp);
    }});

$(function () {
    baloonUp();

    function baloonUp() {
        $('.start_airplane').animate({
            'top': 20
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.start_airplane').animate({
            'top': 10
        }, 700, null, baloonUp);
    }});

        $(function(){
            $('.main_sub02').on('click', function(){
                alert('작업중인 페이지입니다.')
            });
        });

        $(function(){
            $('.main_sub03').on('click', function(){
                alert('작업중인 페이지입니다.')
            });
        });

        $(function(){
            $('.main_sub04').on('click', function(){
                alert('작업중인 페이지입니다.')
            });
        });