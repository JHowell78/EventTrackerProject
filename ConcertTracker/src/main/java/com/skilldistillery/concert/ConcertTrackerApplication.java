package com.skilldistillery.concert;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.skilldistillery.concert")
@EntityScan("com.skilldistillery.concert")
public class ConcertTrackerApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ConcertTrackerApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ConcertTrackerApplication.class, args);
	}

}
