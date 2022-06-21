<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/25274156/174645164-1c8de2bd-fd1a-4dd2-bce9-086bc15f467d.png" alt="code delivery logo"></a>
</p>

---

## API – backend

---

## 📝 Lista de conteúdos

- [Descrição](#descricao)
- [Executando a aplicação](#uso)

## 📖 Descrição <a name = "descricao"></a>

Repositório da api, desenvolvido com NestJS.

## 🎈 Executando a aplicação <a name = "uso"></a>

⚠️ Para um funcionamento correto da aplicação é recomendado que o **Apache Kafka** e o **simulador** estejam em execução.

Utilizando um terminal, acesse a pasta da api dentro do projeto. Por exemplo:

```
cd ~/code-delivery/nest-api
```

Em seguida, suba o container docker com o comando:

```
docker-compose up -d
```

Caso necessário altere as configurações no arquivo **.env**.

---

### Endpoints

| Método | Endpoint           | Retorno                                                      |
| ------ | ------------------ | ------------------------------------------------------------ |
| GET    | /routes            | Todas as rotas disponíveis                                   |
| GET    | /routes/{id}/start | Iniciar comunicação de direção de uma rota única com o Kafka |
