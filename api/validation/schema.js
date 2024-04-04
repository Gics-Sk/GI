import * as yup from 'yup';


const schema = yup.object().shape({
    nom: yup.string().required("Veuillez entrer votre nom."),
    prenom: yup.string().required("Veuillez entrer votre prénom."),
    message: yup.string().required("Veuillez entrer votre message."),
});


document.getElementById('submitButton').addEventListener('click', async function(event) {
    event.preventDefault();

    const formData = {
        nom: document.querySelector('input[name="nom"]').value,
        prenom: document.querySelector('input[name="prenom"]').value,
        message: document.querySelector('textarea[name="message"]').value,
    };

    try {
        await schema.validate(formData, { abortEarly: false });
        console.log("Formulaire valide. Envoyer la requête...");
    } catch (error) {
        if (error.inner) {
            error.inner.forEach(err => {
                const fieldName = err.path;
                const errorMessage = err.message;
                const errorElement = document.createElement('div');
                errorElement.innerText = errorMessage;
                document.querySelector(`[name="${fieldName}"]`).insertAdjacentElement('afterend', errorElement);
            });
        }
    }
});
  