const getRepositories = () => (
  fetch('https://api.github.com/users/adrielerodr/repos')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Não foi possível consultar a lista de repositórios :(');
    }).catch((error) => {
      throw Error(error);
    })
);

export default getRepositories;
