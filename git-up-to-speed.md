# git

## (up to speed)

#### eric watson
#### january 2017

---

# distributed
# version control

---

# distributed
# **version control**

^ Q: What does a version control system do?

---

# record changes over time

^ A:
- **Records changes** to a set of files over time
- Often source code, but could be anything
    - Novel
    - Branding concepts
    - Architectural designs

---

# distributed
# **version control**

^ Now, let's talk about the "distributed" part

---

# **distributed**
# version control

^ Examples of non-distributed systems:
- Subversion
- CVS

^ Examples of distrubuted systems:
- Git
- Mercurial
- Bazaar
- Darcs

^ Advantages of a distributed version control system:

---

# no internet required

^ - you can work on an airplane
  - you can commit your work more often
  - you can choose when to share your work

---

# no single point of failure

---

# local copy is full repository

^ - operations can be much faster, because the network is almost never a factor

^ That brings us to...

---

# git
### [fit] *making you feel stupid since 2005*

^ Let's start with 3 facts about git

---

## fact #1
# git is fast

![](media/fast.gif)

---

# snapshots, not diffs

---

# everything is local

---

## fact #2
# git is reliable

![](media/destroy.gif)

---

# non-destructive

---

# integrity-checked

---

## fact #3
# git is simple

![](media/what.gif)

---


# not easy,
# but simple

^ easy: near, close to hand
^ simple: "sim-" + "-plex" (one braid) (as opposed to "complex")
    - lack of interweaving
^ if you can understand the fundamentals of *how* git works,
  - you get into fewer "situations"
  - when you do get into a "situation", you can find a way out
  - when you don't know how to do something, it's easier to figure out

---

# commits

---

# [fit] anatomy of a commit

### repository content
### commit message
### parent(s)
### author identity
### date

---

# [fit] anatomy of a commit

### **repository content**
### commit message
### parent(s)
### author identity
### date

---

# [fit] anatomy of a commit

### repository content
### **commit message**
### parent(s)
### author identity
### date

---

# [fit] anatomy of a commit

### repository content
### commit message
### **parent(s)**
### author identity
### date

---

# [fit] anatomy of a commit

### repository content
### commit message
### parent(s)
### **author identity**
### date

---

# [fit] anatomy of a commit

### repository content
### commit message
### parent(s)
### author identity
### **date**

---

# sha1

## [fit] 7cf2a17f3345635d59e063cffddd23573b6e4a75

---

# git

## everything is a sha1

---

# [create repository](http://localhost:3939/ascii/create-repo)

^ Commands
- ls
- git init books
- cd books
- ls -a
- git status

---

# [add series](http://localhost:3939/ascii/commit-1)

^ when you "stage" your commit, this is when the data blobs are actually written to the repository. Committing just links the blobs into the history.

^ Commands
- git status
- vim top-series.md
    - # ya sci-fi/fantasy series
    - 1. keeper of the lost cities
    - 2. fairyland
    - 3. the school for good and evil
- git status
- tree .git/objects
- git add top-series.md
- git status
- tree .git/objects
- git cat-file -t ***
- git cat-file -p ***
- git commit
    - Top series list
- git status
- git log
- git config --list | grep logg
- git logg
- tree ./git/objects
- git cat-file -t [commit]
- git cat-file -p [commit]

^ commit: 0376119

---

# [fit] add authors

### isolate
### work
### commit
### share

^ First, we isolate by creating a new branch

---

# [fit] add authors

## [**isolate**](http://localhost:3939/ascii/isolate-2)
### work
### commit
### share

^ When you create a branch, it's like adding a new label
^ You have to check out the branch to make it "active"

---

# [fit] add authors

### isolate
## [**work**](http://localhost:3939/ascii/work-2)
### commit
### share

^ Authors:
- Shannon Messenger
- Catherynne Valente
- Soman Chainani

---

# [fit] add authors

### isolate
### work
## [**commit**](http://localhost:3939/ascii/commit-2)
### share

^ commit: 0c5366e

---

# [fit] add authors

### isolate
### work
### commit
## [**share**](http://localhost:3939/ascii/share-2)

^ fast-forward merge into master

---

# [fit] add more series

## [**isolate**](http://localhost:3939/ascii/isolate-3)
### work
### commit
### share

^ When you create a branch, it's like adding a new label
^ You have to check out the branch to make it "active"

---

# [fit] add more series

### isolate
## [**work**](http://localhost:3939/ascii/work-3)
### commit
### share

^ Authors:
- wildwood -- Colin Meloy
- wondla -- Tony DiTerlizzi

---

# [fit] add more series

### isolate
### work
## [**commit**](http://localhost:3939/ascii/commit-3)
### share

^ commit: b41aca3
^ Meanwhile...

---

# [fit] meanwhile
## [fit] *images would be nice...*

---

# [fit] add cover images

## [**isolate**](http://localhost:3939/ascii/isolate-4)
### work
### commit
### share

^ It would be nice if we had images of these books
- back to master
- new branch: add-images

---

# [fit] add cover images

### isolate
## [**work**](http://localhost:3939/ascii/work-4)
### commit
### share

^ add cover images
- keeper-of-the-lost-cities
- fairyland
- the-school-for-good-and-evil

---

# [fit] add cover images

### isolate
### work
## [**commit**](http://localhost:3939/ascii/commit-4)
### share

^ commit: ed2819c

---

# [fit] add cover images

### isolate
### work
### commit
## [**share**](http://localhost:3939/ascii/share-4)

^ fast-forward master to commit b41aca3
^ and now, we get around to sharing our new series

---

# [fit] meanwhile
## [fit] the series are restless...

---

# [fit] add more series

### isolate
### work
### commit
## [**share**](http://localhost:3939/ascii/share-3)

^ Because there is no direct path from master to add-images, git will not fast-forward. Instead it creates a new commit (a "merge" commit).
^ commit: 2640dc4

---

# [fit] [add even more series](http://localhost:3939/ascii/commit-5)

^ commit: 3b5f218

---

# [fit] [add more images](http://localhost:3939/ascii/commit-6)

^ Steps:
- Checkout master
- Delete add-images
- Create new add-images
- Checkout add-images
- Copy files
  - wildwood
  - wondla
- Add
- commit: d6532a8

---

# [fit] meanwhile
## [fit] this is getting messy...

^ Let's add images and books together

---

# rebase!
## [fit] [add missing images](http://localhost:3939/ascii/commit-7)

^ Steps:
- checkout add-series
- rebase on master
- add missing images
    - inheritance
    - miss-peregrine
    - the-apothecary
- stage only 2
    - inheritance
    - miss-peregrine
- commit
- merge --no-ff

^ commit:
- rebased: 8380a04
- images: 5f62ef9
- merge: 62ada9d

---

# [fit] rebase can be dangerous
## [fit] "lost" commits

---

# except...

---

# [fit] git is non-destructive
## [fit] [your commits are still there](http://localhost:3939/ascii/find-lost-commit)

^ "lost" commmit: 3b5f218

---

# takeaways

---

# git is simple

---

# branches are your friends

---

# git doesn't lose things

---

# git is fun!

---

# thanks

### find me on the web
## @wasnotrice

# :grinning:

---

# Resources

- [Git for ages 4 and up (Michael Schwern)](https://www.youtube.com/watch?v=1ffBJ4sVUb4)
- [Simple made easy (Rich Hickey)](https://www.infoq.com/presentations/Simple-Made-Easy)
- [asciinema](https://asciinema.org)
- [deckset](http://decksetapp.com)

