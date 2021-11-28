// Player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
var fight = function(enemyName) {
  // repeat while enemy is alive
  while (playerHealth > 0 && enemyHealth > 0) {
    // fight or skip?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight == "SKIP") {
      // Confirm skip
      var confirmSkip = window.confirm("Are you sure you want to skip?");

      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        // Subtract money for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // Generate player robot attack damage
    var damage = randomNumber(playerAttack - 5, playerAttack);

    // Subtract value of 'playerAttack' from value of 'enemyHealth' and update 'enemyHealth' variable
    enemyHealth = Math.max(0, enemyHealth - damage);
  
    // Log results to console
    console.log(playerName + " attacked " + enemyName + " for " + damage + " damage.");
  
    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // Generate enemy damage
    var damage = randomNumber(enemyAttack - 5, enemyAttack);

    // Subtract value of 'enemyAttack' from value of 'playerHealth' and update 'playerHealth' variable
    playerHealth = Math.max(0, playerHealth - damage);
  
    // Log results to console
    console.log(enemyName + " attacked " + playerName + " for " + damage + " damage.");
    
    // Check players's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// Start new game
function startGame() {
  // Reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // Start fight
  for (var i=0;i<enemyNames.length;i++) {
    if (playerHealth > 0) {
      // Round alert
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      // Pick an enemy based on array index
      var pickedEnemyName = enemyNames[i];
  
      // Reset enemy health
      enemyHealth = randomNumber(20, 80);
  
      // Pass enemey combatant to fight function
      fight(pickedEnemyName);

      // If not at last enemy
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  if (playerHealth > 0) {
    window.alert("Great job, you survived the game! Here is your score: " + playerMoney);
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
      if (playerMoney >= 7) {
        window.alert("Refilling player robot's health by 20 for 7 dollars.");

        // Increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;

      } else {
        window.alert("You don't have enough money.");
      }
      
      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player robot's attack by 6 for 7 dollars.");
  
        // Increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;

      } else {
        window.alert("You don't have enough money.");
      }

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

startGame();