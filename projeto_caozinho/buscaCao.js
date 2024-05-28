document.addEventListener('DOMContentLoaded', function() {
  carregaInfosCao();
});


function carregaInfosCao() {

  const urlBusca = 'https://api.thedogapi.com/v1/images/search?include_breed=1';
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'live_KKL13lhprAQayxXdmN8kSYQosGQJDpDENnpVd4k6eTvyzN8JLd9OPobKn3pCveTo'
    }
  };


  fetch(urlBusca, options)
  .then(response => response.json())
  .then(data => {
      document.getElementById('imagemCao').src = data[0].url;

      if (data[0].breeds[0]) {
        document.getElementById('itemRaca').textContent = 'Raça: ' + data[0].breeds[0].name;
        document.getElementById('itemTemperamento').textContent = 'Temperamento: ' +  data[0].breeds[0].temperament;
        document.getElementById('itemPeso').textContent = 'Faixa de peso: ' +  data[0].breeds[0].weight.metric + 'Kg';
      } else {
	document.getElementById('itemRaca').textContent = 'Informações não disponíveis';
        document.getElementById('itemTemperamento').textContent = '';
        document.getElementById('itemPeso').textContent = '';
      }


    }).catch(error => console.error('Erro ao buscar dados sobre o cachorro, tente novamente'));
  }

document.getElementById('btnCarregarNovoCao').addEventListener('click', carregaInfosCao);

