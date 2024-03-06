package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "cadastros")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cadastro {
    @Id
    private Long idCadastro;
    private String email;
    private String senha;
    private String cpf;
    private int idade;
    private String telefone;
}
