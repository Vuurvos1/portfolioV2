---
title: Tic Tac Toe
description: A tic tac toe ai with varying difficultie
img: /img/tictactoe.png
alt: Tic tac toe
link: tictactoe
---

# Tic Tac Toe

Voor dit project heb ik Boter Kaas en Eieren gemaakt met JavaScript om
mijzelf uit te dagen. Maar ik had niemand om tegen te spelen daarom heb
ik ook een robot gemaakt om tegen te spelen.

Boter kaas en eieren heeft in het ergste geval 196839 (3^9) mogelijke
manieren waarop het spel uitgespeeld kan worden. Dit lijkt misschien
best veel, maar al deze mogelijke posities kunnen nog steeds binnen één
seconde berekend worden.

<tic-tac-toe></tic-tac-toe>

Door gebruik te maken van het minimax algoritme kijkt de computer naar
alle mogelijke manieren waarop het spel verder gespeeld zou kunnen
worden. Het algoritme kijkt dan naar alle scenario's waar de computer
wint en geeft deze een score van +1, als hij verliest een score van -1
en bij een gelijkspel een score van 0. Vervolgens kiest hij het scenario
met de hoogste score.

<icon-link href="https://github.com/Vuurvos1/tictactoe" target="_blank" icon="github">
Source code
</icon-link>
