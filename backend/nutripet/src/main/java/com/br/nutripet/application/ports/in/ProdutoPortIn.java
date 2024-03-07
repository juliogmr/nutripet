package com.br.nutripet.application.ports.in;

import com.br.nutripet.domain.entity.Produto;

import java.util.List;

public interface ProdutoPortIn {
    Produto createProduct(Produto produto) throws Exception;

    List<Produto> listAll();

    List<Produto> listarProdutosDisponiveis();
}
