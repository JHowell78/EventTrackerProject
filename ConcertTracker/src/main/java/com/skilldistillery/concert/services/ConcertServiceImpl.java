package com.skilldistillery.concert.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.concert.entities.Concert;
import com.skilldistillery.concert.repositories.ConcertRepository;

@Service
public class ConcertServiceImpl implements ConcertService {

	@Autowired
	private ConcertRepository repo;

	@Override
	public Concert findById(int id) {
		Optional<Concert> concertId = repo.findById(id);
		Concert concert = null;
		if (concertId.isPresent()) {
			concert = concertId.get();
		}
		return concert;
	}

	@Override
	public List<Concert> findAll() {
		return repo.findAll();
	}

	@Override
	public Concert update(Concert concert, int id) {
		Concert editConcert = findById(id);
		
		if (editConcert != null) {
			editConcert.setArtist(concert.getArtist());
			editConcert.setVenue(concert.getVenue());
			editConcert.setCity(concert.getCity());
			editConcert.setState(concert.getState());
			editConcert.setGenre(concert.getGenre());
			editConcert.setDate(concert.getDate());
		}
		return repo.saveAndFlush(editConcert);
	}

	
	@Override
	public Concert create(Concert concert) {
		return repo.saveAndFlush(concert);
	}

	@Override
	public Boolean delete(int id) {
		Boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public List<Concert> findByKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return repo.findByArtistLikeOrGenreLikeOrStateLike(keyword, keyword, keyword);
	}

	@Override
	public List<Concert> findByYear(String year) {
		return repo.findByDateContaining(year);
	}

}
