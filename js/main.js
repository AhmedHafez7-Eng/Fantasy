$(document).ready(function () {
    document.body.classList.add("stopScrolling");
    $(this).scrollTop(0);
    /* -----------------
        Loader
    --------------*/
    window.addEventListener("load", function () {
        /* -------------------- Page Loader--------------------- */
        document.querySelector(".pageLoader").classList.add("fade-out");
        setTimeout(function () {
            document.querySelector(".pageLoader").style.display = "none";
            document.body.classList.remove("stopScrolling");
        }, 600);
    });
});


/* -----------------
Prevent "Other links" link item behaviour
--------------*/
$(".disabled").click(function (ev) {
    ev.preventDefault();
});


/* -----------------
Trigger To Top Button
--------------*/

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({
        scrollTop: 0
    }, 40);
});


/* -----------------
Applying LighBox For Gallery Section
--------------*/
lightGallery(document.querySelector('.gallery .container'), {
    getCaptionFromTitleOrAlt: true,
    preload: 1,
});
lightGallery(document.getElementById('captions'));


/* -----------------
Trigger count down for events section
--------------*/
var countDate = new Date('Jan 1, 2022 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function () {
    newYear();
}, 1000);

/* -----------------
Changing Video on Click
--------------*/
let listVideo = document.querySelectorAll('.videoList .vid');
let mainVideo = document.querySelector('.mainVideo video');
let title = document.querySelector('.mainVideo .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});