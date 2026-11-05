const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const themeToggle = document.getElementById('themeToggle');
const mode = document.getElementById('Mode');
const box = document.querySelector('.box')

// Funciton jo markdown ko HTML main convert kere
function updatePreview() {
    const markdownText = editor.value;
    preview.innerHTML = marked.parse(markdownText);
}

// Event listener jo har keystroke par run hoga
editor.addEventListener('input', updatePreview);

updatePreview(); // Initial preview update

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked){
        mode.innerHTML = "Dark Mode";
        document.body.classList.add('dark-mode');

    }
    else {
        mode.innerHTML = "Light Mode";
        document.body.classList.remove('dark-mode');
    }
})