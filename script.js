document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll('.code');

    // Automatically focus on the first input field when the page loads
    setTimeout(() => codes[0].focus(), 10);

    codes.forEach((code, idx) => {
        code.addEventListener("input", (event) => {
            const value = event.target.value.replace(/[^0-9]/g, "").slice(0, 1);
            event.target.value = value; // Ensure only one digit is entered

            if (value && idx < codes.length - 1) {
                codes[idx + 1].focus();
            }
        });

        code.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && !event.target.value && idx > 0) {
                setTimeout(() => codes[idx - 1].focus(), 10); // Delay focus shift slightly
            }
        });

        code.addEventListener("paste", (event) => {
            event.preventDefault();
            const pastedData = event.clipboardData.getData("text").replace(/[^0-9]/g, "");
            if (pastedData.length === codes.length) {
                codes.forEach((code, index) => {
                    code.value = pastedData[index] || "";
                });
                codes[codes.length - 1].focus();
            }
        });
    });
});

