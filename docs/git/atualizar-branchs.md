# Atualizar as Branchs

Atualizar a branch prod com os dados da branch main?

Para atualizar a branch prod com os dados da branch main, você pode usar os seguintes comandos no Git. Certifique-se de que você esteja na branch prod antes de fazer o merge.

Mude para a branch prod:

```bash
git checkout prod / dev
```

Atualize a branch main para garantir que você tenha as últimas alterações:

```bash
git checkout main

git pull origin main
```

Volte para a branch prod:

```bash
git checkout prod /dev
```

Faça o merge da branch main na branch prod:

```bash
git merge main
```

Resolva quaisquer conflitos que possam surgir, adicione as alterações e finalize o merge:

```bash
git add .
git commit -m "Merged main into prod / dev"
```

Por fim, envie suas alterações para o repositório remoto:

```bash
git push origin prod / dev
```

Isso deve atualizar a branch prod com os dados da branch main. Se precisar de mais ajuda ou tiver dúvidas, é só avisar!



