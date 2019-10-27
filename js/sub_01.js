$(function () {
    baloonUp();

    function baloonUp() {
        $('.airplane').animate({
            'top': 220
        }, 1000, null, baloonDown);
    }

    function baloonDown() {
        $('.airplane').animate({
            'top': 200
        }, 700, null, baloonUp);
    }});

        $(function(){
            $('.sub01_sub02').on('click', function(){
                alert('작업중인 페이지입니다.')
            });
        });

        $(function(){
            $('.sub01_sub03').on('click', function(){
                alert('작업중인 페이지입니다.')
            });
        });

        $(function(){
            $('.sub01_sub04').on('click', function(){
                alert('작업중인 페이지입니다.')
            });
        });