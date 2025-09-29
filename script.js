// HTML에서 필요한 요소들을 가져옵니다.
const generateBtn = document.getElementById('generate-btn');
const colorBoxes = document.querySelectorAll('.color-box');

// 랜덤한 16진수 색상 코드를 생성하는 함수
function generateRandomHexColor() {
    // '0123456789abcdef' 문자들 중에서 랜덤으로 6개를 뽑아 '#' 뒤에 붙입니다.
    const hexChars = '0123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 모든 색상 박스를 새로운 랜덤 색상으로 업데이트하는 함수
function updateColors() {
    colorBoxes.forEach(box => {
        const newColor = generateRandomHexColor();
        // 박스의 배경색을 변경합니다.
        box.style.backgroundColor = newColor;
        // 박스 안의 텍스트(색상 코드)를 변경합니다.
        box.querySelector('.color-code').textContent = newColor;
    });
}

// '새로운 색상 만들기' 버튼을 클릭했을 때 updateColors 함수를 실행하도록 설정합니다.
generateBtn.addEventListener('click', updateColors);

// 페이지가 처음 로드될 때도 한번 실행해서 초기 색상을 보여줍니다.
updateColors();
