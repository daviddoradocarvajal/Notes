package com.indra.notes.controller;

import java.io.IOException;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.indra.notes.entity.Note;
import com.indra.notes.model.GestorNote;
import com.indra.notes.persistence.NoteRepository;

@RestController
public class NotesController {
	
	@Autowired
	GestorNote noteService;
	
	@Autowired
	NoteRepository noteRepository;
	
	public NotesController() {
		System.out.println("Creando controller");
	}

	
	@GetMapping(path ="/listNotes", headers = "Accept=*/*", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.ALL_VALUE)
	public ResponseEntity<?> listNotes() {
		System.out.println("POR AQUI");
		var note = new Note();
		
		note.setId(1);
		note.setDescripcion("test");
		note.setIsFavorite(true);
		note.setTitulo("dasdas");
		note.setTimestamp(LocalDateTime.now());
	
		String jsonStr = "";
		
		try {
			ObjectMapper obj = new ObjectMapper();
			obj.registerModule(new JavaTimeModule());
			 jsonStr = obj.writeValueAsString(note);
			
		}catch(IOException ex) {
			ex.printStackTrace();
		}
		
		return ResponseEntity.ok(jsonStr);
		
	}
} 
