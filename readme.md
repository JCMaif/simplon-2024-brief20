# yaCRM - Brief 20

## Description
Brief20 : RGPD et écoconception

## Objectifs

1- RGPD :
* Protection des données personnelles

* Informer l'utilisateurs des données personnelles collectées
* Collecter son consentement sur les données personnelles
  * obligatoires pour le fonctionnement du site:
    * Nom
    * Prénom
    * Adresse mail
    * Username* 

  * facultatives pour des fonctionnalités supplémentaires
    * Photo
    * Description


2- Écoconception :
* Utiliser Thymeleaf et Htmx pour effectuer des requêtes Ajax partielles


## Travail effectué

### RGPD :

* Utilisation de cookieConsent : [cookieConsent](https://github.com/orestbida/cookieconsent)

Au démarrage de l'application, la première page affichée est la page login. C'est donc celle que j'ai choisi pour intégrer le bandeau de consentement.

<details>

1- Ajout de la librairie de style du bandeau dans le <head>

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css">
```

2- Appel du script dans le <body> (tout en bas, sinon ajouter le paramètre defer)

```html
<script type="module" src="/js/cookieconsent-config.js"></script>
```

3- Script `cookieconsent-config.js` placé dans [`static/js/`](src/main/resources/static/js/cookieconsent-config.js)

</details>

### Écoconception

* Installation de htmx : 

Dans le dossier `static/js` ajout du script `htmx.min.js` téléchargé depuis [unpkg.com](https://unpkg.com/htmx.org@2.0.4/dist/htmx.min.js)

* Utilisation de htmx par ajout du script dans le `<head>` des pages concernées

```html
<script src="/js/htmx.min.js"></script>
```

* Utilisation d'un fichier `layout/base.html` qui contient le `<header>` et le `<footer>` de toutes les pages, ainsi que le `<main>` qui contient le contenu de chaque page
Ces fragments sont dynamiques.

<details>

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org" lang="en">
<head>
    <meta charset="UTF-8">
    <title th:text="${pageTitle}">yaCRM</title>
    <link rel="stylesheet" th:href="@{/css/style.css}"/>
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css"/>
    <script src="/js/htmx.min.js"></script>
</head>
<body>
<header id="header" th:replace="~{/fragments/navbar}">
</header>

<main id="content" >
    <div th:replace="~{::content}"></div>

</main>

<div th:if="${error}" class="alert alert-danger text-center" role="alert">
    <span th:text="${error}"></span>
</div>

<footer id="footer" th:replace="~{/fragments/footer}">
</footer>

<script type="module" src="/js/cookieconsent-config.js"></script>
</body>
</html>
```

</details>

* Une page modifie le main : 

```html
<div th:replace="~{layout/base}">

    <div th:fragment="content">
        <section th:replace="~{fragments/login}"></section>
    </div>
</div>
```
* Elle appelle le fragment associé :

```html
section th:fragment="content">
    <h1>Login</h1>
    <form th:action="@{/login}" method="post">
        <label>Username: <input type="text" name="username" required/></label><br/>
        <label>Password: <input type="password" name="password" required/></label><br/>
        <button type="submit">Login</button>
        <a th:href="@{/register}">Register</a>
    </form>
    <div th:if="${param.error}">
        <p style="color:red">Invalid username or password.</p>
    </div>
</section>
```
* On suit la même structure pour les autres pages (seules les login et register ont été modifiées pour l'instant).

* Modification du controller :

```java
 @GetMapping("/login")
    public String login(HttpServletRequest request) {
        boolean isHtmx = "true".equals(request.getHeader("HX-Request"));
        return isHtmx ? "fragments/login" : "pages/users/login";
    }
```

* Maintenant que la structure thymeleaf est optimisée, je peux ajouter les fonctionnalités de htmx aux fragments.

** En cours **


### Divers

* Ajout du paramètre lang="en" dans les balises `<html>`
* Ajout du lien vers `/register` dans la page login
* Implémentation de `/logout` POST dans AuthController côté backend
* Corrections de Spring Security