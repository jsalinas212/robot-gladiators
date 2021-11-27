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
}

for (var i=0;i<enemyNames.length;i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}