package com.indra.notes.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.indra.notes.entity.Note;

public interface NoteRepository extends JpaRepository<Note, Integer>{
	
}
