<p align="center">
  <a href="" rel="noopener">
		<img src="https://user-images.githubusercontent.com/25274156/174645164-1c8de2bd-fd1a-4dd2-bce9-086bc15f467d.png" alt="code delivery logo"></a>
</p>

---

## React app – frontend

---

## 📝 Lista de conteúdos

- [Descrição](#descricao)
- [Executando a aplicação](#uso)

## 📖 Descrição <a name = "descricao"></a>

Repositório do front end, desenvolvido com ReactJS.

## 🎈 Executando a aplicação <a name = "uso"></a>

⚠️ Para um funcionamento correto da aplicação é recomendado que o **Apache Kafka**, **simulador** e a **API** estejam em execução.

Utilizando um terminal, acesse a pasta do frontend dentro do projeto. Por exemplo:

```
cd ~/code-delivery/react-frontend
```

Abra o arquivo **.env** com seu editor favorito.<br />
Em **REACT_APP_API_URL** informe o endereço da API (ex.: http://localhost:3000)

Em **REACT_APP_GOOGLE_API_KEY** informe a chave da API gerada no [Google Cloud](https://console.cloud.google.com/apis/credentials).

As seguintes APIs devem estar ativas em seu projeto no Google Cloud:

- [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com)
- [Directions API](https://console.cloud.google.com/apis/library/directions-backend.googleapis.com)

Em seguida, suba o container docker com o comando:

```
docker-compose up -d
```

Se preferir pode utilizar o NPM ou YARN para subir sua aplicação também.<br />Vale destacar que sua máquina deve possuir o [node](https://nodejs.org/en/) instalado.

```
npm run start
```

ou

```
yarn start
```
