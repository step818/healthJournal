var monday1 = new JournalEntry (
  timeDate = '04/15/2000 13:00',
  sleep = 8,
  medications = "100mg caffiene, 800mg ibuprofen",
  exercises = "30min walk, 2 miles; lat pulls - 30lb 2 sets of 10",
  food = "chicken with rice, beans, guacamole, and lettuce",
  drink = "12oz orange san pelligrino",
  general = "woke up earlier than I wanted to but I feel decently rested"
)
var monday2 = new JournalEntry (
  timeDate = '04/15/2000 13:30',
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
Journal.prototype.getSleep = function(){
  var timeDates = [];
  for (var i=0; i < this.journalEntries.length; i++){
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].sleep) {
        timeDates.push(this.journalEntries[i].timeDate);
      }
    }
  }
  return timeDates;
}

function JournalEntry(timeDate, sleep, medications, exercises, food, drink, general) {
  this.timeDate = timeDate,
  this.sleep = sleep,
  this.medications = medications,
  this.exercises = exercises,
  this.food = food,
  this.drink = drink,
  this.general = general
}


function attachJournalListeners() {
  $("ul#all-dates").on("click", "li", function(){
    var date = new Date();

var n = date.toDateString();

    $("#show-template").slideDown();
    $("#check-buttons").slideUp();
    $("#form").slideUp()
    $("#display-date").text(n);
        $("#display-date").show();
        $("#dates").slideUp();
  });
};


// User Interface

var journal = new Journal();
journal.addJournalEntry(monday1);
journal.addJournalEntry(monday2);

var timeDates = journal.getSleep();
console.log(timeDates);


// function showEntry(entryId) {
//   var contact = journal.findJournalEntry(entryId);
//   $("#show-template").show();
//   $()
// }




$(document).ready(function(){
  attachJournalListeners()
  $("form#formOne").submit(function(event){
    event.preventDefault();

    var sleep = $("input#sleep").val();
    var medications = $("textarea#medications").val();
    var exercise = $("textarea#exercise").val();
    var food = $("input#food").val();
    var drink = $("input#drink").val();
    var notes = $("textarea#notes").val();
    var date = new Date();

var n = date.toDateString();
console.log(n);

    var newEntry = new JournalEntry(date, sleep, medications, exercise, food, drink, notes);
    journal.addJournalEntry(newEntry);
    console.log(date, sleep, medications,exercise, food,drink,notes);

    $("#all-dates").append("<li>" + date + "</li> <br>");

  });

  $("#sleep-button").click(function(){
    $("#form").slideUp();
    $ ("#check-buttons").slideUp();
    $("#sleep-table").slideDown();
    $("#dates").slideUp();
  });

  $("#back-button").click(function(){
    $("#form").slideDown();
    $ ("#check-buttons").slideDown();
    $("#sleep-table").slideDown();
    $("#sleep-table").slideUp();
    $("#dates").slideDown();
  });
});
