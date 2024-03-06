package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "dietas")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Dieta {

    @Id
    private Long idDieta;
    private Long idCadastro; // Associação com Cadastro
    private String descricao;
    private LocalDate dataInicio;
    private Integer duracaoDias;
}
