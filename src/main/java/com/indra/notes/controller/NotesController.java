package com.indra.notes.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
		System.out.println("Controller instance");
	}


	@GetMapping("/listNotes")	
	public List<String> listNotes() {		
		List<Note> noteList = noteRepository.findAll();		
		List<String> noteJson = new ArrayList<>();
		noteList.forEach(e-> noteJson.add(e.toString()));
		System.out.println(noteJson);		
		return noteJson;		
	}
}
