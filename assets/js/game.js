// Player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Log player info
console.log(playerName, playerAttack, playerHealth, playerMoney);

// Enemy info
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Fight function
function fight() {
  // Round start alert
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "fight" || promptFight == "FIGHT") {
    // Player has chosen to fight

    // Subtract value of 'playerAttack' from value of 'enemyHealth' and update 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
  
    // Log results to console
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
  
    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" || promptFight == "SKIP") {
    // Confirm skip
    var confirmSkip = window.confirm("Are you sure you want to skip?");

    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight!");
  
      // Subtract money for skipping
      playerMoney = playerMoney - 2;
      console.log(playerName + " only has " + playerMoney + " remaining!"); 
    } else {
      fight();
    }
  } else {
    window.alert('You chose and invalid option. Try again!');
    fight();
  }
}

// Call fight function
fight();