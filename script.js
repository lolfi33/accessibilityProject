
document.getElementById("proposeMangaForm").addEventListener("submit", validateForm);

window.onload = function() {
    const modal = document.getElementById("proposeMangaModal");
    modal.style.display = "none";
};

document.getElementById("proposeMangaBtn").addEventListener("click", openModal);

function openModal() {
    const modal = document.getElementById("proposeMangaModal");
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    const modal = document.getElementById("proposeMangaModal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    resetForm(); 
}

function resetForm() {
    document.getElementById("proposeMangaForm").reset();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("yearError").textContent = "";
}

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const year = document.getElementById("year").value.trim();
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const yearError = document.getElementById("yearError");

    // Réinitialise les messages d'erreur
    nameError.textContent = "";
    emailError.textContent = "";
    yearError.textContent = "";

    let isValid = true;

    // Vérifie que le champ "Nom" n'est pas vide
    if (!name) {
        nameError.textContent = "Veuillez saisir le nom de l'œuvre.";
        isValid = false;
    }

    // Vérifie que le champ "Email" n'est pas vide et est valide
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression pour vérifier le format de l'email
    if (!email) {
        emailError.textContent = "Veuillez saisir une adresse e-mail.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "L'email semble invalide.";
        isValid = false;
    }

    if (!year) {
        yearError.textContent = "Veuillez saisir une année de sortie.";
        isValid = false;
    } else if (!Number.isInteger(Number(year))) {
        yearError.textContent = "L'année de sortie doit être un nombre entier.";
        isValid = false;
    }

    // Si tous les champs sont valides, soumet le formulaire
    if (isValid) {
        name.textContent = "";
        email.textContent = "";
        year.textContent = "";
        closeModal();
    }
}

