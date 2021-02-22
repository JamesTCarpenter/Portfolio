#!/usr/bin/env python3
# -*- coding: utf-8 -*-
print(" ")
print("This is a game called Egg Splat")
print(" ")
print("The aim of the game is to guess the word the Farmer is thinking of before the egg timer breaks")
print(" ")
print("Good Luck!")

import random

EggSplatWin = (
"""
   _____
  | . . | 
 <|_____|____
    |      \ |
    |    __/ |
     --------
        |   |
        m   m  
""")
EggSplat = (
"""
          _____
         /     \\
        /       \\    
       /         \\
      /           \\
     |     EGG    |
      \\           /
       \\         /
        \\       /
         -------       
""",
"""
          _____
         /    /\\
        /       \\    
       /         \\
      /           \\
     |     EGG    |
      \\           /
       \\         /
        \\       /
         ------- 
""",
"""
          _____
         /    /\\
        /       \\    
       /\        \\
      /           \\
     |     EGG    |
      \\           /
       \\         /
        \\       /
         ------- 
""",
"""
          _____
         /    /\\
        /       \\    
       /\        \\
      /           \\
     |     EGG    |
      \\           /
       \\        \/
        \\       /
         ------- 
""",
"""
          _____
         /    /\\
        /       \\    
       /\/       \\
      /           \\
     |     EGG    |
      \\        _/ /
       \\      / \/
        \\       /
         ------- 
""",
"""
          _____
         /    /\\
        /     \ \\    
       /\/       \\
      /           \\
     |     EGG    |
      \\        _/ /
       \\      / \/
        \\       /
         ------- 
""",
"""
          _____
         /   \/\\
        /     \ \\    
       /\/    /  \\
      / /         \\
     |     EGG    |
      \ \      _/ /
       \/     / \/
        \\       /
         -------
""",
"""
        _________
       /         \\____      <SPLAT!>
      /  _____         \\
     /  /     \         \\
    /   |     |          \\ 
    \   \_____/        __/
     \         _______/
      \_______/
""")

MAX_WRONG= len(EggSplat) - 1
WORDS=("CROPS","TRACTOR","PRODUCE","HARVESTER","SCARECROW","HONEYBEE","WHEAT","CATTLE","LAMB","AGRICULTURE","DAIRY","STABLE","MEADOW")
word=random.choice(WORDS)
so_far = "-" * len(word)
wrong=0
used= []

while wrong < MAX_WRONG and so_far !=word:
    print(EggSplat[wrong])
    print("\nYou've used the letters:\n",used,)
    print("So far the word is:\n",so_far)
    guess = input("Enter your guess: ")
    guess = guess.upper()
    
    while guess in used:
        print(" ")
        print("You've already guessed the letter",guess)
        guess=input("Enter your guess: ")
        guess=guess.upper()
        
    used.append(guess)
    
    if guess in word:
        print(" ")
        print("The letter ",guess," is in the word!")
        new=""
        for i in range(len(word)):
            if guess == word[i]:
                new += guess
            else:
                new += so_far[i]
        so_far=new
        
    else:
        print(" ")
        print("Sorry,",guess," isn't in the word")
        wrong +=1
        
if wrong == MAX_WRONG:
    print(EggSplat[wrong])
    print (" ")
    print("GAME OVER!")
    print(" ")
    print("You've cracked the egg!")
    print(" ")
    print("The word was... ",word)

else:
    print(" ")
    print(EggSplatWin)
    print(" ")
    print("Well done you've beat the Farmer!")
    print(" ")
    print("The word was... ",word)
    
    input("Press the enter key to exit.")
    