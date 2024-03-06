package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NutriPetUseCase implements NutriPetPortIn {

    private final CadastroPortIn cadastroPortIn;

    private final LojaPortIn lojaPortIn;

    private final ProdutoPortIn produtoPortIn;

    private final SolicitacaoOrcamentoPortIn solicitacaoOrcamentoPortIn;

    private final ModelMapper mapper;

    private final VeterinarioPortIn veterinarioPortIn;

}
