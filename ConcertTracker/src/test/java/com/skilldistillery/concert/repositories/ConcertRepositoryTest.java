package com.skilldistillery.concert.repositories;
import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.concert.entities.Concert;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConcertRepositoryTest {
	@Autowired
	private ConcertRepository repo;

	@Test
	public void postIDTEST() {
		Optional<Concert> concertId = repo.findById(1);
		if (concertId.isPresent()) {
			Concert concertGet = concertId.get();
			assertEquals("Phish", concertGet.getArtist());
		}
	}
	@Test
	public void findAll() {
		List<Concert> concert = repo.findAll();
		assertEquals(20, concert.size());

		}


}
