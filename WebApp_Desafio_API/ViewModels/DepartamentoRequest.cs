﻿using System;

namespace WebApp_Desafio_API.ViewModels
{
    /// <summary>
    /// Solicitação de criação/edição de um Departamento
    /// </summary>
    public class DepartamentoRequest
    {
        /// <summary>
        /// ID do Departamento
        /// </summary>
        public int id { get; set; }

        /// <summary>
        /// Descrição do Departamento
        /// </summary>
        public string descricao { get; set; }
    }
}
