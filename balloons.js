document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
});
$(document).ready(function () {
  const attentionSeekers = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];
  const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];

  $("h1").addClass(`animate__animated animate__${randomAnimation}`);

  $("form").append('<button id="submitBtn" class="btn btn-primary mt-3">Submit</button>');

  $("#submitBtn").click(function (event) {
      event.preventDefault();
      if ($(".balloon-checkbox:checked").length === 0) {
          showToast("Please select at least one balloon!");
      }
  });

  function showToast(message) {
      let toastHtml = `
          <div class="toast show position-fixed bottom-0 end-0 m-3" style="z-index: 1050;">
              <div class="toast-header">
                  <strong class="me-auto">Alert</strong>
                  <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
              </div>
              <div class="toast-body">${message}</div>
          </div>
      `;
      $("body").append(toastHtml);
      setTimeout(() => {
          $(".toast").fadeOut(500, function () { $(this).remove(); });
      }, 3000);
  }

  $("form").append(`
      <div>
          <input type="checkbox" id="checkAll" class="form-check-input">
          <label for="checkAll">Check/Uncheck All</label>
      </div>
  `);

  $("#checkAll").change(function () {
      $(".balloon-checkbox").prop("checked", this.checked);
  });

  const balloons = [
      { id: "red", color: "red" },
      { id: "green", color: "green" },
      { id: "blue", color: "blue" }
  ];

  let balloonContainer = $("<div></div>");
  $.each(balloons, function (_, balloon) {
      let checkbox = $(`<input type="checkbox" class="balloon-checkbox form-check-input" id="${balloon.id}Balloon">`);
      let label = $(`<label for="${balloon.id}Balloon" class="ms-2">${balloon.color.charAt(0).toUpperCase() + balloon.color.slice(1)} Balloon</label>`);

      label.css("cursor", "pointer");

      label.hover(
          function () { $("h1").css("color", balloon.color); },
          function () { $("h1").css("color", ""); }
      );

      balloonContainer.append(checkbox).append(label).append("<br>");
  });

  $("form").append(balloonContainer);
});
