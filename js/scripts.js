var monday1 = new JournalEntry(
  timeDate = '04/15/2000 13:00',
  sleep = 8,
  medications = "100mg caffiene, 800mg ibuprofen",
  exercises = "30min walk, 2 miles; lat pulls - 30lb 2 sets of 10",
  food = "chicken with rice, beans, guacamole, and lettuce",
  drink = "12oz orange san pelligrino",
  general = "woke up earlier than I wanted to but I feel decently rested"
)
var monday2 = new JournalEntry(
  timeDate = '04/15/2000 13:30',
  sleep = 4,
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
Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Journal.prototype.findJournalEntry = function(id) {
  console.log(this.journalEntries.length);
  for (var i = 0; i < this.journalEntries.length; i++) {
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].id == parseInt(id)) {
        return this.journalEntries[i];
      }
    }
  }
  return false;
}
// Journal.prototype.getSleep = function() {
//   var timeDates = [];
//   for (var i = 0; i < this.journalEntries.length; i++) {
//     if (this.journalEntries[i]) {
//       if (this.journalEntries[i].sleep) {
//         timeDates.push(this.journalEntries[i].timeDate);
//       }
//     }
//   }
//   return timeDates;
// }

function JournalEntry(timeDate, sleep, medications, exercises, food, drink, general) {
  this.timeDate = timeDate,
    this.sleep = sleep,
    this.medications = medications,
    this.exercises = exercises,
    this.food = food,
    this.drink = drink,
    this.general = general
}

// User Interface
function listfilteredEntries(journal, property) {
  var htmlForfilteredEntries = "";

  if (property === "sleep"){
    var filteredEntries = $("ul#filteredSleepDates");
    journal.journalEntries.forEach(function(journalEntry) {
      if (journalEntry.sleep) {
        htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + journalEntry.timeDate + " " + journalEntry.sleep + "</li>";
      }
    });
  } else if (property === "medications") {
      var filteredEntries = $("ul#filteredMedicationsDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.medications) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + journalEntry.timeDate + " " + journalEntry.medications + "</li>";
        }
      });
  } else if (property === "exercises") {
      var filteredEntries = $("ul#filteredExercisesDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.exercises) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + journalEntry.timeDate + " " + journalEntry.exercises + "</li>";
        }
      });
  } else if (property === "food") {
      var filteredEntries = $("ul#filteredFoodDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.food) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + journalEntry.timeDate + " " + journalEntry.food + "</li>";
        }
    });
  } else if (property === "drink") {
      var filteredEntries = $("ul#filteredDrinkDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.drink) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + journalEntry.timeDate + " " + journalEntry.drink + "</li>";
        }
    });
  } else if (property === "general") {
      var filteredEntries = $("ul#filteredGeneralDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.general) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + journalEntry.timeDate + " " + journalEntry.general + "</li>";
        }
      });
  }
  filteredEntries.html(htmlForfilteredEntries);
  console.log(filteredEntries);
}

function attachSleepListeners() {
  $("ul#filteredSleepDates").on("click", "li", function() {
    showEntry(this.id);
  });
}
function attachMedicationsListeners() {
  $("ul#filteredMedicationsDates").on("click", "li", function() {
    showEntry(this.id);
  });
}
function attachExerciseListeners() {
  $("ul#filteredExercisesDates").on("click", "li", function() {
    showEntry(this.id);
  });
}
function attachFoodListeners() {
  $("ul#filteredFoodDates").on("click", "li", function() {
    showEntry(this.id);
  });
}
function attachDrinkListeners() {
  $("ul#filteredDrinkDates").on("click", "li", function() {
    showEntry(this.id);
  });
}
function attachGeneralListeners() {
  $("ul#filteredGeneralDates").on("click", "li", function() {
    showEntry(this.id);
  });
}


function attachJournalListeners() {
  $("ul#all-dates").on("click", "li", function() {
    var date = new Date();

    var n = date.toDateString();
    showEntry(this.id);


    $("#show-template").slideDown();
    $("#check-buttons").slideUp();
    $("#form").slideUp()
    $("#display-date").text(n);
    $("#display-date").show();
    $("#dates").slideUp();
  });
};



var journal = new Journal();



function showEntry(entryId) {
  var entry = journal.findJournalEntry(entryId);
  $("#show-template").show();
  $(".sleep").html(entry.sleep);
  $(".medications").html(entry.medications);
  $(".exercises").html(entry.exercises);
  $(".food").html(entry.food);
  $(".drink").html(entry.drink);
  $(".general").html(entry.general);

}




$(document).ready(function() {
  attachJournalListeners();
  attachSleepListeners();
  attachMedicationsListeners();
  attachExerciseListeners();
  attachFoodListeners();
  attachDrinkListeners();
  attachGeneralListeners();


  journal.addJournalEntry(monday1);
  // $("#all-dates").append("<li id=" + monday1.id + ">" + monday1.timeDate + "</li> <br>");

  journal.addJournalEntry(monday2);
  // $("#all-dates").append("<li id=" + monday2.id + ">" + monday2.timeDate + "</li> <br>");

  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var sleep = $("input#sleep").val();
    var medications = $("textarea#medications").val();
    var exercise = $("textarea#exercise").val();
    var food = $("input#food").val();
    var drink = $("input#drink").val();
    var notes = $("textarea#notes").val();
    var date = new Date();
    var n = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();
    var newEntry = new JournalEntry(date, sleep, medications, exercise, food, drink, notes);

    journal.addJournalEntry(newEntry);
    $("#all-dates").append("<li id=" + newEntry.id + ">" + n + "</li> <br>");

  });

  $("#sleep-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#sleep-table").slideDown();
    $("#dates").slideUp();
    var property = "sleep";
    listfilteredEntries(journal, property);
    $("#sleep-table-row").show();
  });

  $("#medication-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#medication-table").slideDown();
    $("#dates").slideUp();
    var property = "medications";
    listfilteredEntries(journal, property);
    $("#medication-table-row").show();
  });

  $("#sleep-back-button").click(function() {
    $("#form").slideDown();
    $("#check-buttons").slideDown();
    $("#sleep-table").slideDown();
    $("#sleep-table-row").hide();
    $("#medication-table-row").hide();
    $("#dates").slideDown();
  });

  $("#medication-back-button").click(function() {
    $("#form").slideDown();
    $("#check-buttons").slideDown();
    $("#medication-table").slideDown();
    $("#sleep-table-row").hide();
    $("#medication-table-row").hide();
    $("#dates").slideDown();
  });

  $("#go-back-button").click(function() {
    $("#show-template").hide();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
    $("#form").slideDown();
  });
});
