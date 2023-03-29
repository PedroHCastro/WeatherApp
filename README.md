# WeatherApp React Native

O projeto consiste de um aplicativo de previsão de tempo, onde ao carregar, busca a localização atual do usuário e exibe na interface os dados climáticos da região, sendo possível atualizar os dados carregados clicando em um botão, no canto superior direito.

## Screenshots

<!-- ![App Screenshot Home](https://raw.githubusercontent.com/PedroHCastro/WeatherApp/main/screenshots/home.png)
![App Screenshot Forecast](https://raw.githubusercontent.com/PedroHCastro/WeatherApp/main/screenshots/forecast.png) -->

<div style="display:flex; flex-wrap:wrap; justify-content: space-between; max-width: 650px; margin: 0 auto;">
  <img src="https://raw.githubusercontent.com/PedroHCastro/WeatherApp/main/screenshots/home.png" style="width:49%;"/>
  <img src="https://raw.githubusercontent.com/PedroHCastro/WeatherApp/main/screenshots/forecast.png" style="width:49%;"/>
</div>

## Dependências

- [axios](https://github.com/axios/axios) para requisições HTTP.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) para as variáveis de ambiente.
- [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit) para a exibição do gráfico.
- [react-native-permissions](https://github.com/zoontek/react-native-permissions) para gerencias as permissões do usuário.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) para facilitar a importação de icones.
- [styled-components](https://styled-components.com/) para estilização dos componentes.
- [typescript](https://reactnative.dev/docs/typescript) para tipagem dos dados.
- [jest](https://facebook.github.io/jest/) e [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) para testes.

## Estrutura de pastas

    ./src
     ├── components
     │   └── Component
     │      ├── index.tsx
     │      └── styles.ts
     ├── context
     ├── hooks
     ├── models
     ├── repositories
     ├── routes
     ├── screens
     │   └── Screen
     │      ├── view.tsx
     │      ├── view.model.ts
     │      └── styles.ts
     ├── store
     ├── theme
     └── utils

1.  **`components`**: pasta com os componentes reutilizáveis do aplicativo.

2.  **`context`**: pasta com os contextos (fornece uma maneira de passar dados pelos componentes sem ter que passar props manualmente em todos os níveis da aplicação).

3.  **`hooks`**: react hooks customizados.

4.  **`models`**: pasta com os tipos da aplicação.

5.  **`repositories`**: padrão de projeto utilizado para isolar a camada de acesso a dados.

6.  **`routes`**: rotas do aplicativo.

7.  **`screens`**: pasta com os componentes das telas da aplicação.

    7.1. **`screens`**: dentro das pastas das telas tem os arquivos de view (interface) view.model (lógica) e styles (customização da interface).

8.  **`store`**: abriga as regras de gerenciamento de estado.

9.  **`theme`**: abriga as cores utilizadas durante o app.

10. **`utils`**: funções utilitárias recorrentes.

## Configuração de ambientes

Copie o arquivo .env.example e renomeie para .env, altere a constante APP_ID_WEATHER com a chave de api da [API do Open Weather](https://openweathermap.org/api)

```
APP_ID_WEATHER=<<api_key>>
```

## Executando Localmente

1. Baixe o repositório

```shell
  git clone https://github.com/PedroHCastro/WeatherApp.git
```

2. Instalação

Dentro da pasta do repositório, execute o seguinte comando:

```shell
  yarn install
```

ou

```shell
 npm install
```

3. Execução

Para executar no emulador iOS, rode o seguinte comando:

```shell
  yarn ios
```

Para executar no emulador Android, rode o seguinte comando:

```shell
  yarn android
```
