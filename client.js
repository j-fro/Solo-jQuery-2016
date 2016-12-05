var colorTotals = {};

$(document).ready(function() {
    colorTotalSetup();
    enableButtons();
});

function enableButtons() {
    $(document).on('click', '.color-button', colorClicked);
}

function colorClicked() {
    var color = $(this).data('color');
    $('.container').append('<div class="color-cube ' + color + '"></div>');
    colorTotals[color]++;
    $('#' + color).text('Total ' + color + ': ' + colorTotals[color]);
}

function colorTotalSetup() {
    $('.color-button').each(function(button) {
        colorTotals[$(this).data('color')] = 0;
    });
}
