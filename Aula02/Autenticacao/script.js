        // https://www.google.com/recaptcha/admin/create
 
        document.getElementById('login').addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const recaptchaResponse = grecaptcha.getResponse();

            if (recaptchaResponse.length === 0) {
                alert('Por favor, verifique se você não é um robô');
                return; // Vai retornar que não é um robô
            }
            
            const usuario = {
                email: email,
                status: 'Aprovado',
            }

            const blob = new Blob([JSON.stringify(usuario, null, 2)], {
                type: 'application/json'
            }); // Blob é um objeto que representa um arquivo de dados bruto
            const link = document.createElement('a'); // Cria um elemento <a>
            link.href = URL.createObjectURL(blob); // Cria um URL temporário para o Blob
            link.download = 'login.json'; // Define o nome do arquivo
            link.click(); // Simula um clique no link para Baixar o arquivo
        })