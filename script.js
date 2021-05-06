// Variables
const insert = document.getElementById('insert')

// Function
window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.KeyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})