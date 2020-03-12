## Base du langage
L'objectif de cette partie est de vous familiariser avec la syntaxe JavaScript. Dans cette partie, vous allez :

- Apprendre à déclarer des variables.
- Apprendre ce que sont les chaînes de caractères, les nombres, les booléens, les Null et les Undefined.
- Apprendre ce que sont les Tableaux, les Objets et les Fonctions, This et Prototypes.
- Apprendre à utiliser les déclarations if et else.
- Apprenez à comparer des variables.
- Apprendre à utiliser la boucle for.

Le code de cet exercice peut être exécuté via Node.js ou dans l'onglet "console" des outils de développement de votre navigateur.

### Enoncé 1
1. Définissez une fonction `addFavoriteBook(..)` qui reçoit un seul paramètre, appelé `bookName`.

2. Si la chaîne `bookName` fournie ne contient *PAS* le mot "Great", ajoutez-la au tableau `favoriteBooks`.

Conseils :

	- `someString.includes(anotherString)` renverra `true` si `anotherString` est trouvé dans `someString`, ou `false` sinon.

	- Utilisez `!` pour annuler une valeur booléenne (changez `true` en `false` ou vice versa).

	- `someArray.push(value)` ajoutera une valeur à la fin du tableau.

3. Définissez une fonction `printFavoriteBooks()` qui ne reçoit aucun paramètre.

4. La fonction `printFavoriteBooks()` doit d'abord imprimer un message comme "Livres favoris : ..", et inclure le nombre de livres dans le tableau `favoriteBooks`.

	Indice :


	- Utilisez `console.log(..)` pour imprimer un message à l'écran.

5. Enfin, `printFavoriteBooks()` devrait boucler le tableau `favoriteBooks` et imprimer chaque valeur.

	Assurez-vous d'appeler ensuite la fonction `printFavoriteBooks()` à la fin du programme.

	Astuce : Utilisez la boucle de style `for ( let .. of .. ) { }`.

### Enoncé 2
Cet exercice vise à mettre brièvement en pratique les trois piliers de JS : Types / Coercion, Scope / Closures, et `this`.

1. Dans la fonction `printFavoriteBooks()`, assurez-vous qu'il n'y a pas de conversion de type accidentelle (c'est-à-dire de nombre en chaîne de caractères).

	Astuce : Utilisez `String(..)` pour forcer quelque chose à un type de chaîne de caractères.

2. Déplacez les fonctions `addFavoriteBook(..)` et `printFavoriteBooks()` dans la classe `Bookshelf` comme méthodes. Modifiez-les pour qu'elles utilisent le mot-clé "this" pour accéder au tableau des "FavoriteBooks".

	Astuce : les méthodes de la classe n'utilisent pas le mot-clé "function", mais seulement leur nom.

3. Remplissez la définition de la fonction `loadBooks(..)`, qui devrait recevoir une instance de la classe `Bookshelf` que vous lui passerez.

4. La fonction `loadBooks(..)` devrait appeler le `fakeAjax(..)` fourni, en utilisant `BOOK_API` comme URL et une expression de fonction en ligne comme callback.

5. Le callback se verra passer un tableau de noms de livres. Bouclez ce tableau, en passant chaque nom de livre à la méthode `addFavoriteBook(..)` de l'instance `Bookshelf` passée à `loadBooks(..)`. Ensuite, appelez la méthode `printFavoriteBooks()`.

6. Créez une instance de la classe `Bookshelf`, et passez-la en argument à `loadBooks(..)`.

	Astuce : instanciation de la classe : `new Whatever()`.

### Enoncé 3 : Queues

En informatique, une file d'attente est une structure abstraite de données où les articles sont maintenus en ordre. De nouveaux articles peuvent être ajoutés en fin de file et les anciens articles sont retirés du début de la file.

Écrivez une fonction nextInLine qui prend un tableau (arr) et un nombre (item) comme arguments.

Ajoutez le nombre à la fin du tableau, puis retirez le premier élément du tableau.

La fonction nextInLine doit alors renvoyer l'élément qui a été supprimé.

### Enoncé 4

Dans le jeu de casino Blackjack, un joueur peut obtenir un avantage sur la maison en gardant une trace du nombre relatif de cartes hautes et basses restant dans le jeu. C'est ce qu'on appelle le comptage des cartes.

Le fait d'avoir plus de cartes hautes dans le jeu favorise le joueur. Une valeur est attribuée à chaque carte selon le tableau ci-dessous. Lorsque le décompte est positif, le joueur doit miser la plus haute carte. Lorsque le compte est nul ou négatif, le joueur doit miser faible.

 Décompte : Cartes

+1 :::::::> 2, 3, 4, 5, 6

0  ::::::::> 7, 8, 9

-1 :::::::> 10, "J", "Q", "K", "A"

Vous écrirez une fonction de comptage de cartes. Elle recevra un paramètre de carte, qui peut être un nombre ou une chaîne de caractères, et incrémentera ou décrémentera la variable de comptage globale en fonction de la valeur de la carte (voir tableau). La fonction renverra ensuite une chaîne avec le comptage actuel et la chaîne Bet si le comptage est positif, ou Hold si le comptage est nul ou négatif. Le décompte actuel et la décision du joueur (Bet ou Hold) doivent être séparés par un seul espace.

Exemple de sortie

-3 	Attend

5 	Pari 
