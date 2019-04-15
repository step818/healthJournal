var monday1 = new JournalEntry (
  sleep = 8,
  medications = "100mg caffiene, 800mg ibuprofen",
  exercises = "30min walk, 2 miles; lat pulls - 30lb 2 sets of 10",
  food = "chicken with rice, beans, guacamole, and lettuce",
  drink = "12oz orange san pelligrino",
  general = "woke up earlier than I wanted to but I feel decently rested"
)
var monday2 = new JournalEntry (
  sleep = '',
  medications = '',
  exercises = '',
  food = "oatmeal with cranberries and pecans",
  drink = "12oz water",
  general = ''
)
// Business logic
function Journal() {
  this.journalEntries = [],
  this.currentId = 0
}
Journal.prototype.addJournalEntry = function(journalEntry) {
  journalEntry.id = this.assignId();
  this.journalEntries.push(journalEntry);
}
Journal.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}
Journal.prototype.findJournalEntry = function(id){
  for (var i=0; i < this.journalEntries.length; i++){
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].id == id) {
        return this.journalEntries[i];
      }
    }
  }
  return false;
}

function JournalEntry(sleep, medications, exercises, food, drink, general) {
  this.sleep = sleep,
  this.medications = medications,
  this.exercises = exercises,
  this.food = food,
  this.drink = drink,
  this.general = general
}


// User Interface

var journal = new Journal();
journal.addJournalEntry(monday1);
journal.addJournalEntry(monday2);

console.log(journal);

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

  });

  $("#sleep-button").click(function(){
    $("#form").slideUp();
    $ ("#check-buttons").slideUp();
    $("#sleep-table").slideDown();
  });

  $("#back-button").click(function(){
    $("#form").slideDown();
    $ ("#check-buttons").slideDown();
    $("#sleep-table").slideDown();
    $("#sleep-table").slideUp();
  });
});
