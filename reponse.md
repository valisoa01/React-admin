# TP React-Admin - Réponses

## Exercice 1 : Liste des employés

### Question : Quel composant React-Admin permet d'afficher une liste de données ?

Le composant `List` permet de récupérer et d'afficher une collection de ressources.

Exemple :

```tsx
<List>
    <Datagrid>
        <TextField source="firstName" />
    </Datagrid>
</List>
```

### Question : Quel est le rôle de Datagrid ?

`Datagrid` affiche les données sous forme de tableau.

### Question : Quel est le rôle de TextField ?

`TextField` affiche la valeur d'un champ texte provenant de la ressource.

---

## Exercice 2 : Création d'un employé

### Question : Quel composant permet de créer une ressource ?

Le composant `Create`.

### Question : Quel est le rôle de SimpleForm ?

`SimpleForm` génère automatiquement un formulaire relié à React-Admin.

### Question : Comment rendre un champ obligatoire ?

Avec :

```tsx
validate={required()}
```

---

## Exercice 3 : Validation des données

### Question : Comment vérifier qu'un salaire est supérieur à 1500 ?

```tsx
validate={[
    required(),
    minValue(1500)
]}
```

### Question : Pourquoi valider les données ?

Pour empêcher l'enregistrement de données incorrectes et améliorer la qualité des informations stockées.

---

## Exercice 4 : Modification d'un employé

### Question : Quel composant permet la modification ?

`Edit`

### Question : Quel hook permet d'accéder à l'enregistrement courant ?

```tsx
useRecordContext()
```

Exemple :

```tsx
const record = useRecordContext();
```

Ce hook retourne l'objet actuellement affiché ou modifié.

---

## Exercice 5 : Affichage détaillé

### Question : Quel composant permet l'affichage détaillé ?

```tsx
<Show>
```

### Question : Quelle est la différence entre Show et Edit ?

- `Show` : consultation uniquement.
- `Edit` : consultation et modification.

---

## Exercice 6 : Gestion des stagiaires

### Question : Pourquoi créer une ressource interns ?

Pour séparer les employés des stagiaires et appliquer des traitements spécifiques à chacun.

---

## Exercice 7 : Relation stagiaire → employé

### Question : À quoi sert employeeId ?

Il représente l'identifiant de l'employé encadrant le stagiaire.

Exemple :

```json
{
  "employeeId": 2
}
```

Le stagiaire est associé à l'employé ayant l'identifiant 2.

---

## Exercice 8 : ReferenceField

### Question : Quel est le rôle de ReferenceField ?

`ReferenceField` permet d'afficher les informations d'une ressource liée.

Exemple :

```tsx
<ReferenceField
    source="employeeId"
    reference="employees"
>
    <TextField source="firstName" />
</ReferenceField>
```

React-Admin récupère automatiquement l'employé correspondant.

---

## Exercice 9 : useGetList()

### Question : Quel est le rôle de useGetList ?

Ce hook récupère plusieurs enregistrements depuis une ressource.

Exemple :

```tsx
const { data } = useGetList("interns");
```

### Cas d'utilisation

- Liste des stagiaires d'un employé.
- Statistiques par département.
- Dashboard.

---

## Exercice 10 : useUpdate()

### Question : Quel est le rôle de useUpdate ?

Permet de modifier un enregistrement sans passer par la page Edit.

Exemple :

```tsx
const [update] = useUpdate();
```

### Cas d'utilisation

Activation ou désactivation rapide d'un employé.

---

## Exercice 11 : useCreate()

### Question : Quel est le rôle de useCreate ?

Permet de créer une ressource depuis n'importe quel composant.

Exemple :

```tsx
const [create] = useCreate();
```

### Cas d'utilisation

Création rapide d'un stagiaire depuis la fiche d'un employé.

---

## Exercice 12 : Dashboard

### Question : Pourquoi créer un Dashboard ?

Le Dashboard centralise les indicateurs importants de l'application.

Exemples :

- Nombre total d'employés
- Nombre de stagiaires
- Nombre d'employés actifs
- Salaire moyen

### Calcul du salaire moyen

```tsx
const averageSalary =
    employees.reduce(
        (sum, employee) =>
            sum + employee.salary,
        0
    ) / employees.length;
```

---

## Exercice 13 : Personnalisation du Dashboard

### Question : Comment définir un Dashboard personnalisé ?

Dans `App.tsx` :

```tsx
<Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
>
```

### Améliorations réalisées

- Cartes statistiques interactives.
- Navigation vers les ressources.
- Responsive Design.
- Effets de survol.
- Icônes Material UI.
- Dégradé de couleurs moderne.

---

## Conclusion

Ce TP m'a permis d'apprendre :

- Le CRUD avec React-Admin.
- Les ressources (`Resource`).
- Les composants (`List`, `Create`, `Edit`, `Show`).
- Les relations entre ressources (`ReferenceField`).
- Les hooks React-Admin (`useRecordContext`, `useGetList`, `useUpdate`, `useCreate`).
- La création d'un Dashboard personnalisé.
- Les bonnes pratiques d'interface utilisateur avec Material UI.