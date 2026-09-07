# Portfolio Data Analyst & Python

Portfolio statique en HTML / CSS / JavaScript.

## 1. Lancer le site

Le plus simple :

- ouvre le dossier dans VS Code ;
- installe l'extension **Live Server** ;
- clic droit sur `index.html` ;
- choisis **Open with Live Server**.

Tu peux aussi ouvrir directement `index.html` dans ton navigateur.

## 2. Pages

- `index.html` : accueil et présentation générale
- `sciences-data.html` : projets Data + scientifiques
- `jeux.html` : jeux et applications Python
- `contact.html` : liens de contact
- `css/style.css` : tout le design
- `js/script.js` : menu mobile + animations

## 3. Remplacer tes liens

Recherche dans les fichiers HTML :

- `https://github.com/`
- `https://www.linkedin.com/`
- `ton.email@example.com`
- `linkedin.com/in/ton-profil`
- `github.com/ton-compte`

et remplace-les par tes vraies adresses.

## 4. Ajouter ton CV

Place ton PDF ici :

`assets/cv/CV_Ludo_Zingg.pdf`

Le lien présent sur le site fonctionnera automatiquement.

## 5. Ajouter une vidéo YouTube

Dans une page projet, repère ce bloc :

```html
<div class="video-placeholder">
    ...
</div>
```

Tu peux le remplacer par :

```html
<iframe
    src="https://www.youtube.com/embed/TON_ID_VIDEO"
    title="Démonstration du projet"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

Exemple :

Si ta vidéo est :

`https://www.youtube.com/watch?v=ABC123`

alors l'URL à utiliser est :

`https://www.youtube.com/embed/ABC123`

Pour un portfolio, une vidéo YouTube **non répertoriée** est souvent pratique.

## 6. Ajouter un projet

Le plus simple est de copier un bloc :

```html
<article class="project-detail reveal">
    ...
</article>
```

Puis modifier :

- le numéro du projet ;
- le titre ;
- la description ;
- les technologies ;
- la vidéo ;
- le contexte ;
- la méthode ;
- les difficultés ;
- les résultats ;
- le lien GitHub.

## 7. Conseils pour chaque projet

Une bonne page projet doit répondre rapidement à ces questions :

1. Quel était le problème ?
2. Qu'as-tu fait personnellement ?
3. Quelles technologies as-tu utilisées ?
4. Quelle difficulté intéressante as-tu résolue ?
5. Quel est le résultat ?
6. Que montre ce projet sur tes compétences ?

Évite les descriptions trop longues. Les recruteurs doivent pouvoir comprendre un projet en environ une minute.

## 8. Mettre le site sur GitHub Pages

1. Crée un dépôt GitHub, par exemple `portfolio`.
2. Envoie tous les fichiers du dossier.
3. Sur GitHub : `Settings` → `Pages`.
4. Dans **Build and deployment**, sélectionne la branche `main`.
5. GitHub fournira ensuite l'adresse publique du site.

Tu peux également utiliser un dépôt nommé :

`TON_PSEUDO.github.io`

pour obtenir une adresse du type :

`https://TON_PSEUDO.github.io/`

## 9. Personnalisation

Les couleurs principales sont au début de :

`css/style.css`

Dans :

```css
:root {
    --bg: ...;
    --cyan: ...;
    --blue: ...;
    --purple: ...;
}
```

Tu peux ainsi changer tout le style du site très rapidement.
