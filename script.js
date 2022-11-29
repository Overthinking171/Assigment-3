// funtion getData 


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '652b35af7emsh8fa02c7e03b4358p1a7a8ejsna684ccfd96e1',
			'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
		}
	};
	
	fetch('https://covid-193.p.rapidapi.com/history?country=indonesia&day=2020-06-02', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

// function showData