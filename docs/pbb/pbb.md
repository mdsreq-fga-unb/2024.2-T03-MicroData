# Definições

## Product Backlog Building

É uma sigla para Product Backlog Building (PBB). É uma técnica para criar e manter uma lista de itens de trabalho para um projeto de software. O PBB tem como objetivo principal construir um backlog de forma colaborativa, de modo que todos os envolvidos no projeto compreendam o contexto do negócio.  É um processo contínuo que começa antes do início do projeto e continua durante todo o ciclo de vida do projeto.

## PBB Canvas

PBB é representado por um canvas chamado de PBB Canvas que tem um fluxo bem simples e de fácil compreensão, principalmente para facilitar o entendimento do cliente, pois sua participação é de suma importância nesse processo de construção.

## Critérios de Aceitação

Os critérios de aceitação são um conjunto de condições específicas que um produto, funcionalidade ou requisito deve atender para ser considerado completo e aceito pelo cliente ou pela equipe de qualidade. Eles definem o escopo, os limites e as expectativas de um requisito, garantindo que todas as partes envolvidas tenham um entendimento claro sobre o que deve ser entregue.

## BDD's

Behavior-Driven Development (BDD) é uma metodologia ágil de desenvolvimento de software que enfatiza a colaboração entre desenvolvedores, testadores e stakeholders não técnicos para definir o comportamento esperado de um sistema.

O BDD estende o Test-Driven Development (TDD), focando na especificação de requisitos por meio de cenários escritos em linguagem natural, geralmente utilizando a estrutura Given-When-Then (Dado-Quando-Então).

# Estudo de caso

Para aplicação dos conceitos anteriormente abordados, foi realizado o estudo de caso da empresa fictícia TechFix.

