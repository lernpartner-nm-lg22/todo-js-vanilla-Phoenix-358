const goalInput = document.getElementById('goal')
const button = document.getElementById('submit')
const goalsList = document.getElementById('list')


// --- adding goals by pressing button ---

button.addEventListener('click', () => {
    const goal = goalInput.value.trim()
    const listContent = document.createElement('li')
    listContent.textContent = goal
    goalsList.appendChild(listContent)
})

// --- removing goals by clicking on list ---

// function removeGoal(event) {
//     const listContent = event.target
//     goalsList.removeChild(listContent)
// }

// --- checking off goals by clicking on them --- 

goalsList.addEventListener('click', (event) => {
    const listContent = event.target
    listContent.classList.toggle('done')
})