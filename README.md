# tplayer-mb

Player da Taking, react native.

Desenvolvido como 'projeto final' do treinamento interno de React / NodeJS, faz parte de 3 projetos, a saber:

- **Front-End React-Native**: Este projeto. Aplicação hibrida que tocar os audios disponibilizados.
- [**Front-End Web**](https://github.com/luizalbsilva/tplayer): Módulo administrativo, fará o controle do que será 
  exposto (upload dos audios), sua classificação, e modo de exposição (destaques, etc)
- [**Back-End: Em NodeJS**](https://github.com/RafaelGSantana/Projeto-Capacitacao-Backend), fornecerá a api que será 
  consumida pelos dois projetos anteriores.


## Rodando o Projeto

Para este projeto, você precisará do [NodeJS](http://www.nodejs.org) instalado na sua máquina, além do repositório 
clonado em sua máquina Primeiramente clone o projeto do repositório. 

Na pasta do projeto, digite para baixar as dependências do projeto: 
```npm install```

Agora, para rodar o projeto em desenvolvimento, você terá algumas alternativas:
* Rodar o projeto em um emulador
* Rodar o projeto diretamente no celular

### Emuladores
Para rodar em emuladores, você precisará dos respectivos sdk's e emuladores instalados na sua máquina e devidamente 
configurados. Por favor, consulte a documentação do [Expo](https://expo.io/) para mais informações sobre a 
configuração da sua plataforma.

Rode: 

``
expo start --android
``

ou

``
expo start --ios
``

de acordo com seu target. Mais informações no site do [Expo](https://expo.io/).

### Direto no celular 
Para isso, você precisará instalar o software do Expo, que está disponível tanto na PlayStore quanto na AppleStore.
Rode na pasta do projeto:

``
expo start
``

Depois de rodando, uma janela será aberta no navegador, onde será apresentado 
um QRCode (o mesmo será mostrado no console). Com o app do Expo no seu celular, 
capture esse QR, e a aplicação será aberta no seu celular. Note que quaisquer 
alterações serão refletidar logo após a gravação e compilação do arquivo. 


Configuração de servidores:
---------------------------

A localização do servidor de backend deverá ser feita em /config/config.json
