package com.br.nutripet.application.rest;

import com.br.nutripet.application.ports.in.NutriPetPortIn;
import com.br.nutripet.domain.entity.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/nutripet")
public class NutripetController {

    private final NutriPetPortIn nutriPetPortIn;

    @GetMapping("/produtos/listarProdutosDisponiveis")
    ResponseEntity<List<Produto>> listarProdutosDisponiveis(){
        return null;
    }

    @GetMapping("/veterinarios/listarVeterinarios")
    ResponseEntity<List<Veterinario>> listarVeterinarios(){
        return  new ResponseEntity<>(nutriPetPortIn.listarVeterinarios(), HttpStatus.OK);
    }

    @PostMapping("criarVeterinario")
    ResponseEntity<Veterinario> criarVeterinario(@RequestBody Veterinario veterinario) throws Exception {
        return  new ResponseEntity<>(nutriPetPortIn.criarVeterinario(veterinario), HttpStatus.CREATED);
    }

    @PostMapping("/produtos/criarProdutos")
    ResponseEntity<Produto> criarProduto(@RequestBody Produto produto) throws Exception {
        return new ResponseEntity<>(nutriPetPortIn.criarProduto(produto), HttpStatus.CREATED);
    }

    @PostMapping("/lojas/criarLoja")
    ResponseEntity<Loja> criarLoja(@RequestBody Loja loja) throws Exception {
        return new ResponseEntity<>(nutriPetPortIn.criarLoja(loja), HttpStatus.CREATED);
    }

    @GetMapping("/produtos/listarProdutos")
    ResponseEntity<List<Produto>> listarProdutos(){
        return new ResponseEntity<>(nutriPetPortIn.listarProdutos(), HttpStatus.OK);
    }
    @GetMapping("/dieta/listarDietasPersonalizadas")
    ResponseEntity<List<Dieta>> listarDietaPersonalizada(Long idCadastro){
        return null;
    }

    @PostMapping("/criarCadastro")
    ResponseEntity<Cadastro> criarCadastro(@RequestBody Cadastro cadastro) throws Exception {
        return new ResponseEntity<>(nutriPetPortIn.criarCadastro(cadastro), HttpStatus.CREATED);
    }

    @GetMapping("/listarCadastros")
    ResponseEntity<List<Cadastro>> listarCadastros(){

        return new ResponseEntity<>(nutriPetPortIn.listarCadastro(), HttpStatus.OK);
    }
}
