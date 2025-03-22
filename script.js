const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("input", (event) => {
        if (event.inputType === "insertText" && idx < codes.length - 1) {
            codes[idx + 1].focus();
        } else if (event.inputType === "deleteContentBackward" && idx > 0) {
            codes[idx - 1].focus();
        }
    });
});