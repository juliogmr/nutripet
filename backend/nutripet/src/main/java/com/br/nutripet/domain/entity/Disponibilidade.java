package com.br.nutripet.domain.entity;

public enum Disponibilidade {
    prontaEntrega("Pronta Entrega"),
    sobEncomenda("Sob Encomenda"),
    emFalta("Em Falta");

    private final String descricao;

    Disponibilidade(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public String toString() {
        return descricao;
    }
}