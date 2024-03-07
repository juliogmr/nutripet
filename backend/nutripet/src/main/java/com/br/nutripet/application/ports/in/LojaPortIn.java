package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.Loja;

public interface LojaPortIn {

    Loja findLoja(Long id);

    Loja criarLoja(Loja loja) throws Exception;
}
