package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lojas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Loja {
    @Id
    private Long idLoja;
    private String endereco;
}
