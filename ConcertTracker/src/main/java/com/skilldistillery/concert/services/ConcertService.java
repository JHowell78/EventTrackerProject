package com.skilldistillery.concert.services;

import java.util.List;

import com.skilldistillery.concert.entities.Concert;

public interface ConcertService {
	Concert findById(int id);

	List<Concert> findAll();

	Concert update(Concert concert, int id);

	Concert create(Concert concert);

	Boolean delete(int id);

	List<Concert> findByKeyword(String keyword);
	
	List<Concert> findByYear(String year);
}
