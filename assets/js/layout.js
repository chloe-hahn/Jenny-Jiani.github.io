$(document).ready(function(){
    init()

    $(window).resize(function() {
        init()
        realFunc()
    })

    window.addEventListener('scroll', realFunc);

    function init() {
        $('#sideBarCnt').css({'width': $('.sideBar').width() + 'px'})
        $('.container .head').css({'width': $('.docContainer').width() + 'px'})
        $('#fullTreeMenuListContainer').css({'height': 'calc(100vh - 245px)'})

        if ($('.docContainer').height() + 125 >= document.body.clientHeight) {
            $('.history').addClass('history-fixed')
            $('#footerWrapper').css({'margin-top': '48px'})
        }
    }

    function realFunc(){
        var sd = $(window).scrollTop();
        
        // 185 = 60*2+65
        var dcHeight = $('.docContainer').height() + 185 - sd
        var clientHeight = document.body.clientHeight

        if (sd >= 65) {
            // head and sidebar fixed
            $('.subHeadWrapper').css({'top': '0px'})
            $('#docHead').css({'top': '60px'})
            $('.sideBar').css({'padding-top': '0px'})
            $('.sideBar #sideBarCnt').addClass('sidebar-fixed')

            if (dcHeight > clientHeight) {
                // history fixed
                $('.history').addClass('history-fixed')
                $('#footerWrapper').css({'margin-top': '48px'})
                // change sidebar height
            }
        } else {
            // head and sidebar fixed
            $('.subHeadWrapper').css({'top': (65-sd) + 'px'})
            $('#docHead').css({'top': (125-sd) + 'px'})
            $('.sideBar').css({'padding-top': '60px'})
            $('.sideBar #sideBarCnt').removeClass('sidebar-fixed')

            // history fixed
            console.log(dcHeight + 48 - sd)
            console.log(clientHeight)
            if (sd < 65 && dcHeight + 48 - sd > clientHeight) {
                if (!$('.history').hasClass('history-fixed')) {
                    $('.history').addClass('history-fixed')
                    $('#footerWrapper').css({'margin-top': '48px'})
                }
            } else {
                $('.history').removeClass('history-fixed')
                $('#footerWrapper').css({'margin-top': '0px'})
            }

        }
    }

    $('.sideBarIcon').click(function() {
        $(".sideBar").toggleClass('hide-sm');
        $(".sideBar").toggleClass('hide-xs');
        setTimeout(function() {
            $('#sideBarCnt').css({'width': $('.sideBar').width() + 'px'})
        }, 100)
    })

    $(document).click(function(){
        $('.otherVersions').hide()
        $('.fullVersionInfo').hide()
    })

    $('.changeBtn').on('click', function(e) {
        $('.otherVersions').toggle()
        stopPropagation(e);
    })

    $('.fvChange').on('click', function(e) {
        $('.fullVersionInfo').toggle()
        stopPropagation(e);
    })
})