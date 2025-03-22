const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("input", () => {
        if (code.value && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener("keyup", (event) => {
        if (event.key === "Backspace" && idx > 0) {
            codes[idx - 1].focus();
        }
    });
});
