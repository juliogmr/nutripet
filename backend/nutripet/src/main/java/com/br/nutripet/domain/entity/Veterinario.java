package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "veterinarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Veterinario {

    @Transient
    public static final String SEQUENCE_NAME = "veterinarios_sequence";

    @Id
    private Long idVeterinario;

    @Field("nome")
    private String nome;
    @Field("especialidade")
    private String especialidade;
    @Field("telefone")
    private String telefone;
    @Field("email")
    private String email;
}
