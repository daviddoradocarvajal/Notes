package com.indra.notes.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.indra.notes.entity.Note;

public interface NoteRepository extends JpaRepository<Note, Integer>{
	
	@Modifying
	@Query("UPDATE Note SET isFavorite=:isFavorite WHERE id=:id")
	void switchFavorite(@Param(value = "isFavorite") Boolean isFavorite,@Param(value = "id") Integer id);
}
