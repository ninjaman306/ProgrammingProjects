var slaying = true

var youHit = Math.floor(Math.random() * 3)

var damageThisRound = Math.floor(Math.random() * 6 + 2)

var totalDamage = 0
// The story \/
alert("You wake up in a strange land... ");
alert("You have a sudden uncontrollable \
desire to kill a dragon... ");
var prompt_1 = confirm("Will you accept the Challenge?")
if (prompt_1 === true) {
    while(slaying) {
      if (youHit) {
          alert("You scraped the dragon");
          totalDamage += damageThisRound;
               if (totalDamage >= 4) {
                  alert("You joined killed the dragon!");
                 slaying = false
              } else {
                   youHit = Math.floor(Math.random() * 2)
             }
      } else {
          alert("The dragon killed you");
          slaying = false
      }
    }
} 
