﻿$(document).ready(function () {

    $('.glyphicon-calendar').closest("div.date").datepicker({
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: false,
        format: 'dd/mm/yyyy',
        autoclose: true,
        language: 'pt-BR'
    });

    $('#btnCancelar').click(function () {
        Swal.fire({
            html: "Deseja cancelar essa operação? O registro não será salvo.",
            type: "warning",
            showCancelButton: true,
        }).then(function (result) {
            if (result.value) {
                history.back();
            } else {
                console.log("Cancelou a inclusão.");
            }
        });
    });

    $(document).ready(function () {
        $.ajax({
            url: config.contextPath + "Chamados/ListarSolicitante",
            type: 'GET',
            contentType: 'application/json',

        }).done(function (data) {
            $("#autocomplete").autocomplete({
                source: eval(data)
            });

        });
    });

    $('#btnSalvar').click(function () {
        if ($('#form').valid() != true) {
            FormularioInvalidoAlert();
            return;
        }

        let dataAbertura = $('#dataAbertura').val();
        let hoje = new Date().toISOString().split('T')[0]; 

        if (dataAbertura < hoje) {
            Swal.fire({
                title: 'Erro',
                text: 'A data de abertura não pode ser retroativa.',
                icon: 'error'
            });
            return; 
        }

        let chamado = SerielizeForm($('#form'));
        let url = $('#form').attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: chamado,
            success: function (result) {
                Swal.fire({
                    type: result.Type,
                    title: result.Title,
                    text: result.Message,
                }).then(function () {
                    window.location.href = config.contextPath + result.Controller + '/' + result.Action;
                });
            },
            error: function (result) {
                Swal.fire({
                    text: result,
                    confirmButtonText: 'OK',
                    icon: 'error'
                });
            },
        });
    });


});
