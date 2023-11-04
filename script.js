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
            { name: "Dra. Maria Santos", crm: "67890", image: "doctor2.jpg" },
            { name: "Dr. Diogo Loula", crm: "67890", image: "doctor2.jpg" }
        ],
        "Angiologia": [
            { name: "Dr. Pedro Souza", crm: "54321", image: "doctor3.jpg" },
            { name: " Dr. Leandro Fernandes ", crm: "54321", image: "doctor3.jpg" },
            { name: " Dr. Everton Pimenta", crm: "54321", image: "doctor3.jpg" },
            { name: " Dr. Magno Baunieri", crm: "54321", image: "doctor3.jpg" }

        ],
        "Cardiologia": [
            { name: "Dra. Laura Fernandes", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Ana Carla Dourado", crm: "98765", image: "doctor4.jpg" }
        ],
       
        "Cardiologia Pediátrica": [
            { name: "Dra. Raquel Machado", crm: "98765", image: "doctor4.jpg" }
        ],

        "Nutrição": [
            { name: "Dra. Talita Vilela", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Lidiane Martins ", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Sthefani Guimarães", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Catarina Figueiredo", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Caique Ramalho", crm: "98765", image: "doctor4.jpg" },

            
        ],

        "Estomaterapia": [
            { name: "Enf. Lucas Humberto", crm: "98765", image: "doctor4.jpg" },
            
        ],
        "Cirurgia Geral": [
            { name: "Dr. Carlos Alberto ", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Marcus Lima", crm: "98765", image: "doctor4.jpg" }
            
        ],
        "Cirurgia Bucomaxilofacial": [
            { name: "Dr. Eduardo Miranda", crm: "98765", image: "doctor4.jpg" },
            
        ],
        "Ortopedia": [
            { name: "Dr. José Victor Lucena", crm: "98765", image: "doctor4.jpg" },
            { name: " Dr. Bruno Barreto ", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Felipe Sodré", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Wesley Dourado", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Clauser Lima", crm: "98765", image: "doctor4.jpg" }
        ],
        "Pediatria": [
            { name: "Dr. José Domingos", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Lara Torres", crm: "98765", image: "doctor4.jpg" }
        ],
        "Psiquiatria": [
            { name: "Dr. Aldo Rocha", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Thyandra Diniz", crm: "98765", image: "doctor4.jpg" }
        ],
        "Gastroenterologia": [
            { name: "Dra. Aline Loyola", crm: "98765", image: "doctor4.jpg" }
        ],
        "Fisioterapia": [
            { name: "Dra. Bárbara Melo", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Samantha Portugal", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Dra. Brenda Lorrana ", crm: "98765", image: "doctor4.jpg" }
        ],
        "Otorrinolaringologista": [
            { name: "Dra. Manuella Martins", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Everton Torres", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Narjara Lelis", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Mirele Andrade", crm: "98765", image: "doctor4.jpg" }
        ],
        "Mastologia": [
            { name: "Dra. Fernanda Barreto", crm: "98765", image: "doctor4.jpg" }
        ],
        "Pneumologia": [
            { name: "Dra. Nara Loula", crm: "98765", image: "doctor4.jpg" }
        ],
        "Ginecologia": [
            { name: "Dra. Fernanda Barreto", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Ingrid Vieira", crm: "98765", image: "doctor4.jpg" },
            { name: "Dr. Autran Machado", crm: "98765", image: "doctor4.jpg" }
        ],
        "Obstetria": [
            { name: "Dra. Fernanda Barreto", crm: "98765", image: "doctor4.jpg" }
        ],
        "Fonoaudiologia": [
            { name: "Dra. Kell Soares", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Alana Franca", crm: "98765", image: "doctor4.jpg" }
        ],
        "Oftamologista": [
            { name: "Dra. Bárbara Emilly", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Sheila Cecchetti", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Danirele Ribeiro", crm: "98765", image: "doctor4.jpg" }
        ],
        "Psiologia": [
            { name: "Dra. Layla Dourado", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Laianne Barreto", crm: "98765", image: "doctor4.jpg" }
        ],
        "Dermatologia": [
            { name: "Dr. Thales Matos", crm: "98765", image: "doctor4.jpg" }
        ],
        "Neurologia": [
            { name: "Dr. Adilson Galvão", crm: "98765", image: "doctor4.jpg" },
            { name: "Dra. Tônia Vilela", crm: "98765", image: "doctor4.jpg" }
        ],
        "Endocrinologia": [
            { name: "Dra. Sarah Guimarães", crm: "98765", image: "doctor4.jpg" }
        ],
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
