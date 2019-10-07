window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	document.getElementById('allConcerts').addEventListener('click',
			function(e) {
				e.preventDefault();
				getallConcerts();
			});

	document.concertFormId.search.addEventListener('click', function(event) {
		event.preventDefault();
		var concertId = document.concertFormId.concertId.value;
		if (!isNaN(concertId) && concertId > 0) {
			getConcert(concertId);
		}
	});
	document.addConcert.create.addEventListener('click', addNewConcert);
}

function getConcert(concertId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/concerts/' + concertId);
	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("Success");
				let concert = JSON.parse(xhr.response);
				showConcert(concert);
			} else {
				let div = document.getElementById("concertData");
				div.textContent = ("Concert not found.");
				console.log("Concert not found.");
			}
		}
	};
	xhr.send(null);
}

function showConcert(concert) {
	var dataDiv = document.getElementById('concertData');
	dataDiv.textContent = '';

	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);

	let h1 = document.createElement('p');
	h1.textContent = "Artist: " + concert.artist;
	ul.appendChild(h1);

	let li = document.createElement('p');
	li.textContent = "Venue: " + concert.venue;
	ul.appendChild(li);

	let li1 = document.createElement('p');
	li1.textContent = "City: " + concert.city;
	ul.appendChild(li1);

	let li2 = document.createElement('p');
	li2.textContent = "State: " + concert.state;
	ul.appendChild(li2);

	let li3 = document.createElement('p');
	li3.textContent = "Genre: " + concert.genre;
	ul.appendChild(li3);

	let li4 = document.createElement('p');
	li4.textContent = "Date: " + concert.date;
	ul.appendChild(li4);

	let editButton = document.createElement('button');
	editButton.innerHTML = "Edit Concert";
	dataDiv.appendChild(editButton);
	editButton.addEventListener('click', function(e) {
		e.preventDefault();
		editConcertForm(concert);
	});

	document.getElementById('editConcert').addEventListener('click',
			function(e) {
				e.preventDefault();
				let form = document.getElementById('editForm');
				editConcert(concert);
			});

	let remove = document.createElement('button');
	remove.innerHTML = "Delete Concert";
	dataDiv.appendChild(remove);
	remove.addEventListener('click', function(e) {
		e.preventDefault();
		removeConcert(concert.id);
		dataDiv.textContent = ("Deleted")
		
	});

}

function getallConcerts() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/concerts');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let concerts = JSON.parse(xhr.response);
				allConcerts(concerts);
			}
		}
	}
	xhr.send();
}

function allConcerts(concerts) {
	let dataDiv = document.getElementById('concertData');
	dataDiv.textContent = '';
	let table = document.createElement('table');
	dataDiv.appendChild(table);
	concerts.forEach(function(concert, index) {
		let tr = document.createElement('tr');
		let td = document.createElement('td');

		td.textContent = concert.id + " " + concert.artist;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = concert.venue;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = concert.city;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = concert.state;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = concert.genre;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = concert.date;
		tr.appendChild(td);

		table.appendChild(tr);

		tr.addEventListener('click', function(e) {
			getConcert(concert.id);
		});

	});
}

function addNewConcert(evt) {
	evt.preventDefault();
	let form = document.addConcert;
	let concert = {
		artist : form.artist.value,
		venue : form.venue.value,
		city : form.city.value,
		state : form.state.value,
		genre : form.genre.value,
		date : form.date.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/api/concerts');
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let concertJson = xhr.responseText;
				let concert = JSON.parse(concertJson);
				getallConcerts();

			}
		}
	};
	let concertJson = JSON.stringify(concert)
	xhr.send(concertJson);
	form.reset();

}

function editConcert(concert) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', '/api/concerts/' + concert.id);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var park = JSON.parse(xhr.responseText);
				showConcert(concert);
			}
		}
	};
	let form = document.getElementById('editForm');
	let edit = {
		artist : form.artist.value,
		venue : form.venue.value,
		city : form.city.value,
		state : form.state.value,
		genre : form.genre.value,
		date : form.date.value
	}
	xhr.send(JSON.stringify(edit));
	showConcert(concert.id);
}

function editConcertForm(concert) {
	let editForm = document.getElementById('editForm');
	editForm.artist.value = concert.artist;
	editForm.venue.value = concert.venue;
	editForm.city.value = concert.city;
	editForm.state.value = concert.state;
	editForm.genre.value = concert.genre;
	editForm.date.value = concert.date;

	let editConcertDiv = document.getElementById('editConcertDiv');
	editConcertDiv.style.display = "block";

}

function removeConcert(concertId) {
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/concerts/' + concertId);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {

		let dataDiv = document.getElementById('concertForm');
		let mesage = document.createElement('li');
		mesage.textContent = ("Concert Successfully Removed!");
		dataDiv.appendChild(mesage);
	};
	xhr.send();

}
