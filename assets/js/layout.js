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
        $('#fullTreeMenuListContainer').css({'height': 'calc(100vh - '+($('.subHeadWrapper').height()+ 180) +'px);'})
        $('.rightSideMenu').css({'height': 'calc(100vh - '+($('.subHeadWrapper').height() + 180)+'px);'})
        var menuHeight = $('#overall-header').height() + $('.subHeadWrapper').height()
        if ($('.docContainer').height() + menuHeight >= document.body.clientHeight) {
            $('.history').addClass('history-fixed')
            $('#footerWrapper').css({'margin-top': '48px'})
        }
    }

    function realFunc() {
        if (breakpoint() == 'lg') {
            var menuHeight = $('#overall-header').height() + $('.subHeadWrapper').height()
            var sd = $(window).scrollTop();
            var dcHeight = $('.docContainer').height() + menuHeight - sd
            var clientHeight = document.body.clientHeight
            if (sd >= 65) {
                // head and sidebar fixed
                $('.subHeadWrapper').css({'top': '0px'})
                $('#docHead').css({'top': $('.subHeadWrapper').height() + 'px'})
                $('.sideBar').css({'padding-top': '0px'})
                $('.sideBar #sideBarCnt').addClass('sidebar-fixed')
                $('.rightSideMenu').addClass('rsm-fixed')
                if (dcHeight + 48 > clientHeight) {
                    // history fixed
                    $('.history').addClass('history-fixed')
                    $('#footerWrapper').css({'margin-top': '48px'})
                } else {
                    $('.history').removeClass('history-fixed')
                    $('#footerWrapper').css({'margin-top': '0px'})
                }
            } else {
                // head and sidebar fixed
                $('.subHeadWrapper').css({'top': (65-sd) + 'px'})
                $('#docHead').css({'top': (menuHeight-sd) + 'px'})
                $('.sideBar').css({'padding-top': $('.subHeadWrapper').height() + 'px'})
                $('.sideBar #sideBarCnt').removeClass('sidebar-fixed')
                $('.rightSideMenu').removeClass('rsm-fixed')

                // history fixed
                if (sd < 65 && dcHeight + 48 > clientHeight) {
                    if (!$('.history').hasClass('history-fixed')) {
                        $('.history').addClass('history-fixed')
                        $('#footerWrapper').css({'margin-top': '48px'})
                    }
                } else {
                    $('.history').removeClass('history-fixed')
                    $('#footerWrapper').css({'margin-top': '0px'})
                }
            }
        } else {
            $('.subHeadWrapper').css({'top': 'unset'})
            $('#docHead').css({'top': 'unset'})
            $('.sideBar').css({'padding-top': '20px'})
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