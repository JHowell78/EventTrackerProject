window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	document.filmForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var filmId = document.filmForm.filmId.value;
		if (!isNaN(filmId) && filmId > 0) {
			getFilm(filmId);
		}
	});
	document.createFilm.create.addEventListener('click', addNewFilm);
}

function getFilm(filmId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/films/' + filmId);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("Success");
				let filmJson = xhr.responseText;
				let film = JSON.parse(filmJson);
				displayFilm(film);
				getActors(film.id);
			} else {
				let div = document.getElementById("filmData");
				div.textContent = ("Film not found.");
				console.log("Film not found.");
				clearCastDiv();
			}
		}

	};
	xhr.send(null);
}

function displayFilm(film) {
	var filmDataDiv = document.getElementById('filmData');
	filmDataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = film.title;
	filmDataDiv.appendChild(h1);

	let blockquote = document.createElement('blockquote');
	blockquote.textContent = film.description;
	filmDataDiv.appendChild(blockquote);

	let ul = document.createElement('ul');
	filmDataDiv.appendChild(ul);

	let li = document.createElement('p');
	li.textContent = "Rating: " + film.rating;
	ul.appendChild(li);

	let li2 = document.createElement('p');
	li2.textContent = "Year: " + film.releaseYear;
	ul.appendChild(li2);

	let li3 = document.createElement('p');
	li3.textContent = "Length: " + film.length;
	ul.appendChild(li3);

	let li4 = document.createElement('p');
	li4.textContent = "Language: " + film.language.name;
	ul.appendChild(li4);
}

// let actors = document.createElement('ul');
// for (let i = 0; i < film.actors.length; i++) {
// let li4 = document.createElement('li');
// li4.textContent = film.actors[i].firstName + " "
// + film.actors[i].lastName;
// actors.appendChild(li4);
//
// }
// filmDataDiv.appendChild(actors);

function getActors(filmId) {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', '/api/films/' + filmId + "/actors");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let castJson = xhr.responseText;
				let cast = JSON.parse(castJson);
				console.log("Actors retrieved");
				displayActors(cast);
			} else {
				console.log("No actors");
				clearCastDiv();
			}
		}
	};
	xhr.send(null);
}
function displayActors(actors) {
	console.log(actors);
	let actorDataDiv = document.getElementById('actorData');
	actorDataDiv.textContent = '';

	if (!actors || actors.length < 1) {
		return;
	}

	let h3 = document.createElement('h3');
	h3.textContent = "Cast: ";
	actorDataDiv.appendChild(h3);

	let ul = document.createElement('ul');
	actorDataDiv.appendChild(ul);

	let li;
	for (let i = 0; i < actors.length; i++) {
		li = document.createElement('li');
		li.textContent = actors[i].firstName + " " + actors[i].lastName;
		ul.appendChild(li);
	}
}
function addNewFilm(evt) {
	evt.preventDefault();
	let form = document.createFilm;

	let film = {
		title : form.title.value,
		description : form.description.value,
		releaseYear : form.releaseYear.value,
		rating : form.rating.value,
		length : form.length.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/api/films');
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let filmJson = xhr.responseText;
				let film = JSON.parse(filmJson);
				console.log(film);
				displayFilm(film);
			} else {
				clearCastDiv();

			}
		}
	};
	let filmJson = JSON.stringify(film)
	xhr.send(filmJson);
	form.reset();

}

function clearCastDiv() {
	console.log("clearCastDiv");
	let actorDiv = document.getElementById('actorData');
	actorDiv.textContent = '';
}

// function getActors(filmId) {
// var xhr = new XMLHttpRequest();
//
// xhr.open('GET', 'http://localhost:8081/api/films/{id}/actors/' + filmId);
//
// xhr.onreadystatechange = function() {
// if (xhr.readyState === 4) {
// if (xhr.status < 400) {
// console.log("Success");
// var data = JSON.parse(xhr.responseText);
// displayFilm(data);
// } else {
// console.log("Film not found.");
// }
// }
//
// };
// xhr.send(null);
// }
// function displayActors(film) {
// console.log(film);
// var actorDataDiv = document.getElementById('actorData');
// console.log(film);
// let actors = document.createElement('ul');
// for (let i = 0; i < film.actors.length; i++) {
// let li = document.createElement('li');
// li.textContent = film.actors[i].firstName + " "
// + film.actors[i].lastName;
// actors.appendChild(li4);
// }
// actorDataDiv.appendChild(actors);
// }
