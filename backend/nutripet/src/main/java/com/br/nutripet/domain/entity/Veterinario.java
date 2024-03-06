package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "veterinarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Veterinario {

    @Id
    private Long idVeterinario;
    private String nome;
    private String especialidade;
    private String telefone;
    private String email;
}
