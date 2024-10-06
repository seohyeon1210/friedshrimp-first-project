// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
    // span 요소 노드 가져오기
    const spanEl = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    // 배열의 인덱스 초기값
    let index = 0;
    // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }else{
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if(currentTxt.length !== 0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        }else{
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            console.log(currentTxt);
            writeTxt();
        }
    }
    writeTxt();
})();

// const headerEl = document.querySelector("header");
// window.addEventListener('scroll', function(){
//     const browerScrollY = window.pageYOffset;
//     if(browerScrollY > 0){
//         headerEl.classList.add("active");
//     }else{
//         headerEl.classList.remove("active");
//     }
// });

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

// 애니메이션 스크롤 이동
const animationMove = function(selector){
    // 1. selector 매개변수로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // 2. 현재 웹 브라우저의 스크롤 정보(y 값)
    const browerScrollY = window.pageYOffset;
    // 3. 이동할 대상의 위치(y 값)
    const targetScrollY = targetEl.getBoundingClienRect().top + browerScrollY;
    // 4. 스크롤 이동
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
}

// 스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}