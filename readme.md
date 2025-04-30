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

