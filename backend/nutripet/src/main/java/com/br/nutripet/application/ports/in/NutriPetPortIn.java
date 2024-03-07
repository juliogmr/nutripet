package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.*;

import java.util.List;

public interface NutriPetPortIn {

    Cadastro criarCadastro(Cadastro cadastro) throws Exception;

    Veterinario criarVeterinario(Veterinario Veterinario) throws Exception;

    List<Cadastro> listarCadastro();
    List<Veterinario> listarVeterinarios();

    Produto criarProduto(Produto produto) throws Exception;

    List<Produto> listarProdutos();

    Loja criarLoja(Loja loja) throws Exception;

    SolicitacaoOrcamento createOrcamento(SolicitacaoOrcamento solicitacaoOrcamento) throws Exception;

    List<SolicitacaoOrcamento> listAll();

    List<SolicitacaoOrcamento> listarTodosPorId(Long idCadastro);

    List<Dieta> listarDietaPersonalizada(Long id);

    Dieta createDietaPersonalizada(Dieta dieta) throws Exception;
}
