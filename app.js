const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Funciton jo markdown ko HTML main convert kere
function updatePreview() {
    const markdownText = editor.value;
    preview.innerHTML = marked.parse(markdownText);
}

// Event listener jo har keystroke par run hoga
editor.addEventListener('input', updatePreview);

updatePreview(); // Initial preview update