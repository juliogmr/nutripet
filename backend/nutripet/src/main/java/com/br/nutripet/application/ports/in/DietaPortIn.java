package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.Dieta;

import java.util.List;

public interface DietaPortIn {
    List<Dieta> listarDietaPersonalizada(Long id);

    Dieta createDieta(Dieta dieta) throws Exception;
}
