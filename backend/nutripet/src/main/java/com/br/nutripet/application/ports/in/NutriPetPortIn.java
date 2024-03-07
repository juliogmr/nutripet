package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.Cadastro;
import com.br.nutripet.domain.entity.Loja;
import com.br.nutripet.domain.entity.Produto;
import com.br.nutripet.domain.entity.Veterinario;

import java.util.List;

public interface NutriPetPortIn {

    Cadastro criarCadastro(Cadastro cadastro) throws Exception;

    Veterinario criarVeterinario(Veterinario Veterinario) throws Exception;

    List<Cadastro> listarCadastro();
    List<Veterinario> listarVeterinarios();

    Produto criarProduto(Produto produto) throws Exception;

    List<Produto> listarProdutos();

    Loja criarLoja(Loja loja) throws Exception;
}
