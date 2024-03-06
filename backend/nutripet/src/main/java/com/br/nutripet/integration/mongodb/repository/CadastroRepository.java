package com.br.nutripet.integration.mongodb.repository;

import com.br.nutripet.domain.entity.Cadastro;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CadastroRepository extends MongoRepository<Cadastro, Long> {
    // Métodos de pesquisa personalizados podem ser adicionados aqui
}