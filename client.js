var colorTotals = {};

$(document).ready(function() {
    // Add color attributes to colorTotals
    colorTotalSetup();
    // Turn on buttons
    enableButtons();
});

function enableButtons() {
    // Wire up color buttons
    $(document).on('click', '.color-button', addColorClicked);
    $(document).on('click', '.color-cube', removeColorClicked);
}

function addColorClicked() {
    // Get the color from the clicked button
    var color = $(this).data('color');
    // Add the colored box to the DOM
    $('.container').append('<div class="color-cube ' + color + '" data-color="' + color + '"></div>');
    // Increment and update the color counter
    colorTotals[color]++;
    $('#' + color).text('Total ' + color + ': ' + colorTotals[color]);
    // Get and update the total box count
    $('#total').text('Total blocks: ' + getTotalBoxCount());
}

function removeColorClicked() {
    // Get the color from the clicked block
    var color = $(this).data('color');
    // Take the block off the DOM
    $(this).remove();
    // Decrement and update the color counter
    colorTotals[color]--;
    $('#' + color).text('Total ' + color + ': ' + colorTotals[color]);
    // Get and update the total box count
    $('#total').text('Total blocks: ' + getTotalBoxCount());
}

function getTotalBoxCount() {
  var totalCount = 0;
  $('.color-button').each(function() {
    totalCount += colorTotals[$(this).data('color')];
  });
  return totalCount;
}

function colorTotalSetup() {
    // For each color button on the DOM, add a property to total boxes of that
    // color
    $('.color-button').each(function(button) {
        colorTotals[$(this).data('color')] = 0;
    });
}
