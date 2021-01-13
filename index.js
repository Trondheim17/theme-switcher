console.log("Hello World")

let count = 0

const counter = document.getElementById('counter')

const increase = () => {
    count += 1
    counter.innerText = count
}

const decrease = () => {
    count -= 1
    counter.innerText = count
}

const reset = () => {
    count = 0
    counter.innerHTML = `<mark>${count}<mark>`
}

const selectTheme = (theme) => {
    document.getElementsByTagName('body')[0].className = theme
    document.getElementsByTagName('main')[0].className = theme
    const buttons = document.getElementsByTagName('button')
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].className = theme
    }
}
