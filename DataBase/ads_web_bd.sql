CREATE DATABASE ads_web_bd;

USE ads_web_bd;

SHOW CREATE TABLE chamados;

INSERT INTO chamados (titulo, descricao, situacao) VALUES
('Erro ao acessar o sistema', 'Usuário relata que o sistema retorna erro 404 ao tentar acessar a página principal.', 'Aberto'),
('Falha no envio de e-mail', 'O sistema não está enviando e-mails de confirmação de cadastro.', 'Em andamento'),
('Lentidão no carregamento', 'O painel administrativo demora mais de 20 segundos para carregar.', 'Em análise'),
('Erro ao salvar formulário', 'Ao tentar salvar o formulário de cadastro, é exibida uma mensagem de erro genérico.', 'Aberto'),
('Problema na autenticação JWT', 'Token expira antes do tempo configurado, causando logout inesperado.', 'Fechado'),
('Página de relatórios em branco', 'Os relatórios não são exibidos corretamente após atualização de versão.', 'Em andamento'),
('Bug na atualização de perfil', 'Campos de telefone e endereço não são salvos ao atualizar o perfil.', 'Aberto'),
('Erro de conexão com banco de dados', 'O servidor não consegue estabelecer conexão com o MySQL após reinício.', 'Fechado'),
('Layout quebrado no mobile', 'Alguns componentes ficam desalinhados em telas pequenas.', 'Em análise'),
('Problema no upload de imagens', 'Arquivos acima de 2MB não estão sendo aceitos, mesmo dentro do limite esperado.', 'Aberto');


SELECT * FROM chamados;

DROP TABLE chamados;