fetch('./assets/datas/schema.json')
    .then(response => response.json())
    .then(data => {
      const scriptTag = document.getElementById('structured-data')
      scriptTag.textContent = JSON.stringify(data)
    })
    .catch(error => console.error('Erreur lors du chargement des données structurées :', error))