import './style.css'

const foods = [
'ラーメン',
'寿司',
'焼肉',
'カレー',
'パスタ',
'ハンバーガー',
'うどん',
'そば',
'中華料理',
'韓国料理',
'定食',
'お好み焼き'
]

document.querySelector('#app').innerHTML = `

<main> <h1>今日の外食、何にする？</h1>
<div id="result">？？？</div>

<button id="decide">料理を決める！</button>

</main> `
const result = document.querySelector('#result')
const button = document.querySelector('#decide')

button.addEventListener('click', () => {
const randomIndex = Math.floor(Math.random() * foods.length)
result.textContent = foods[randomIndex]
})