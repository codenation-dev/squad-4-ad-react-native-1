# Projeto DevFinder



Desenvolvimento um aplicativo para smartphone, usando os conhecimentos adquiridos no programa Codenation e de experiências prévias. O aplicativo servirá para encontrar desenvolvedores, através do GitHub.



###Requisitos

A aplicação contém/realiza as seguintes funcionalidades:

   - Opção para realizar login via Github, sem o qual nenhuma funcionalidade é liberada para o usuário;

   -  Usar geolocalização para encontrar a cidade ;

   -  Usar a API do Github para encontrar outros devs na mesma cidade;

   - Mostrar uma listagem paginada dos devs encontrados. Na listagem mostrar: nome, username, foto, número de seguidores;

   -  Ao clicar em um dev o aplicativo deve mostrar uma tela de detalhes. Na tela de detalhes, além das informações da listagem, mostrar os demais detalhes disponíveis (site, email, etc), os repositórios e o número de stars que cada um possui, bem como as linguagens de programação de cada repositório;
   
- Na tela de detalhes deve existir uma opção para favoritar um dev. Também deve ter opção no aplicativo para mostrar os favoritos e removê-los do aplicativo.


### Instalação

```bash
$ git clone https://github.com/codenation-dev/squad-4-ad-react-native-1.git
 $ cd squad-4-ad-react-native-$ cd squad-4-ad-react-native- -$ cd squad-4-ad-react-native-$ cd squad-4-ad-react-native- 1
$ react-native run-android
$ react-native start

```

##### Em caso de erro relacionado a keystore durante a instalação:
```bash
$ cd android/app
$ keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```
###Configuração
#####Para que a consulta a API do Github seja realizada, é necessário que um Personal Access Token seja gerado e adicionado ao seguinte arquivo:
`src/services/apollo.js`
#####O token pode ser gerado usando [este tutorial](https://help.github.com/pt/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line "aqui").


###Imagens



![](https://i.ibb.co/Qkg7WNC/25-10-2019-21-16-58.jpg)    - ![](https://i.ibb.co/9yhqCyF/25-10-2019-21-13-42.jpg) 
                
----
####Squad 4
#####Jeferson Nascimento - Matheus Mamede - Paulo França - Zaqueu Lima