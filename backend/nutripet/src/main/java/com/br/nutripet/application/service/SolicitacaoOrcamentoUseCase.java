package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.CadastroPortIn;
import com.br.nutripet.application.ports.in.SolicitacaoOrcamentoPortIn;
import com.br.nutripet.domain.entity.SolicitacaoOrcamento;
import com.br.nutripet.integration.mongodb.repository.SolicitacaoOrcamentoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SolicitacaoOrcamentoUseCase implements SolicitacaoOrcamentoPortIn {

    private final SolicitacaoOrcamentoRepository solicitacaoOrcamentoRepository;

    private final SequenceGeneratorService service;

    private final CadastroPortIn cadastroPortIn;

    @Override
    public SolicitacaoOrcamento createOrcamento(SolicitacaoOrcamento solicitacaoOrcamento) throws Exception {
        if(cadastroPortIn.findByCpf(solicitacaoOrcamento.getCpf()) == null){
            throw new Exception("Cadastro não existe no sistema, orçamento não pode ser realizado");
        }
        solicitacaoOrcamento.setIdOrcamento(service.generateSequence(SolicitacaoOrcamento.SEQUENCE_NAME));
        return solicitacaoOrcamentoRepository.save(solicitacaoOrcamento);
    }

    @Override
    public List<SolicitacaoOrcamento> listAll() {
        return solicitacaoOrcamentoRepository.findAll();
    }

    @Override
    public List<SolicitacaoOrcamento> listarTodosPorId(Long idCadastro) {
        return solicitacaoOrcamentoRepository.findAllByIdCadastro(idCadastro);
    }
}
