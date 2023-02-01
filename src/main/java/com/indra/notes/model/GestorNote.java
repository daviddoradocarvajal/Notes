package com.indra.notes.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.indra.notes.entity.Note;
import com.indra.notes.persistence.NoteRepository;

@Service
public class GestorNote {
	@Autowired
	private NoteRepository noteRepository;
	
	
	@Transactional
	public void insert(Note note) {
		noteRepository.save(note);
	}
	
	@Transactional
	public void modificar(Note note) {		
		noteRepository.save(note);
	}
	
	@Transactional
	public void borrar(Note note) {
		noteRepository.delete(note);
	}
}
