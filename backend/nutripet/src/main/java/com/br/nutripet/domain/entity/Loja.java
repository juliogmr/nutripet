package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "lojas")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Loja {

    @Transient
    public static final String SEQUENCE_NAME = "lojas_sequence";

    @Id
    private Long idLoja;
    private String email;
    private String nome;
    private String cidade;
    private String telefone;
    private String endereco;
}
