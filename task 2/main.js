const body = document.querySelector('body')
const form = document.querySelector('form')
const btn = document.querySelector('button')
const colors = ['red','blue','green','black','white']

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const input = document.querySelector('input')

    if(!input.value){
        alert("please enter color")
        return
    }

    if(input.value != colors[0]){
        alert("please enter red, blue, green, black or white color")
        return
    }

    if(input.value === colors[0]){
        body.style.background = "red"
        input.value = ''
        return
    }

    if(input.value === colors[1]){
        body.style.background = "blue"
        input.value = ''
        return
    }

    if(input.value === colors[2]){
        body.style.background = "green"
        input.value = ''
        return
    }

    if(input.value === colors[3]){
        body.style.background = "black"
        input.value = ''
        return
    }

    if(input.value === colors[4]){
        body.style.background = "white"
        input.value = ''
        return
    }
})

