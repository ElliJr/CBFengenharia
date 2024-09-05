<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
    <body>
    <header>
      <h1>Seus dados</h1>
    </header>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Pega os dados do formulário
            $nome = $_POST['nome'];
            $telefone = $_POST['telefone'];
            $email = $_POST['email'];
            $cidadeObra = $_POST['cidadeObra'];
            $deixarMensagem = $_POST['deixarMensagem'];
        
            // Define o destinatário e o assunto do email
            $to = "ellijuniorsantosdejesus8@gmail.com.br";
            $subject = "Solicitação de Orçamento";
        
            // Cria o corpo do email
            $body = "Nome: $nome\n";
            $body .= "Telefone/WhatsApp: $telefone\n";
            $body .= "Email: $email\n";
            $body .= "Cidade da Obra: $cidadeObra\n";
            $body .= "Mensagem: $deixarMensagem";
        
            // Define os cabeçalhos do email
            $headers = "From: $email";
        
            // Envia o email
            if (mail($to, $subject, $body, $headers)) {
                echo "Orçamento solicitado com sucesso!";
            } else {
                echo "Ocorreu um erro ao enviar a solicitação.";
            }
        }
        ?>
    </body>
</html>
