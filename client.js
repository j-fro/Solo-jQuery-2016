var colorTotals = {};

$(document).ready(function() {
    // Add color attributes to colorTotals
    colorTotalSetup();
    // Turn on buttons
    enableButtons();
});

function enableButtons() {
    // Wire up color buttons
    $(document).on('click', '.color-button', colorClicked);
}

function colorClicked() {
    // Get the color from the clicked button
    var color = $(this).data('color');
    // Add the colored box to the DOM
    $('.container').append('<div class="color-cube ' + color + '"></div>');
    // Increment and update the color counter
    colorTotals[color]++;
    $('#' + color).text('Total ' + color + ': ' + colorTotals[color]);
}

function colorTotalSetup() {
    // For each color button on the DOM, add a property to total boxes of that
    // color
    $('.color-button').each(function(button) {
        colorTotals[$(this).data('color')] = 0;
    });
}
