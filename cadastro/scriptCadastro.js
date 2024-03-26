        addEventListener('DOMContentLoaded', function () {
            const formCadastro = document.querySelector('.cadastro')
            const nomeUser = document.getElementById('nome-user')
            const idadeuser = document.getElementById('idade-user')
            const emailuser = document.getElementById('email-user')
            const senhaUser = document.getElementById('cadastro-senha')

            formCadastro.addEventListener('submit', (evento) => {
                evento.preventDefault()

                validacaoCampoVazio()

            })

            function validacaoCampoVazio() {
                const nomeUserValue = nomeUser.value;
                const idadeUserValue = idadeuser.value;
                const emailUserValue = emailuser.value;
                const senhaUserValue = senhaUser.value;

                let camposVazios = false;

                if (nomeUserValue === '') {
                    mensagemError(nomeUser, 'Campo NOME está vazio, preencha para prosseguir.');
                    camposVazios = true;
                   
                }

                if (idadeUserValue === '') {
                    mensagemError(idadeuser, 'Campo IDADE está vazio, preencha para prosseguir.');
                    camposVazios = true;
                }

                if (emailUserValue === '') {
                    mensagemError(emailuser, 'Campo EMAIL está vazio, preencha para prosseguir.');
                    camposVazios = true;
                }

                if (senhaUserValue === '') {
                    mensagemError(senhaUser, 'Campo SENHA está vazio, preencha para prosseguir.');
                    camposVazios = true;
                }

                if (!camposVazios) {
                    const formMsgNome = nomeUser.parentElement;
                    formMsgNome.classList.remove('error');

                    const formMsgIdade = idadeuser.parentElement;
                    formMsgIdade.classList.remove('error');

                    const formMsgEmail = emailuser.parentElement;
                    formMsgEmail.classList.remove('error');

                    const formMsgSenha = senhaUser.parentElement;
                    formMsgSenha.classList.remove('error');
                }
            }



            function mensagemError(input, mensagem) {
                const formMsg = input.parentElement
                const txtMsg = formMsg.querySelector('a')

                txtMsg.innerText = mensagem



                if (input.value.trim() !== '') {
                    formMsg.classList.remove('error');
                } else {
                    formMsg.classList.add('error');

                    setTimeout(function(){
                        formMsg.classList.remove('error')
                    }, 10000)
                }

            }

        })