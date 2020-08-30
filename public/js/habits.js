/* eslint-disable */
$(document).ready(() => {
  const createHabitForm = $("form#create-habit");
  const typeInput = $("textarea#type");
  const activityInput = $("textarea#activity");
  const descriptionInput = $("textarea#description");
  const frequencyInput = $("textarea#frequency");

  createHabitForm.on("submit", (event) => {
    event.preventDefault();
    const newHabit = {
      type: typeInput.val().trim(),
      activity: activityInput.val().trim(),
      description: descriptionInput.val().trim(),
      frequency: frequencyInput.val().trim(),
    };

    if (
      newHabit.type &&
      newHabit.activity &&
      newHabit.description &&
      newHabit.frequency
    ) {
      createNewHabit(newHabit);
    }
  });

  function createNewHabit(newHabit) {
    $.post("/api/create-habit", {
      habit: newHabit,
    }).then((data) => {
        console.log(data);
        window.location.replace("/checkin");
    });
  }

  $(".habit").on("click", function () {
    event.preventDefault();
      console.log("habit clicked");

      const id = $(this).data("id");

      $.post("/api/user/habit", {
        HabitId: id,
      })
      .then((data) => {
          console.log(data);
          // Reload the page to get the updated list
           window.location.replace("/checkin");
      });
  });
});