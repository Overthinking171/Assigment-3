const active = document.querySelector('#active')
const baru = document.querySelector('#new')
const recover = document.querySelector('#recover')
const total = document.querySelector('#total')
const deaths = document.querySelector('#deaths')
const test = document.querySelector('#test')


const button = document.querySelector('#btn')
const input = document.querySelector('#search')

button.addEventListener('click', async () => {
	const date = new Date();
	const today = date.toISOString().slice(0,10);

	console.log(input.value);

	const url = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`

	const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '27cb056452msh5b5828efe9719d6p10a1d5jsnb2a20a48df72',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data, "<<< in data")
    if (data.response.length){
        const dataResponse = data.response[0];

        console.log(dataResponse);

        active.innerText = dataResponse.cases.active;
        baru.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
        recover.innerText = dataResponse.cases.recovered;
        total.innerText = dataResponse.cases.total;
        deaths.innerText = dataResponse.deaths.total
        test.innerText = dataResponse.tests.total;
    }
})