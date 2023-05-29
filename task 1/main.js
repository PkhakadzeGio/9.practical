const body = document.querySelector('body')

const btn = document.createElement('button')
btn.innerText = 'Open Modal'

const divModal = document.createElement('div')
divModal.classList.add("modal")

const divContent = document.createElement ('div')
divContent.classList.add("modal-content")

const h3 = document.createElement('h3')
h3.innerText = 'Que Passa?'

divContent.appendChild(h3)
divModal.appendChild(divContent)
body.append(divModal,btn)

btn.addEventListener("click", () =>  {
 divModal.style.display = "block";
})




