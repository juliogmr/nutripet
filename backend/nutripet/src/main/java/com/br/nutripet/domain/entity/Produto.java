package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Document(collection = "produtos")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Produto {

    private String nome;
    private BigDecimal preco;
    private Long idLoja;
    private Disponibilidade disponibilidade;
}
