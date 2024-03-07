package com.br.nutripet.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "solicitacoesOrcamento")
public class SolicitacaoOrcamento {

    @Transient
    public static final String SEQUENCE_NAME = "solicitacoesOrcamento_sequence";

    @Id
    private Long idOrcamento;
    private String nomeTutor;
    private String cpf;
    private String numeroTelefone;
    private String emailUsuario;
    private String nomeAnimal;
    private Integer idadeAnimal;
    private Integer qtdRefeicoesDiarias;
    private String raca;
    private String objetivo;
    private String restricoes;
    private String igredientesEssenciais;
    private Long idCadastro; // Referência ao Cadastro
}
