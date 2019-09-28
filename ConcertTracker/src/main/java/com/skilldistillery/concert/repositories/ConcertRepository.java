package com.skilldistillery.concert.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.concert.entities.Concert;

public interface ConcertRepository extends JpaRepository<Concert, Integer> {

	List<Concert> findByArtistLikeOrGenreLikeOrStateLike(String keyword, String keyword2, String keyword3);
	List<Concert> findByDateContaining(String year);

}
