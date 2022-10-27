const content = document.getElementById("boxMensagem")
const button = document.getElementById("btnMensagem")

const paises = [
    ["Brasil", "Samba", 0],
    ["Argentina", "Vinho", 0],
    ["Paraguai", "Mulamba", 0],
    ["Itália", "Pizza", 0],
    ["Japão", "Temaki", 0],
    ["México", "Taco", 0],
    ["Groelândia", "Frio", 0],
    ["Espanha", "Tourada", 0],
    ["Grécia", "Arquitetura", 0],
    ["Australia", "Fauna", 0],
]

const handleBtn = () => {
    const number = Math.floor(Math.random() * paises.length)
    paises[number][2] += 1
    content.innerHTML = `<p>O país sorteado foi: <span>${paises[number][0]}</span></p><p>Sua característica: <span>${paises[number][1]}</span></p><p>Vezes sorteado: <span>${paises[number][2]}</span></p>`
}

button.addEventListener('click', handleBtn)