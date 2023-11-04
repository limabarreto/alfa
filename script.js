document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.getElementById("close-button");
    const doctorsContainer = document.querySelector(".doctors");

    // Crie um objeto com os médicos por especialidade
    const doctorsData = {
        "Anestesiologia": [
            { name: "Dr. João Silva", crm: "12345", image: "doctor1.jpg" },
            { name: "Dra. Maria Santos", crm: "67890", image: "doctor2.jpg" }
        ],
        "Angiologia": [
            { name: "Dr. Pedro Souza", crm: "54321", image: "doctor3.jpg" }
        ],
        "Cardiologia": [
            { name: "Dra. Laura Fernandes", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Carlos Oliveira", crm: "45678", image: "doctor5.jpg" }
        ],
        // Adicione mais especialidades e médicos conforme necessário
    };

    cards.forEach(card => {
        card.addEventListener("click", function () {
            openModal(card);
            loadDoctors(card.querySelector("h2").textContent);
        });
    });

    function openModal(card) {
        modalTitle.textContent = card.querySelector("h2").textContent;
        modalDescription.textContent = card.querySelector("p").textContent;
        modal.style.display = "block";
    }

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function loadDoctors(specialityName) {
        doctorsContainer.innerHTML = "";

        if (doctorsData.hasOwnProperty(specialityName)) {
            const doctors = doctorsData[specialityName];
            doctors.forEach(doctor => {
                const doctorCard = document.createElement("div");
                doctorCard.classList.add("doctor-card");

                const doctorImage = document.createElement("img");
                doctorImage.src = doctor.image;

                const doctorName = document.createElement("h3");
                doctorName.textContent = doctor.name;

                const doctorCRM = document.createElement("p");
                doctorCRM.textContent = "CRM: " + doctor.crm;

                doctorCard.appendChild(doctorImage);
                doctorCard.appendChild(doctorName);
                doctorCard.appendChild(doctorCRM);

                doctorsContainer.appendChild(doctorCard);
            });
        }
    }
});
