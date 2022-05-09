document.querySelector('button').addEventListener('click', loadQuote)

function loadQuote(){
    let url = `https://type.fit/api/quotes`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data)
			let i = Math.floor(Math.random() * 1463 )
      document.querySelector('.quote').innerText = data[i].text
      document.querySelector('span').innerText = '- ' + data[i].author
			
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
};


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'university-college-list-and-rankings.p.rapidapi.com',
// 		'X-RapidAPI-Key': '21f4177f8cmsh38ffd3ab9b31043p1c2002jsn222fb7a50fe1'
// 	}
// };

// fetch('https://university-college-list-and-rankings.p.rapidapi.com/api/top-universities/us', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

