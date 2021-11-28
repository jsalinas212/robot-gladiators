// Fight or skip choice function
var fightOrSkip = function() {
  // fight or skip?
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "" || promptFight === null) {
    window.alert("Please enter a valid response!");
    fightOrSkip();
  }

  if (promptFight === "skip" || promptFight == "SKIP") {
    // Confirm skip
    var confirmSkip = window.confirm("Are you sure you want to skip?");

    if (confirmSkip) {
      window.alert(playerInfo.name + " has chosen to skip the fight!");
      // Subtract money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money);
    }
  }
};

// Fight function
var fight = function(enemy) {
  // repeat while enemy is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
    fightOrSkip();

    // Generate player robot attack damage
    var damage = randomNumber(playerInfo.attack - 5, playerInfo.attack);

    // Subtract value of 'playerInfo.attack' from value of 'enemy.health' and update 'enemy.health' variable
    enemy.health = Math.max(0, enemy.health - damage);
  
    // Log results to console
    console.log(playerInfo.name + " attacked " + enemy.name + " for " + damage + " damage.");
  
    // Check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    
    // Generate enemy damage
    var damage = randomNumber(enemy.attack - 5, enemy.attack);

    // Subtract value of 'enemy.attack' from value of 'playerInfo.health' and update 'playerInfo.health' variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
  
    // Log results to console
    console.log(enemy.name + " attacked " + playerInfo.name + " for " + damage + " damage.");
    
    // Check players's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

// Start new game
function startGame() {
  // Reset player stats
  playerInfo.reset();

  // Start fight
  for (var i=0;i<enemyInfo.length;i++) {
    if (playerInfo.health > 0) {
      // Round alert
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      // Pick an enemy based on array index
      var pickedEnemyObj = enemyInfo[i];
  
      // Reset enemy health
      pickedEnemyObj.health = randomNumber(20, 80);
  
      // Pass enemey combatant to fight function
      fight(pickedEnemyObj);

      // If not at last enemy
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // Enter shop?
        var storeConfirm = window.confirm("The round is over. Visit the shop before next round?");

        // shop confirmed
        if (storeConfirm) {
          shop()
        }
      }
    } else {
      // Game Over
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
}

var endGame = function() {
  // If player is alive, player wins
  if (playerInfo.health > 0) {
    window.alert("Great job, you survived the game! Here is your score: " + playerInfo.money);
  } else {
    window.alert("You lost your robot in battle.");
  }

  // Play again?
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // Restart game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  // Shop options
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE' to make a choice."
    );
  
  // Option switch
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the shop");

      // Do nothing and exit
      break;
    default:
      window.alert("You didn't pick a valid option. Try again.");

      // Call shop() to force valid option
      shop()
      break;
  }
};

// Function to generate random number up to 80
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * + (max - min) + min);

  return value;
};

// Get player name function
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = window.prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};

// Player info
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (playerInfo.money >= 7) {
      window.alert("Refilling player robot's health by 20 for 7 dollars.");

      // Increase health and decrease money
      playerInfo.health += 20;
      playerInfo.money -= 7;

    } else {
      window.alert("You don't have enough money.");
    }
  },
  upgradeAttack: function() {
    if (playerInfo.money >= 7) {
      window.alert("Upgrading player robot's attack by 6 for 7 dollars.");

      // Increase attack and decrease money
      playerInfo.attack += 6;
      playerInfo.money -= 7;

    } else {
      window.alert("You don't have enough money.");
    }
  }
};

// Enemy info
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
  
];

startGame();