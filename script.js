document.addEventListener('DOMContentLoaded', () => {
    // HTML 요소들을 가져옵니다.
    const housingImg = document.getElementById('housing-img');
    const keycapsImg = document.getElementById('keycaps-img');
    const optionButtons = document.querySelectorAll('.option-btn');

    // 초기 활성 버튼 설정 (선택된 옵션을 시각적으로 표시)
    function setActiveButton(part, color) {
        document.querySelectorAll(`.option-btn[data-part="${part}"]`).forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.option-btn[data-part="${part}"][data-color="${color}"]`).classList.add('active');
    }

    // 페이지 로드 시 초기 상태 설정
    setActiveButton('housing', 'black'); // 초기 하우징은 블랙
    setActiveButton('keycaps', 'black'); // 초기 키캡은 블랙

    // 각 옵션 버튼에 클릭 이벤트 리스너를 추가합니다.
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const part = button.dataset.part; // 'housing' 또는 'keycaps'
            const color = button.dataset.color; // 'black', 'white', 'red'

            // 선택된 부분(part)에 따라 이미지의 src를 변경합니다.
            if (part === 'housing') {
                housingImg.src = `images/housing_${color}.png`;
            } else if (part === 'keycaps') {
                keycapsImg.src = `images/keycaps_${color}.png`;
            }

            // 현재 클릭된 버튼에 'active' 클래스를 추가하고, 다른 버튼에서는 제거합니다.
            setActiveButton(part, color);
        });
    });
});
