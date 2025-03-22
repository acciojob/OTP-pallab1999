document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll(".code");

    // Ensure focus is on the first input after a slight delay
    setTimeout(() => codes[0].focus(), 50);

    codes.forEach((code, idx) => {
        code.addEventListener("input", (event) => {
            const value = event.target.value.replace(/[^0-9]/g, "").slice(0, 1);
            event.target.value = value; // Restrict to one digit

            if (value && idx < codes.length - 1) {
                setTimeout(() => codes[idx + 1].focus(), 50); // Small delay for smooth focus transition
            }
        });

        code.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && !event.target.value && idx > 0) {
                setTimeout(() => codes[idx - 1].focus(), 50); // Ensure focus moves correctly on delete
            }
        });

        code.addEventListener("paste", (event) => {
            event.preventDefault();
            const pastedData = event.clipboardData.getData("text").replace(/[^0-9]/g, "");

            if (pastedData.length === codes.length) {
                codes.forEach((input, index) => {
                    input.value = pastedData[index] || "";
                });
                setTimeout(() => codes[codes.length - 1].focus(), 50);
            }
        });
    });
});


