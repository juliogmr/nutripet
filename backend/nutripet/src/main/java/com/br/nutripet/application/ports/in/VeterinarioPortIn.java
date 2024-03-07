package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.Veterinario;

import java.util.List;

public interface VeterinarioPortIn {
    Veterinario criarVeterinario(Veterinario veterinario) throws Exception;

    List<Veterinario> listarVeterinarios();
}