## Canvas PBB
O acesso ao PBB Canvas do estudo de caso pode ser feito no [link](https://miro.com/app/board/uXjVLr5J0PU=/?share_link_id=506084747667).

### Problemas

![](../assets/pbb/1%20-%20PROBLEMAS%20CLIENTES.png)

![](../assets/pbb/2%20-%20PROBLEMAS%20INTERNOS.png)

### Expectativas

![](../assets/pbb/3%20-%20EXPECTATIVAS%20CLIENTES.png)

![](../assets/pbb/4%20-%20EXPECTATIVAS%20INTERNAS.png)

### Personas

Persona 1:

![](../assets/pbb/5%20-%20PERSONA%201.png)

Persona 2:

![](../assets/pbb/6%20-%20PRESONA%202.png)

Persona 3:

![](../assets/pbb/7%20-%20PERSONA%203.png)

Persona 4:

![](../assets/pbb/8%20-%20PERSONA%204.png)

Persona 5:

![](../assets/pbb/9%20-%20PERSONA%205.png)

### Features

Features Persona 1:

![](../assets/pbb/10%20-%20FEATURES%20PERSONA%201.png)

Features Persona 2:

![](../assets/pbb/11%20-%20FEATURES%20PERSONA%202.png)

Features Persona 3:

![](../assets/pbb/12%20-%20FEATURES%20PERSONA%203.png)

Features Persona 4:

![](../assets/pbb/13%20-%20FEATURES%20PERSONA%204.png)

Features Persona 5:

![](../assets/pbb/14%20-%20FEATURES%20PERSONA%205.png)

### PBI's

PBI's Persona 1:
![](../assets/pbb/15%20-%20PBI%20PERSONA%201.png)

PBI's Persona 2:

![](../assets/pbb/16%20-%20PBI%20PERSONA%202.png)

PBI's Persona 3:

![](../assets/pbb/17%20-%20PBI%20PERSONA%203.png)

PBI's Persona 4:

![](../assets/pbb/18%20-%20PBI%20PERSONA%204.png)

PBI's Persona 5:

![](../assets/pbb/19%20-%20PBI%20PERSONA%205.png)

## Solicitações da atividade
Do total de PBI's identificados, 100% das histórias precisavam estar redigidas, 50% das hitórias precisavam de critérios de aceitação definidos e ao menos 5 histórias com BDD's redigidos. Sendo assim, gerou-se a seguinte relação de histórias, Critérios de Aceitação e BDD's:

- Total de PBI's identificados: 34
- Histórias de usuário redigidas: 34
- Total de histórias com critérios de Aceitação: 17
- Total de histórias com BDD's levantados: 5.

## Histórias de usuário com Critérios de Aceitação e BDD's

### US-01: Eu como atendente ou cliente quero comunicar ocorridos entre as partes envolvidas, para uma comunicação mais efetiva.

> Critérios de Aceitação:

- O sistema deve permitir que atendentes e clientes registrem mensagens sobre ocorridos em um chat no aplicativo;
- O chat não deve permitir o envio de imagens ao longo da conversa;
- As mensagens devem ser armazenadas e associadas à solicitação correspondente.
- As partes envolvidas devem ser notificadas quando houver uma nova comunicação por meio de pop-ups do aplicativo no aparelho móvel do cliente;
- As partes envolvidas devem ser notificadas no ícone do chat no aplicativo móvel;

> Cenários (BDD’s):

**Cenário 1: Cliente acessa o chat de dúvidas do aplicativo**

Dado que o cliente acessa o chat de dúvidas do aplicativo
Quando entra no chat
Então o sistema deve apresentar todo o histórico de conversas anteriormente realizadas entre cliente e atendente.

**Cenário 2: Cliente envia uma mensagem para o chat de dúvidas**

Dado que o cliente envia uma mensagem no chat do aplicativo com qualquer conteúdo (“Olá”, “Bom dia”, “Boa tarde”, etc.)
Quando o sistema identifica o seu recebimento
Então a resposta dada pelo bot deve ser “Olá, aqui é o chat da Techfix! Em instantes um(a) de nossos atendentes entrará em contato” e redirecionar o atendimento para a fila de um atendente disponível.

**Cenário 3: O atendente entra em contato com o cliente**

Dado que o atendente entra em contato com o cliente pelo chat do aplicativo
Quando seleciona o cliente em questão
Então o sistema deve enviar uma mensagem ativa no aplicativo do cliente com o texto “Olá, aqui é o(a) atendente da Techfix! Gostaria de entrar em contato contigo”.

### US-02 Eu como atendente ou cliente quero cadastrar o equipamento a ser reparado pelo técnico, para garantir especificações mais detalhadas.

> Critérios de aceitação:

- O sistema deve permitir que atendentes e clientes cadastrem um equipamento.
- O cadastro deve incluir informações de modelo, fabricante e número de série.
- Todas as informações do formulário devem ser itens obrigatórios para o cadastro.
- Os equipamentos cadastrados devem ser associados à solicitação de serviço.
- Não deve haver aparelhos com número de série duplicado no sistema;

> Cenários (BDD’s):

**Cenário 1: O cliente ou atendente quer cadastrar um equipamento no sistema**

Dado que o cliente precisa cadastrar um equipamento a ser reparado no sistema
Quando acessa a página de cadastro
Então o sistema deve apresentar um formulário de cadastro com as informações de: nome, modelo, fabricante e número de série do aparelho.

**Cenário 2: O cliente ou atendente tenta fazer o cadastro de aparelho não informa um dos dados do formulário**

Dado que o cliente ou atendente responde o formulaŕio de cadastro
Quando não deixa informações em qualquer um dos campos
Então o sistema deve notificar o usuário com a informação “Erro de registro, O campo <NOME DO CAMPO> deve ser preenchido”.

**Cenário 3: O cliente ou atendente tenta fazer o cadastro de um aparelho e cadastra com sucesso.**

Dado que o cliente ou atendente responde o formulaŕio de cadastro 
Quando preenche todas as informações do formulário
Então o sistema deve notificar o usuário com a informação “Aparelho cadastrado com sucesso” e realizar o registro dos dados no sistema.

### US-03 Eu como atendente ou cliente quero registrar a solicitação de reparo para garantir que haja o correto registro de uma ocorrência.

> Critérios de Aceitação:

- O sistema deve permitir que atendentes e clientes registrem solicitações de reparo.
- Uma solicitação de assistência não pode ser agendada em um mesmo equipamento com uma solicitação em aberto;
- Cada solicitação deve receber um identificador único.
- As solicitações registradas devem ser visíveis para os atendentes e técnicos.
- As solicitações registradas devem conter o aparelho a qual o serviço se refere, descrição do serviço solicitado, data e hora de realização do serviço e técnico designado. 

> Cenários (BDD’s):

**Cenário 1: Preenchimento do formulário de solicitação de reparo**

Dado que o cliente ou atendente querem realizar a solicitação de reparo de um equipamento
Quando acessam a interface do sistema
Então o sistema deve apresentar um formulário com os campos de “Aparelho cadastrado”, “Decrição do ocorrido” e “Imagem do ocorrido”.

**Cenário 2: Registro bem-sucedido da solicitação**

Dado que o atendente ou cliente deseja registrar uma solicitação de reparo E insere todas as informações obrigatórias (Aparelho: “Roteador Wi-Fi 6 Dual band W6-1500 Intelbras”, descrição: "Roteador não liga ao ser conectado na tomada") 
Quando ele confirma o registro 
Então o sistema deve criar a solicitação com um número único E exibir uma mensagem de confirmação "Solicitação registrada com sucesso!" E notificar o usuário sobre o registro.

**Cenário 3: Atribuição de número único à solicitação**

Dado que um atendente ou cliente registra uma solicitação de reparo 
Quando a solicitação é salva no sistema 
Então o sistema deve gerar um identificador único para a solicitação.

**Cenário 4: Tentativa de registro sem preencher o campo de aparelho cadastrado**

Dado que o atendente ou cliente acessa o formulário de solicitação de reparo E não seleciona o aparelho cadastrado
Quando ele tenta confirmar o registro 
Então o sistema deve exibir uma mensagem de erro "Deve haver um aparelho cadastrado no sistema para registrar uma solicitação de reparo." E não deve registrar a solicitação.

**Cenário 5: Tentativa de registro sem preencher o campo de descrição do ocorrido**
Dado que o atendente ou cliente acessa o formulário de solicitação de reparo E não preenche a descrição do problema 
Quando ele tenta confirmar o registro 
Então o sistema deve exibir uma mensagem de erro "A descrição do problema é obrigatória." E não deve registrar a solicitação.

**Cenário 6: Falha no registro por erro no sistema**

Dado que o atendente ou cliente preenche corretamente todos os campos obrigatórios E tenta confirmar o registro 
Quando ocorre uma falha no sistema 
Então o sistema deve exibir uma mensagem "Erro ao registrar solicitação. Tente novamente mais tarde." E não deve registrar a solicitação.

### US-04 Eu como atendente ou cliente quero acessar o histórico de solicitações de registros de reparo para facilitar a obtenção de informação.

> Critérios de Aceitação:

- O sistema deve permitir que atendentes e clientes acessem o histórico de agendamentos realizados.
- O histórico deve exibir detalhes de data, horário, status e técnico responsável.
- O usuário deve poder filtrar e ordenar os agendamentos por data e status.
- Caso não haja agendamentos registrados, o sistema deve exibir uma mensagem informativa.

> Cenários (BDD’s):

**Cenário 1: O clliente ou atendente acessa o histórico de solicitações de reparo**

Dado que o atendente ou cliente  acessa o histórico de solicitações de reparo E existem solicitações múltiplas solicitações reparo
Quando ele acessa o histórico de solicitações de reparo
Então o sistema deve exibir a lista de registros de reparo com data, horário, status e técnico responsável.

**Cenário 2: O cliente ou atendente filtra uma determinada solicitação por período de tempo**

Dado que o atendente ou cliente acessa o histórico de solicitações E existem solicitações múltiplas solicitações
Quando ele insere uma data de início e uma data de fim
Então o sistema deve exibir somente as solicitações dentro do período selecionado.

**Cenário 3: O cliente ou atendente filtra um registro de reparo por técnico de campo**

Dado que o atendente ou cliente acessa o histórico de solicitações de reparo E existem solicitações múltiplas solicitações reparo
Quando ele seleciona o nome de um dado operador
Então o sistema deve exibir somente registros de atendimento encerrados pelo operador em questão.

**Cenário 4: Sem Agendamentos registrados**

Dado que o atendente ou cliente acessa a interface do sistema E não há nenhum agendamento de reparo registrado 
Quando ele tenta visualizar o histórico de reparo
Então o sistema deve exibir a mensagem "Nenhum agendamento de reparo encontrado."

**Cenário 5: Erro ao carregar histórico**

Dado que o atendente ou cliente acessa a interface do sistema E ocorre uma falha no carregamento dos dados 
Quando ele tenta visualizar o histórico de agendamentos de reparo
Então o sistema deve exibir uma mensagem de erro "Falha ao carregar histórico. Tente novamente mais tarde."


### US-05 Eu como atendente ou cliente, quero modificar o a solicitaçõo de reparo para maior consistência das informações.

> Critérios de Aceitação:

- O sistema deve permitir a alteração de agendamentos previamente registrados.
- O cliente e o técnico devem ser notificados das mudanças.
- Apenas solicitações ainda não iniciadas podem ser remarcadas.

> Cenários (BDD’s):

**Cenário 1: Edição bem-sucedida da solicitação**

Dado que o atendente ou cliente acessa uma solicitação de reparo existente E deseja modificar a descrição do problema 
Quando ele insere a nova descrição e confirma a alteração 
Então o sistema deve atualizar a solicitação com as novas informações E registrar a modificação no histórico de alterações.

**Cenário 2: Notificação de alteração**

Dado que um atendente ou cliente modifica uma solicitação de reparo 
Quando a alteração é confirmada 
Então o sistema deve notificar as partes envolvidas sobre a modificação.

**Cenário 3: Alteração da data do reparo**

Dado que o atendente ou cliente deseja alterar a data de um reparo agendado E a solicitação ainda não foi inciada pelo operador
Quando ele alterar a data para a realização do reparo
Então o sistema deve atualizar a solicitação com a nova data E registrar a mudança no histórico de alterações.

**Cenário 4: Tentativa de alteração de uma solicitação em atendimento**

Dado que o atendente ou cliente acessa uma solicitação de reparo em andamento
Quando ele tenta modificar a data de agendamento
Então o sistema deve exibir uma mensagem de erro "Não é possível modificar esta solicitação" E não deve registrar nenhuma alteração.

**Cenário 5: Tentativa de alteração sem preencher os campos obrigatórios**

Dado que o atendente ou cliente acessa a solicitação de reparo E tenta modificar os detalhes 
Quando ele deixa campos obrigatórios em branco 
Então o sistema deve exibir uma mensagem de erro "Todos os campos obrigatórios devem ser preenchidos." E não deve salvar a modificação.

## Histórias de Usuário com Critérios de Aceitação
### US-06 Eu como atendente ou cliente, quero acompanhar o período de tempo que ainda falta para a conclusão de um atendimento para garantir que o serviço seja realizado no período de tempo adequado.

> Critérios de aceitação:

- O sistema deve exibir um contador regressivo até a conclusão do atendimento.
- O cliente e o atendente devem poder visualizar essa informação em tempo real.
- O tempo estimado deve ser baseado no SLA definido.

### US-07 Eu como atendente ou cliente, quero acompanhar o período de tempo do SLA extrapolado para priorizar a realização de um serviço atrasado.

> Critérios de aceitação:

- O sistema deve destacar solicitações com SLA ultrapassado.
- Deve ser possível filtrar e priorizar esses atendimentos.
- Notificações devem ser enviadas para os atendentes responsáveis.

### US-08 Eu como atendente ou cliente, quero ser notificado periodicamente sobre a aproximação de tempo até o encerramento do prazo de SLA para garantir que o serviço seja realizado no período de tempo adequado.

> Critérios de Aceitação:

- O sistema deve enviar alertas automáticos antes do prazo do SLA expirar.
- O cliente e o atendente devem receber essas notificações de aproximação do tempo para o encerramento da SLA.
- A periodicidade das notificações deve ser configurável.

### US-09 Eu como cliente corporativo, quero visualizar as mudanças de status conforme o avanço das atividades para um contato mais efetivo com o cliente.

> Critérios de aceitação:

- O cliente corporativo deve poder acompanhar as alterações de status de uma solicitação.
- O histórico de status deve ser registrado e acessível.
- O sistema deve permitir filtros por status.

### US-10 Eu como cliente corporativo quero ser notificado a cada atualização de atividades para um contato mais efetivo com o cliente.

> Critérios de aceitação:

- O cliente corporativo deve ser notificado sempre que houver uma atualização na solicitação.
- As notificações devem conter detalhes sobre a atualização realizada.
- As notificações devem ser enviadas via e-mail e sistema.

### US-11 Eu como cliente corporativo, quero receber o formulário de pesquisa de satisfação do atendimento para deixar um feedback sobre o serviço prestado.

> Critérios de Aceitação:

- O sistema deve permitir o envio de um formulário de pesquisa ao cliente corporativo após a conclusão do atendimento.
- O formulário deve ser responsivo e de fácil preenchimento.
- As respostas devem ser armazenadas para análise.

### US-12 Eu como cliente corporativo, quero ser notificado sobre o envio da pesquisa de satisfação para deixar um feedback sobre o serviço prestado.

> Critérios de aceitação:

- O cliente corporativo deve receber uma notificação informando sobre a pesquisa de satisfação.
- A notificação deve incluir um link direto para a pesquisa.
- A confirmação de recebimento da pesquisa deve ser registrada.

### US-13 Eu como atendente, quero acessar a lista de solicitações agendadas para garantir a consistência de informações.

> Critérios de Aceitação:

- O atendente deve poder visualizar todas as solicitações agendadas por todos os clientes.
- Deve ser possível aplicar filtros por data, técnico, status e cliente.
- A lista deve ser atualizada em tempo real.

### US-14 Eu como atendente, quero reclassificar a solicitação do cliente para garantir a consistência de informações.

> Critérios de Aceitação:

- O atendente deve poder modificar a classificação de uma solicitação.
- O sistema deve registrar um histórico de reclassificações.
- O responsável pela modificação deve constar no histórico de atualização.

### US-15 Eu como atendente, quero redirecionar a solicitação a outro técnico para garantir a prestação do serviço agendado.

> Critérios de aceitação:

- O atendente deve poder atribuir uma solicitação a outro técnico.
- O técnico original e o novo técnico devem ser notificados.
- O histórico de redirecionamento deve ser armazenado.
- O cliente deve ser notificado sobre a mudança do técnico responsável para a realização do atendimento.

### US-16 Eu como técnico de campo, quero visualizar as solicitações de assistência do cliente, para maior eficiência no atendimento.

> Critérios de aceitação:

- O técnico deve poder visualizar todas as solicitações atribuídas a ele.
- A lista deve ser filtrável por status e urgência.
- As solicitações devem ser apresentadas em ordem de prioridade e por data de execução.

### US-17 Eu como técnico de campo, quero modificar o status da solicitação de assistência, para maior eficiência no atendimento.

> Critérios de aceitação:

- O sistema deve permitir que o técnico de campo altere o status de uma solicitação de assistência para um dos status predefinidos ( "Em andamento", "Concluída", "Aguardando peças").
- O sistema deve validar se a alteração do status é permitida com base no status atual da solicitação. Caso contrário, uma mensagem de erro clara deve ser exibida.
- Toda modificação de status deve ser registrada com a data, hora e o identificador do técnico de campo responsável pela alteração.
- Uma notificação (por e-mail ou no sistema) deve ser enviada para o responsável ou a equipe quando o status da solicitação for alterado.

## Demais histórias de usuário
- US-18 Eu como técnico de campo, quero visualizar o histórico de reparos do equipamento, para maior eficiência no atendimento.
- US-19 Eu como técnico de campo, quero detalhar as atividades de reparo realizadas em um equipamento para uma gestão de informações mais detalhada.
- US-20 Eu como técnico de campo, quero agendar as atividades de reparo de um equipamento, para uma gestão de informações mais detalhada.
- US-21 Eu como técnico de campo, quero inserir imagens do equipamento do cliente para uma gestão de informações mais detalhada.
- US-22 Eu como técnico de campo, quero encerrar o atendimento registrado pelo cliente para melhor gestão de informações.
- US-23 Eu como técnico de campo quero classificar a procedência do atendimento prestado ao cliente para melhor gestão de informações.
- US-24 Eu como técnico de campo quero registrar a causa raiz do problema que gerou a solicitação melhor gestão de informações.
- US-25 Eu como técnico de campo, quero registrar o material utilizado na realização ddo atendimento para identificação de possíveis áreas de melhoria.
- US-26 Eu como técnico de campo, quero gerar um relatório com as informações dor atendimento para melhor gestão de informações.
- US-27 Eu como diretora de operações, quero visualizar o status das atividades realizadas pelos membros da equipe de campo para maior acompanhamento das atividades em tempo real. 
- US-28 Eu como diretora de operações, quero visualizar a contagem de SLA dos atendimentos para maior acompanhamento das atividades em tempo real. 
- US-29 Eu como diretora de operações, quero gerar relatórios dos dados de SLA dos atendimentos, para facilitar a verificação de problemas pontuais.
- US-30 Eu como diretora de operações, quero gerar relatórios dos detalhamentos dos atendimentos para facilitar a verificação de problemas pontuais.
- US-31 Eu como diretora de operações, quero gerar relatórios de procedência datendimentos encerrados pelos técnicos de campo, para facilitar a verificação de problemas pontuais.
- US-32 Eu como diretora de operações, quero gerar relatórios de consumo de material utilizado nos atendimentos para facilitar a identificação de problemas e possíveis melhorias.
- US-33 Eu como diretora de operações, quero visualizar as respostas das pesquisas de satisfação de atendimento, para identificação de problemas e possíveis melhorias.
- US-34 Eu como diretora de operações quero gerar relatórios dos resultados das pesquisas de satisfação, para identificação de problemas e possíveis melhorias.

## Referências

AGUIAR, Fábio. Product Backlog Building. Fábio Aguiar, 14 jun. 2021. Disponível em: https://fabiogr.com/2021/06/14/pbb/. Acesso em: 20 jan. 2025.

##  Histórico de Versão

| **Data**    | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
|      20/11/2024      |      1.0       |      Criação do documento       |     Breno Fernandes, Breno Lucena, Storch, João, Rafael e Renan     |