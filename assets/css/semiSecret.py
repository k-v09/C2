import pygame
import random

#init stuff, window setup
WIDTH = 800
HEIGHT = 600
pygame.init()
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("This Is a Website... Right?")
ic = pygame.image.load('assets/images/secret.png')
pygame.display.set_icon(ic)
pygame.mouse.set_cursor(pygame.cursors.broken_x)

#color defs
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)
PINK = (255, 0, 255)
PURPLE = (127, 0 ,255)
GREY = (160, 160, 160)

# 0, 1, 2, 3
suits = ['clubs', 'hearts', 'diamonds', 'spades']
# 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D
vals = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
valvals = ['A', 'B', 'C', 'D']
deck = {}
for suit in suits:
    for val in vals:
        cind = None
        if vals.index(val) > 9:
            cind = valvals[vals.index(val) - 10]
        else:
            cind = str(vals.index(val))
        ind = str(suits.index(suit)) + cind
        deck[ind] = val + " of " + suit


class card():
    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y


run = True
while run:

    WIN.fill(GREY)
    mox, moy = pygame.mouse.get_pos()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False
    

    pygame.display.flip()