package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.CadastroPortIn;
import com.br.nutripet.application.ports.in.DietaPortIn;
import com.br.nutripet.domain.entity.Dieta;
import com.br.nutripet.integration.mongodb.repository.DietaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DietaPortOut implements DietaPortIn {

    private final DietaRepository dietaRepository;

    private final SequenceGeneratorService service;

    private final CadastroPortIn cadastroPortIn;

    @Override
    public List<Dieta> listarDietaPersonalizada(Long id) {
        return dietaRepository.findByIdCadastro(id);
    }

    @Override
    public Dieta createDieta(Dieta dieta) throws Exception {
        if(cadastroPortIn.findByCadastro(dieta.getIdCadastro()) == null){
            throw new Exception("Cadastro não existe no sistema, dieta não pode ser criada");
        }
        dieta.setIdDieta(service.generateSequence(Dieta.SEQUENCE_NAME));
        return dietaRepository.save(dieta);
    }
}
