// array de usuários contendo: nome, idade e email
const users = [
    { nome: 'João', idade: 25, email: 'joao@example.com' },
    { nome: 'Maria', idade: 30, email: 'maria@example.com' },
    { nome: 'Pedro', idade: 35, email: 'pedro@example.com' },
    { nome: 'Ana', idade: 18, email: 'ana@example.com' },
    { nome: 'Rafael', idade: 31, email: 'rafael@example.com' },
    { nome: 'Marcela', idade: 41, email: 'marcela@example.com' },
  ];
  
//   uma promise que receba o array de usuários e o valor que deseja pesquisar
  function searchUser(array, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Esta promise deve percorrer todos os usuários e retornar o primeiro que tenha o mesmo valor solicitado em alguma das propriedades.
        const user = array.find(user => Object.values(user).includes(value));
        // Retorna o usuário encontrado
        if (user) {
          resolve(user);
        //   Se não encontrar nenhum dado, o código deve tratar um erro para cair no catch.
        } else {
          reject(new Error('Nenhum usuário encontrado com o valor fornecido.'));
        }
      }, 1000);
    });
  }
  
  // Valor a ser pesquisado
  const valueToSearch = 'João';

  // Retorno do valor pesquisado
  searchUser(users, valueToSearch)
    .then(user => {
      console.log('Usuário encontrado:', user);
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
  