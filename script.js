
//MY API KEY
var apikey = {
    key : '8afe1122-2d99-4d5b-8b8b-ded3bf718c7d'
}
//GET FETCH REQUISITION
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_KEY=' + 
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao   execultar a requisição,status' + response.status);
        return response.json();

    })
    .then((api) => {
        console.log(api);

    })
    .catch((error) => {
        console.error(error.message);
    });