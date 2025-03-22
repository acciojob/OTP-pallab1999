const codes = document.querySelectorAll('.code');

// Automatically focus on the first input field
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("input", (event) => {
        const value = event.target.value;
        
        // Ensure only one digit is entered
        event.target.value = value.replace(/[^0-9]/g, "").slice(0, 1);
        
        // Move to the next box if a number is entered
        if (value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
            // If the current input is empty, move focus to the previous input
            if (!event.target.value && idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });

    code.addEventListener("paste", (event) => {
        event.preventDefault(); // Prevent default paste behavior
        const pastedData = event.clipboardData.getData("text").replace(/[^0-9]/g, ""); // Get numbers only

        if (pastedData.length === codes.length) {
            // Distribute pasted values across inputs
            codes.forEach((code, index) => {
                code.value = pastedData[index] || "";
            });
            codes[codes.length - 1].focus(); // Move focus to the last input
        }
    });
});
