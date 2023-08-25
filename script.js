document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const valor = document.getElementById("valor");
    const button = document.getElementById("button");
    const passwordContainer = document.getElementById("container-password");
    const generatedPassword = document.getElementById("password");

    slider.addEventListener("input", function() {
        valor.textContent = this.value;
    });

    button.addEventListener("click", function() {
        const passwordLength = slider.value;
        const newPassword = generatePassword(passwordLength);
        generatedPassword.textContent = newPassword;
        passwordContainer.classList.remove("hide");
    });

    generatedPassword.addEventListener("click", function() {
        const range = document.createRange();
        range.selectNode(this);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Senha copiada para a área de transferência!");
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        return password;
    }
});
