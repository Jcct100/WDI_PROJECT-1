
![alt](https://i.imgur.com/moGchyH.png)

## GA WDI-30 Project 1: 'Design a Game'

### Introduction: 

For our first project at General Assembly. I built a 2D game using HTML, CSS and Jquery. 

### Concept:

I always wanted to make a difference in this world so I’ve decided to make a fun and interactive game which aims to engage and educate young people about ivory trade (campaign: https://www.wwf.org.uk/stoptheivorytrade ) 

![alt](https://i.imgur.com/zucx5Ng.png)	 The player takes the role of a young elephant and tries to unite the herds to safety by overcoming challenges along the way. 
 
 ![alt](https://i.imgur.com/qrd4raW.png) 
 In this game, you have 60 seconds to lead the herds to safety. There will be fire coming at you which you will have to jump over them and if you get hit more than three times the game will be over. ![alt](https://i.imgur.com/GIEHFtU.png)	   Every three times the elephant  manage to jump over the  fire. There is a pop up message educating the player about the importance of the international ivory trade to wild elephant survival. 
   
 ![alt](https://i.imgur.com/6AToTn8.png)	

###  Libraries/Applications used:
* Google fonts
* Animate.css
* Reset.css
* JQuery

### Heroku Link:

https://infinite-earth-13301.herokuapp.com/

### What went well:

```
function PoPupMessage() {
    const Messages = [
      'UK’s legal ivory market has been used as a cover for trade in illegal ivory and some shipments are destined for Asia ',
      'Around 20,000 African elephants are killed by poachers each year for their ivory tusks.',
      'Every day, an elephant is poached in Africa every 26 minutes.'
    ];
    const i = Math.floor(Math.random()*Messages.length);
    const $message = $('.message').show();
    $message.text(Messages[i]);
    setTimeout(() => {
      $('.message').hide();
    }, 10000);
  } 
```

Writing code for the PoPupMessage went well as I manage to do this very quickly. I approach this by first writing a function and name it as "PopupMessage". I named it "PopupMessage" so that other people reading my code can understand what it does. I created an array of strings and used the function Math.random() to pick a random number within the length of the array. Then show that particular string in the array by accessing it using 

```
    $message.text(Messages[i]);
```
The set timeout function was useful as I was using that to hide the message every 10 seconds.

```
    setTimeout(() => {
      $('.message').hide();
    }, 10000);
```

### Challenges:

The challenging part after writing the function was to write the logic so that it will only show the message when the player jumps over the fire three times. I manage to do this by writing a conditional function. So if the player jumps three times and still alive then invoke the function PoPupMessage(). 

```
        if (counter % 3 === 0 && lives > 0) {
          PoPupMessage();
        }
```


### Feature backlog:

If I have more time I would implement the following features below:

* Pause game.
* Mute Audio.
* Mobile responsive. 

### Final thoughts:

 I learnt a lot about building a game by using these technologies: HTML, CSS, jQuery, Javascript and Animate.css. I self taught how to use Animate.css because we didn’t cover this in class. When we were choosing the idea for our project. I was advised to do space invader or whack-o-mole because most of my classmates were making these games and it would be easier to help each other out if we have the same problem, but I wanted to challenge myself by making something outside of my comfort zone and an idea nobody was attempting. Overall the project went well because I approach this project by taking my time pseudo coding as well as breaking down all my problems. 








 