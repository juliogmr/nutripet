package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.VeterinarioPortIn;
import com.br.nutripet.domain.entity.Veterinario;
import com.br.nutripet.integration.mongodb.repository.VeterinarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VeterinarioUseCase implements VeterinarioPortIn {

    private final VeterinarioRepository veterinarioRepository;

    private final SequenceGeneratorService service;

    @Override
    public Veterinario criarVeterinario(Veterinario veterinario) throws Exception {
        if(veterinarioRepository.findByEmail(veterinario.getEmail()).isPresent()) {
            throw new Exception("Veterinario já existe no sistema");
        }
        veterinario.setIdVeterinario(service.generateSequence(Veterinario.SEQUENCE_NAME));
        return veterinarioRepository.save(veterinario);
    }

    @Override
    public List<Veterinario> listarVeterinarios() {
        return veterinarioRepository.findAll();
    }
}
