var colorTotals = {};
var colorsToAdd = ['cyan', 'magenta', 'papaya-whip', 'mermaid-treasure'];

$(document).ready(function() {
    // Add color attributes to colorTotals
    addMoreColors();
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
    var niceColor = getNiceColor(color);
    $('#' + color).text('Total ' + niceColor + ': ' + colorTotals[color]);
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
    var niceColor = getNiceColor(color);
    $('#' + color).text('Total ' + niceColor + ': ' + colorTotals[color]);
    // Get and update the total box count
    $('#total').text('Total blocks: ' + getTotalBoxCount());
}

function getTotalBoxCount() {
    var totalCount = 0;
    // Iterate through the color buttons (for color names) and sum up the box
    // counts
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

function addMoreColors() {
    colorsToAdd.forEach(function(color) {
        // Capitalize the first letter of the color
        var niceColor = getNiceColor(color);
        // Add the counter for the color (before the total counter)
        $('#total').before('<p id="' + color + '">Total ' + niceColor + ': 0</p>');
        // Add the button for the color (after the last button)
        $('.color-button').last().after('<button class="color-button " data-color="' + color + '">' + niceColor + '</button>');
    });
}

function getNiceColor(color) {
  var niceColor = color[0].toUpperCase() + color.substring(1, color.length);
  niceColor = niceColor.replace(/-/g, ' ');
  return niceColor;
}
