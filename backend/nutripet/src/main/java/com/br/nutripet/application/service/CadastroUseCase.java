package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.CadastroPortIn;
import com.br.nutripet.domain.entity.Cadastro;
import com.br.nutripet.domain.entity.Veterinario;
import com.br.nutripet.integration.mongodb.repository.CadastroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CadastroUseCase implements CadastroPortIn {

    private final CadastroRepository cadastroRepository;

    private final SequenceGeneratorService service;

    @Override
    public Cadastro criarCadastro(Cadastro cadastro) throws Exception {
        if (cadastro == null) {
            throw new Exception("Objeto inválido para cadastro");
        }
        if (cadastroRepository.findByCpf(cadastro.getCpf()).isPresent() || cadastroRepository.findByEmail(cadastro.getEmail()).isPresent()) {
            throw new Exception("Cadastro já existe no sistema");
        }
        cadastro.setIdCadastro(service.generateSequence(Cadastro.SEQUENCE_NAME));
        return cadastroRepository.save(cadastro);
    }

    @Override
    public List<Cadastro> listarCadastro() {
        return cadastroRepository.findAll();
    }
}