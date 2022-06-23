<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/25274156/174645164-1c8de2bd-fd1a-4dd2-bce9-086bc15f467d.png" alt="code delivery logo"></a>
</p>

---

## 📝 Lista de conteúdos

- [Sobre](#sobre)
- [Pré-requisitos](#pre_requisitos)
- [Instalação e execução](#instalacao)

## 📖 Sobre <a name = "sobre"></a>

A Imersão Full Stack && Full Cycle é um evento online e 100% gratuito que vai ajudar na prática programadores a desenvolverem as principais habilidades exigidas pelas empresas no mercado para que eles sejam capazes de trabalhar em projetos de grande porte com total confiança e desenvolvendo do jeito certo.

### 👨‍💻 O projeto

Durante esta edição, foi desenvolvido um sistema de entregas, o qual permite visualizar em tempo real o veículo do entregador, bem como visualizar diversos entregadores simultâneos. Para possibilitar a dinâmica das entregas um sistema de simulação também foi desenvolvido. Os dados de cada entrega e as posições, serão armazenadas no Elasticsearch para futuras análises.

---

| **Tela inicial**                                                                                                                                                                                                                                           | **1 entrega**                                                                                                                                                                                                                                              | **2 entregas simultâneas**                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/25274156/175362746-8a05adf3-8d42-4a74-b3ed-b01e3be12756.png" data-canonical-src="https://user-images.githubusercontent.com/25274156/175362746-8a05adf3-8d42-4a74-b3ed-b01e3be12756.png" width="300" /> | <img src="https://user-images.githubusercontent.com/25274156/175365791-7b0a36d7-e07d-4467-8eb4-5f00356eac50.png" data-canonical-src="https://user-images.githubusercontent.com/25274156/175365791-7b0a36d7-e07d-4467-8eb4-5f00356eac50.png" width="300" /> | <img src="https://user-images.githubusercontent.com/25274156/175362751-ecdd6ec3-728d-4978-9f7c-04dc839a4093.png" data-canonical-src="https://user-images.githubusercontent.com/25274156/175362751-ecdd6ec3-728d-4978-9f7c-04dc839a4093.png" width="300" /> |
|                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                            |
| **3 entregas simultâneas**                                                                                                                                                                                                                                 | **Entrega efetuada**                                                                                                                                                                                                                                       | **Bloqueio ao iniciar entrega em andamento**                                                                                                                                                                                                               |
| <img src="https://user-images.githubusercontent.com/25274156/175362760-3c8f8bbb-685a-43c2-8813-dd07085bf5aa.png" data-canonical-src="https://user-images.githubusercontent.com/25274156/175362760-3c8f8bbb-685a-43c2-8813-dd07085bf5aa.png" width="300" /> | <img src="https://user-images.githubusercontent.com/25274156/175362758-21880a5f-8c49-4757-8a44-a03b87e60200.png" data-canonical-src="https://user-images.githubusercontent.com/25274156/175362758-21880a5f-8c49-4757-8a44-a03b87e60200.png" width="300" /> | <img src="https://user-images.githubusercontent.com/25274156/175362756-97224c18-ad56-4877-ab5f-4e397f0dabd6.png" data-canonical-src="https://user-images.githubusercontent.com/25274156/175362756-97224c18-ad56-4877-ab5f-4e397f0dabd6.png" width="300" /> |

---

## ✔️ Pré-requisitos <a name = "pre_requisitos"></a>

Você precisará dos seguintes itens instalados em seu ambiente:

- Docker
- IDE ou editor de texto, como o [GoLand](https://www.jetbrains.com/go/) ou [VS Code](https://code.visualstudio.com/).

## ⏬🎈 Instalação e execução <a name = "instalacao"></a>

Utilizando um terminal, clone este repositório com o seguinte comando:

```
git clone https://github.com/alexm4tos/code-delivery.git
```

Realize os procedimentos de cada item abaixo.<br />Caso seja necessário acesse a pasta de cada um para obter mais informações.

<details>
  <summary>Apache Kafka</summary>
  
  Acesse a pasta do Apache Kafka:

```
cd ~/code-delivery/apache-kafka
```

Em seguida, suba o container docker com o comando:

```
docker-compose up
```

</details>

<details>
  <summary>Simulator</summary>
  
  Acesse a pasta do simulador:

```
cd ~/code-delivery/simulator
```

Crie o arquivo **.env** com o comando:

```
cp .env.example .env
```

Em seguida, suba o container docker com o comando:

```
docker-compose up
```

Acesse o terminal do container com o comando:

```
docker exec -it simulator bash
```

Inicie a aplicação do simulador com o comando:

```
go run main.go
```

</details>

<details>
  <summary>API</summary>
  
  Acesse a pasta da API:

```
cd ~/code-delivery/nest-api
```

Em seguida, suba o container docker com o comando:

```
docker-compose up
```

Caso necessário altere as configurações no arquivo **.env**.

</details>

<details>
  <summary>Aplicação</summary>
  
  Acesse a pasta da aplicação:

```
cd ~/code-delivery/react-frontend
```

Abra o arquivo **.env** com seu editor favorito.<br />
**REACT_APP_API_URL** informe o endereço da API.<br />
**REACT_APP_GOOGLE_API_KEY** informe a chave da API gerada no [Google Cloud](https://console.cloud.google.com/apis/credentials).

Em seguida, suba o container docker com o comando:

```
docker-compose up
```

Se preferir pode utilizar o NPM ou YARN para subir sua aplicação também.

```
npm run start
```

ou

```
yarn start
```

</details>
