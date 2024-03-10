package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.Cadastro;

import java.util.List;

public interface CadastroPortIn {

    Cadastro criarCadastro(Cadastro cadastro) throws Exception;

    List<Cadastro> listarCadastro();

    Cadastro findByCadastro(Long id);

    Cadastro findByCpf(String cpf);
}
