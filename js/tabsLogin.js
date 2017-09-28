(function($) {
    $(function() {

        $('ul.tabs-login__caption').each(function() {
            $(this).find('li').each(function(i) {
                $(this).click(function(){
                    $(this).addClass('active-login').siblings().removeClass('active-login')
                        .closest('div.tabs-login').find('div.tabs-login__content').removeClass('active-login').eq(i).addClass('active-login');
                });
            });
        });

    })
})(jQuery)