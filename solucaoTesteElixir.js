const listaDeCompras = [
  {
    item: 'Arroz',
    preço: 233,
    quantidade: 2
  },
  {
    item: 'Feijão',
    preço: 523,
    quantidade: 1

  },
  {
    item: 'Leite',
    preço: 577,
    quantidade: 6
  },
  {
    item: 'Ovo',
    preço: 1035,
    quantidade: 1
  },
  {
    item: 'Pizza',
    preço: 1073,
    quantidade: 4
  },
]
const listaDeEmail = [
  {
    pessoa: 'Leonardo',
    email: 'leo.monteiro@gmail.com'
  },
  {
    pessoa: 'Luiz',
    email: 'luiz.dois@gmail.com',
  },
  {
    pessoa: 'Maria',
    email: 'maria.eduarda@hotmail.com'
  },
  {
    pessoa: 'Josefina',
    email: 'josefina.engenheira@hotmail.com'
  },
  {
    pessoa: 'Josefina2',
    email: 'josefina2.engenheira@hotmail.com'
  },
  {
    pessoa: 'Josefina3',
    email: 'josefina3.engenheira@hotmail.com'
  },
  {
    pessoa: 'Josefina4',
    email: 'josefina4.engenheira@hotmail.com'
  },
  {
    pessoa: 'Aurélio',
    email: 'dicionario.aurelio@gmail.com'
  }
];

const relatorioDeCompras = (arrCompras, arrEmails) => {

  if (arrCompras.length === 0 || arrEmails.length === 0) {
    return "A Lista de compras está vazia e sem nenhum Email"
  } else {
    const totalDasCompras = arrCompras.reduce((acumulador, item) => {
      acumulador += item.quantidade * item.preço;
      return acumulador;
    }, 0);

      const valorDaDivisao = arrEmails.reduce((acumulador, item) => {
      acumulador.valorDividido = Math.floor(acumulador.total /
         (arrEmails.length - Object.keys(acumulador.divisaoDasCompras).length));
      acumulador.total -= acumulador.valorDividido;
     acumulador.divisaoDasCompras[item.email] = acumulador.valorDividido;
      return acumulador;
       }, {
      total: totalDasCompras,
      valorDividido: 0,
      divisaoDasCompras: {},
    });
    return valorDaDivisao.divisaoDasCompras
    
  }
 
}


console.log(relatorioDeCompras(listaDeCompras, listaDeEmail));



