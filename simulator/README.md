<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/25274156/174645164-1c8de2bd-fd1a-4dd2-bce9-086bc15f467d.png" alt="code delivery logo"></a>
</p>

---

## Simulator – backend

---

## 📝 Lista de conteúdos

- [Descrição](#descricao)
- [Executando a aplicação](#uso)

## 📖 Descrição <a name = "descricao"></a>

Repositório do simulador, desenvolvido com Go.

## 🎈 Executando a aplicação <a name = "uso"></a>

⚠️ Lembre-se de iniciar a aplicação do **Apache Kafka** antes de seguir com as instruções abaixo.

Utilizando um terminal, acesse a pasta do simulador dentro do projeto. Por exemplo:

```
cd ~/code-delivery/simulator
```

Crie o arquivo **.env** com o comando:

```
cp .env.example .env
```

Em seguida, suba o container docker com o comando:

```
docker-compose up -d
```

Localize o nome do container com o comando:

```
docker-compose ps
```

_Será retornado algo similar as informações abaixo. Precisamos apenas do conteúdo da coluna "Name":_

```
  Name           Command        State   Ports
---------------------------------------------
simulator   tail -f /dev/null   Up
```

Acesse o terminal do container com o comando:

```
docker exec -it [nome do container] bash
```

_De acordo com o exemplo, o comando deverá ficar assim_

```
docker exec -it simulator bash
```

Por fim, depois de acessar o terminal, inicie a aplicação do simulador com o comando:

```
go run main.go
```
