package com.br.nutripet.integration.mongodb.repository;

import com.br.nutripet.domain.entity.Dieta;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DietaRepository extends MongoRepository<Dieta, Long> {
    // Método para buscar dietas por idCadastro
    List<Dieta> findByIdCadastro(Long idCadastro);
}
