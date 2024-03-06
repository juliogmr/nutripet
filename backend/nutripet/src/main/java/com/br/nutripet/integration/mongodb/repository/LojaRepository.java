package com.br.nutripet.integration.mongodb.repository;

import com.br.nutripet.domain.entity.Loja;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LojaRepository extends MongoRepository<Loja, Long> {
    // Métodos de pesquisa personalizados podem ser adicionados aqui
}
