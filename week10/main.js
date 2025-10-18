document.addEventListener("DOMContentLoaded", () => {
    const bgColor = localStorage.getItem("bgColor")
    const fontColor = localStorage.getItem("fontColor")
    const fontSize = localStorage.getItem("fontSize")

    if (bgColor) {
        document.body.style.backgroundColor = bgColor
        document.getElementById("bgColor").value = bgColor
    }

    if (fontColor) {
        document.body.style.color = fontColor
        document.getElementById("fontColor").value = fontColor
    }

    if (fontSize) {
        document.body.classList.remove('small', 'medium', 'large')
        document.body.classList.add(document.getElementById("fontSize").value)
        document.getElementById("fontSize").value = fontSize
    }

    document.getElementById("saveBtn").addEventListener('click', () => {
        const selectBgColor = document.getElementById("bgColor").value
        const selectFontColor = document.getElementById("fontColor").value
        const selectFontSize = document.getElementById("fontSize").value

        localStorage.setItem("bgColor", selectBgColor)
        localStorage.setItem("fontColor", selectFontColor)
        localStorage.setItem("fontSize", selectFontSize)

        document.body.style.color = selectFontColor
        document.body.style.backgroundColor = selectBgColor

        document.body.classList.remove('small', 'medium', 'large')
        document.body.classList.add(document.getElementById("fontSize").value)
    })

    document.getElementById("resetBtn").addEventListener('click', () => {
        localStorage.removeItem("bgColor")
        localStorage.removeItem("fontColor")
        localStorage.removeItem("fontSize")

        document.body.style.color = ""
        document.body.style.backgroundColor = ""
        document.body.classList.remove("small","medium","large")

        document.getElementById("bgColor").value = "#000000"
        document.getElementById("fontColor").value = "#000000"
        document.getElementById("fontSize").value = "small"
    })

})