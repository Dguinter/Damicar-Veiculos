package com.danielguinter.damicarveiculos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.danielguinter.damicarveiculos.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
