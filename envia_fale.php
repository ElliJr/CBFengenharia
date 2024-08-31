<?

# alterar a variavel abaixo colocando o seu email

$destinatario = "christopher.bfs@hotmail.com.br";

$nome = $_REQUEST['nome'];
$telefone = $_REQUEST['telefone'];
$email = $_REQUEST['email'];
$cidadeObra = $_REQUEST['cidadeObra'];
$deixarMensagem = $_REQUEST['deixarMensagem'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "telefone: " . $telefone . "\n";
$body = $body . "Email: " . $email . "\n\n";
$body = $body . "CidadeObra: " . $cidadeObra . "\n\n";
$body = $body . "DeixarMensagem: " . $deixarMensagem . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $cidadeObra , $body, "From: $email\r\n");

// redireciona para a página de obrigado
header("location:obrigado.htm");


?>