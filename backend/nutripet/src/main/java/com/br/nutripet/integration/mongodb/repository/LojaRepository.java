package com.br.nutripet.integration.mongodb.repository;

import com.br.nutripet.domain.entity.Cadastro;
import com.br.nutripet.domain.entity.Loja;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LojaRepository extends MongoRepository<Loja, Long> {
    // Métodos de pesquisa personalizados podem ser adicionados aqui
    Optional<Loja> findByIdLoja(Long id);

    Optional<Loja> findByEmail(String email);
}
