package com.br.nutripet.application.service;

import com.br.nutripet.application.ports.in.ProdutoPortIn;
import com.br.nutripet.domain.entity.Produto;
import com.br.nutripet.domain.entity.Veterinario;
import com.br.nutripet.integration.mongodb.repository.ProdutoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProdutoUseCase implements ProdutoPortIn {

    private final ProdutoRepository produtoRepository;

    private final SequenceGeneratorService service;

    private final LojaUseCase lojaUseCase;
    @Override
    public Produto createProduct(Produto produto) throws Exception {
        if(lojaUseCase.findLoja(produto.getIdLoja()) == null){
            throw new Exception("Loja não existe no sistema, produto não pode ser inserido");
        }
        produto.setIdProduto(service.generateSequence(Produto.SEQUENCE_NAME));
        return produtoRepository.save(produto);
    }

    @Override
    public List<Produto> listAll() {
        return produtoRepository.findAll();
    }

    @Override
    public List<Produto> listarProdutosDisponiveis() {
        return produtoRepository.findAllByDisponibilidade_ProntaEntrega();
    }
}
