package com.br.nutripet.integration.mongodb.repository;

import com.br.nutripet.domain.entity.Veterinario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VeterinarioRepository extends MongoRepository<Veterinario, Long> {
     List<Veterinario> findByEspecialidade(String especialidade);
}
