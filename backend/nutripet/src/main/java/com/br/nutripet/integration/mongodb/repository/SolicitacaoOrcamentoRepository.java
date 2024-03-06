package com.br.nutripet.integration.mongodb.repository;
import com.br.nutripet.domain.entity.SolicitacaoOrcamento;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SolicitacaoOrcamentoRepository extends MongoRepository<SolicitacaoOrcamento, Long> {
    // Exemplo: Encontrar todas as solicitações de orçamento por email do usuário
    List<SolicitacaoOrcamento> findByEmailUsuario(String email);
}
