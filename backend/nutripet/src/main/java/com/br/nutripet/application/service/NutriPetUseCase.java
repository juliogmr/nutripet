package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.*;
import com.br.nutripet.domain.entity.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NutriPetUseCase implements NutriPetPortIn {

    private final CadastroPortIn cadastroPortIn;

    private final LojaPortIn lojaPortIn;

    private final ProdutoPortIn produtoPortIn;

    private final SolicitacaoOrcamentoPortIn solicitacaoOrcamentoPortIn;

    private final VeterinarioPortIn veterinarioPortIn;

    private final DietaPortIn dietaPortIn;

    @Override
    public Cadastro criarCadastro(Cadastro cadastro) throws Exception {
            return cadastroPortIn.criarCadastro(cadastro);
    }

    @Override
    public Veterinario criarVeterinario(Veterinario Veterinario) throws Exception {
        return veterinarioPortIn.criarVeterinario(Veterinario);
    }

    @Override
    public List<Cadastro> listarCadastro() {
        return cadastroPortIn.listarCadastro();
    }

    @Override
    public List<Veterinario> listarVeterinarios() {
        return veterinarioPortIn.listarVeterinarios();
    }

    @Override
    public Produto criarProduto(Produto produto) throws Exception {
        return produtoPortIn.createProduct(produto);
    }

    @Override
    public List<Produto> listarProdutos(){
        return produtoPortIn.listAll();
    }

    @Override
    public Loja criarLoja(Loja loja) throws Exception {
        return lojaPortIn.criarLoja(loja);
    }

    @Override
    public SolicitacaoOrcamento createOrcamento(SolicitacaoOrcamento solicitacaoOrcamento) throws Exception {
        return solicitacaoOrcamentoPortIn.createOrcamento(solicitacaoOrcamento);
    }

    @Override
    public List<SolicitacaoOrcamento> listAll() {
        return solicitacaoOrcamentoPortIn.listAll();
    }

    @Override
    public List<SolicitacaoOrcamento> listarTodosPorId(Long idCadastro) {
        return solicitacaoOrcamentoPortIn.listarTodosPorId(idCadastro);
    }

    @Override
    public List<Dieta> listarDietaPersonalizada(Long id) {
        return dietaPortIn.listarDietaPersonalizada(id);
    }

    @Override
    public Dieta createDietaPersonalizada(Dieta dieta) throws Exception {
        return dietaPortIn.createDieta(dieta);
    }
}
