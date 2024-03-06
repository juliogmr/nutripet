package com.br.nutripet.application.rest;

import com.br.nutripet.application.ports.in.NutriPetPortIn;
import com.br.nutripet.domain.entity.Dieta;
import com.br.nutripet.domain.entity.Produto;
import com.br.nutripet.domain.entity.Veterinario;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/nutripet")
public class NutripetController {

    private final NutriPetPortIn nutriPetPortIn;

    @GetMapping("/produtos/listarProdutos")
    ResponseEntity<Produto> listarProdutos(){
        return null;
    }

    @GetMapping("/produtos/listarProdutosDisponiveis")
    ResponseEntity<Produto> listarProdutosDisponiveis(){
        return null;
    }

    @GetMapping("/veterinarios/listarVeterinarios")
    ResponseEntity<Veterinario> listarVeterinarios(){
        return null;
    }

    @GetMapping("/dieta/listarDietasPersonalizadas")
    ResponseEntity<Dieta> listarDietaPersonalizada(Long idCadastro){
        return null;
    }
}
