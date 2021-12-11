// Notes:
// e.target

const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

grandparent.addEventListener('click', e => {
  console.log('grandparent 1 - Capture')
}, { capture: true })

grandparent.addEventListener('click', e => {
  console.log('grandparent 1 - Bubble')
}, { once: true }) // event will happen only once

parent.addEventListener('click', e => {
  console.log('parent 2')
})

child.addEventListener('click', e => {
  // stops all capture or bubble events that would happen after this
  // e.stopPropagation()
  console.log('child 2')
})

document.addEventListener('click', e => {
  console.log('document')
})

setTimeout(() => {
  parent.removeEventListener('click', printHi)
}, 2000)

child.addEventListener('click', printHi)

function printHi() {
  console.log('Hi')
}

// Event delegation
const divs = document.querySelectorAll('div')

addGlobalEventListener('click', 'div', e => {
  console.log('global div hi event')
})

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'

document.body.append(newDiv)
