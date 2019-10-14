package com.skilldistillery.concert.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.concert.entities.Concert;
import com.skilldistillery.concert.services.ConcertService;

@RestController
@CrossOrigin({ "*", "http://localhost:4203" })
@RequestMapping("api")
public class ConcertController {
	@Autowired
	private ConcertService svc;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
//Count for aggregate
	
	@GetMapping("concerts")
	public List<Concert> concertList(HttpServletResponse resp) {
		List<Concert> concert = svc.findAll();
		return concert;
	}

	@GetMapping("concerts/{id}")
	public Concert getConcert(@PathVariable("id") Integer id, HttpServletResponse resp) {
		Concert concert = svc.findById(id);
		return concert;
	}

	@GetMapping("concerts/search/{keyword}")
	public List<Concert> searchKeyword(@PathVariable("keyword") String keyword, HttpServletResponse resp) {
		List<Concert> concert = svc.findByKeyword(keyword);
		return concert;
	}

	@GetMapping("concerts/search/year/{year}")
	public List<Concert> searchYear(@PathVariable("year") String year, HttpServletResponse resp) {
		List<Concert> concert = svc.findByYear(year);
		return concert;
	}
	@GetMapping("concerts/search/artist/{artist}")
	public List<Concert> searchArtist(@PathVariable("artist") String artist, HttpServletResponse resp) {
		List<Concert> concert = svc.findByArtist(artist);
		return concert;
	}
	@GetMapping("concerts/search/genre/{genre}")
	public List<Concert> searchGenre(@PathVariable("genre") String genre, HttpServletResponse resp) {
		List<Concert> concert = svc.findByGenre(genre);
		return concert;
	}
	@GetMapping("concerts/search/state/{state}")
	public List<Concert> searchState(@PathVariable("state") String state, HttpServletResponse resp) {
		List<Concert> concert = svc.findByState(state);
		return concert;
	}

	@PostMapping("concerts")
	public Concert addConcert(@RequestBody Concert concert, HttpServletResponse resp, HttpServletRequest req) {
		try {
			svc.create(concert);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			System.err.println(url);
			url.append("/");
			url.append(concert.getId());
			resp.setHeader("Location", url.toString());
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return concert;
	}

	@PutMapping("concerts/{id}")
	public Concert editConcert(@PathVariable("id") Integer id, @RequestBody Concert concert, HttpServletResponse resp,
			HttpServletResponse req) {
		try {
			concert = svc.update(concert, id);
			if (concert == null) {
				resp.setStatus(404);
			} else {
				resp.setStatus(201);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
		return concert;
	}

	@DeleteMapping("concerts/{id}")
	public void destroyConcert(@PathVariable("id") Integer id, HttpServletResponse resp) {
		Boolean success = svc.delete(id);
		try {
			if (success) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
		}

	}
}
