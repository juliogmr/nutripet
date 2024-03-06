package com.br.nutripet.integration.mongodb.repository;
import com.br.nutripet.domain.entity.Disponibilidade;
import com.br.nutripet.domain.entity.Loja;
import com.br.nutripet.domain.entity.Produto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends MongoRepository<Produto, Long> {
    // Exemplo: Encontrar produtos por disponibilidade
    List<Produto> findByDisponibilidade(Disponibilidade disponibilidade);

    // Encontrar produtos por ID da Loja
    List<Produto> findByIdLoja(Long idLoja);
}
