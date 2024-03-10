package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.LojaPortIn;
import com.br.nutripet.domain.entity.Loja;
import com.br.nutripet.integration.mongodb.repository.LojaRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LojaUseCase implements LojaPortIn {

    private final LojaRepository lojaRepository;

    private final ModelMapper mapper;
    private final SequenceGeneratorService service;
    @Override
    public Loja findLoja(Long id) {
        return lojaRepository.findByIdLoja(id)
                .map(loja -> mapper.map(loja, Loja.class))
                .orElse(null);
    }

    @Override
    public Loja criarLoja(Loja loja) throws Exception {
        if(lojaRepository.findByEmail(loja.getEmail()).isPresent()) {
            throw new Exception("Loja já existe no sistema");
        }
        loja.setIdLoja(service.generateSequence(Loja.SEQUENCE_NAME));
        return lojaRepository.save(loja);
    }

    @Override
    public List<Loja> listarLojas() {
      return lojaRepository.findAll();
    }
}
