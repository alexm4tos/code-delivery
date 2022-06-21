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

### 👨‍💻 O que será desenvolvido

Durante esta edição, será desenvolvido um sistema de entregas, o qual permitirá visualizar em tempo real o veículo do entregador, bem como visualizar diversos entregadores simultâneos. Para possibilitar a dinâmica das entregas um sistema de simulação também será desenvolvido. Os dados de cada entrega e as posições, serão armazenadas no Elasticsearch para futuras análises.

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
