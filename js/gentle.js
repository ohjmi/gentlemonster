$('.slider').bxSlider({
    /* # 기본 값 (논리형 값) */
    mode: 'horizontal',
    // 2. 슬라이드 전환 시 속도 설정 = 숫자형 값 => 하나의 이미지가 바뀌는 시간
    speed: 500,
    // 3. 슬라이드 작동 실행 전환 사이 시간 = 숫자형 값 => (예)3초마다 다른 이미지로 바뀜
    pause: 3000,
    // 4. 블릿(동그라미 버튼) 노출 여부 = 논리형 값 => true, false
    pager: true,
    // 5. 슬라이드 박스 가로 너비 설정 = 숫자형 값 => (중요)but, 구조 스타일에 width값이 코딩되어 있으면 안 바뀜
    slidewidth: 1920,
    // 6. 자동 슬라이드 멈추기 여부 = 논리형 값 => true, false
    // stopAutoOnclick: true,
    // 7. 슬라이드 자동전환 여부 = 논리형 값 => true, false
    auto: true,
    // 8. 슬라이드에 마우스 호버 시 자동전환 멈추게 할 것인지 여부 = 논리형 값 => true, false
    autoHover: true,
    // 9. 플레이 버튼 노출 여부 = 논리형 값 => true, false
    // autoControls: true,
    // 10. 썸네일 이미지 연결 = (중요) => 구조의 클래스명
    // pagerCustom: '.slide_pager'

});

    var video = $('#gentle_video');
    var btn = $('#gentle_btn');
    
    // 이벤트 연결
    btn.click(function(){
    // 초기상태 => Video(paused) / Button(play)
        if(video.get(0).paused){
            video.get(0).play();
            btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
        }else{ // Video가 playing 상태면
            //pause(): Video pause
            video.get(0).pause();
            btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
        }
});

    $('.gnb li').mouseenter(function(){
        $(this).find('.submenu').stop().slideDown();
    });
    $('.gnb li').mouseleave(function(){
        $(this).find('.submenu').stop().slideUp();
});

$('.close').click(function(){
    $('aside').hide();
});

$('a').click(function(e){
    e.preventDefault();
});