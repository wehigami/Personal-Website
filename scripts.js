document.addEventListener('mousemove', parallax);
function parallax(e) {
    this.querySelectorAll('.bgVid').forEach(fg => {
        let speed = fg.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 100
        let y = (window.innerWidth - e.pageY * speed) / 100
        fg.style.transform = `translateX(${x}px)
                translateY(${y}px)`
    })
}


function hambarAnim(x) {
    x.classList.toggle("change");
}

$(() => {
    let rightPos = $('.navMenu').css('right');

    $('.bar1, .bar2, .bar3').on('click', function() {
        $('.navMenu').slideToggle();
        $('.bgDiv1').fadeToggle();
    })

});


function togglePopup() {
    document.getElementById('popup1').classList.toggle('active');
}

$(() => {
    $('.bgDiv').on('click', () => {
        $('.bgDiv').hide();
        $('.popUp').hide();
    });


    $('.inuse').on('click', function () {
        let id = $(this).attr('data-panelid');

        $('.bgDiv').show();
        $('.popUp').show();

        switch ('#' + id) {
            case '#panel1':
                $('#popuptxt3').hide();
                $('#popuptxt2').hide();
                $('#popuptxt1').show();
                break;
            case '#panel2':
                $('.popUp').css({
                    backgroundImage: 'url(../imgs/botProjCl.png)'
                });
                $('#popuptxt3').hide();
                $('#popuptxt2').show();
                $('#popuptxt1').hide();
                break;
            case '#panel3':
                $('.popUp').css({
                    backgroundImage: 'url(../imgs/minecraftProjCl.png)',
                });
                $('#popuptxt3').show();
                $('#popuptxt2').hide();
                $('#popuptxt1').hide();
                break;
        }
    });

    $('.inuse').on('mouseover', function(){
        let id = $(this).attr('data-panelid');

        $('#'+id).css({
            cursor: 'pointer'
        }) 
    })

    $('.project').on('mouseover', function () {
        let id = $(this).attr('data-panelid');

        switch ('#' + id) {
            case '#panel1':
                $('#' + id).css({
                    backgroundImage: 'url(../imgs/webProjCl.png)'
                });
                break;
            case '#panel2':
                $('#' + id).css({
                    backgroundImage: 'url(../imgs/botProjCl.png)'
                });
                break;
            case '#panel3':
                $('#' + id).css({
                    backgroundImage: 'url(../imgs/minecraftProjCl.png)'
                });
                break;
        }


        $('#' + id).css({
            margin: ' 12.5px',
            width: 475,
            height: 375,
            transition: '0.1s',
            fontSize: '55px',
        });
    });
    $('.project').on('mouseleave', function () {
        let id = $(this).attr('data-panelid');

        switch ('#' + id) {
            case '#panel1':
                $('#' + id).css({
                    backgroundImage: 'url(../imgs/webProj.png)'
                });
                break;
            case '#panel2':
                $('#' + id).css({
                    backgroundImage: 'url(../imgs/botProj.png)'
                });
                break;
            case '#panel3':
                $('#' + id).css({
                    backgroundImage: 'url(../imgs/minecraftProj.png)'
                });
                break;
        }



        $('#' + id).css({
            margin: '50px 25px',
            left: '10%',
            width: 450,
            height: 350,
            fontSize: '50px'
        });
    });
});
