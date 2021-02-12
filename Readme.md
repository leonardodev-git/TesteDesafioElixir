O arquivo contém duas listas:

A primeira contém a lista do supermercado, com as chaves, item, preço e quantidade.

A segunda lista contém o nome da pessoa com seu respectivo email.

A função, relatórioDeCompras, quando executada, fará uma primeira análise, caso não tenha nenhum item tanto no array listaDeCompras quanto em listaDeEmail, a função retornará a seguinte mensagem:  A Lista de compras está vazia e sem nenhum Email.

Entretanto, caso receba algum item, ela passará para a const totalDasCompras e fará o cálculo do valor total das compras.

Depois disso ela passará para const valorDaDivisao, e nesse método, primeiro ela fará a divisão entre o número  de emails pelo seu valor total, arrendondando para baixo eventual valor fracionado, em seguida ela irá continuar fazer as divisões até que chegue na última pessoa.  



Para rodar o programa, primeiramente deve-se instalar no node, versão 14.5.1, disponibilizado em https://nodejs.org/en/.

Depois disso, abra o terminal e dê o comando "node solucaoTesteElixir.js".
O console.log da linha 86, retornará o objeto com o mapa solicitado no desafio.