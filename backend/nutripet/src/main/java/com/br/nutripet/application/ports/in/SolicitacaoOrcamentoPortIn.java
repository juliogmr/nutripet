package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.SolicitacaoOrcamento;

import java.util.List;

public interface SolicitacaoOrcamentoPortIn {

    SolicitacaoOrcamento createOrcamento(SolicitacaoOrcamento solicitacaoOrcamento) throws Exception;

    List<SolicitacaoOrcamento> listAll();

    List<SolicitacaoOrcamento> listarTodosPorId(Long idCadastro);
}
