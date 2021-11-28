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
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // Subtract value of 'playerAttack' from value of 'enemyHealth' and update 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
  
    // Log results to console
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
  
    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // Subtract value of 'enemyAttack' from value of 'playerHealth' and update 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
  
    // Log results to console
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
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
      enemyHealth = 50;
  
      // Pass enemey combatant to fight function
      fight(pickedEnemyName);
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

function shop() {
  
}

startGame();