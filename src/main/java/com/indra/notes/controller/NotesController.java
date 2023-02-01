package com.indra.notes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.indra.notes.model.GestorNote;
import com.indra.notes.persistence.NoteRepository;

@RestController
public class NotesController {
	
	@Autowired
	GestorNote noteService;
	@Autowired
	NoteRepository noteRepository;
	
	@GetMapping("/listNotes")
	public ModelAndView listNotes() {
		ModelAndView mav = new ModelAndView();
		return mav;		
		
	}
}
