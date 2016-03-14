/**
 * Created by liyao on 3/14/16.
 */

$(document).ready(function() {
  $('#credit_cards').tablesorter();

  //$('.detail_row').hide(); // use css now

  $('.detail').click(function(){
    //console.log('click at row shown: ' + this.getAttribute('data-show'));
    var showOrNot = this.getAttribute('data-show');
    if (parseInt(showOrNot) == 0) { // hidden
      this.setAttribute('data-show', '1');
      $(this).closest('span.detail').text('Hide Details');
      $(this).closest('tr.data_row').next('tr.detail_row').show();
    } else { // shown
      this.setAttribute('data-show', '0');
      $(this).closest('span.detail').text('Show Details');
      $(this).closest('tr.data_row').next('tr.detail_row').hide();
    }
  });

  $("#annual_fee_content input[name='annual_fee_option']").click(function(){
    var annual_fee_option = parseInt($('input:radio[name=annual_fee_option]:checked').val());console.log('click at: ' + annual_fee_option);
/*    var card_network_option = $('input:radio[name=card_network_option]:checked').val();
    var credit_score_option = $('input:radio[name=credit_score_option]:checked').val();

    $('tr.data_row').each(function() {
      var annual_fee_opt = parseInt(this.getAttribute('data-annual-fee'));
      if (annual_fee_opt == annual_fee_option) { // match filter annual_fee
        var otherTwoOptsMismatched = 0;
        if (card_network_option != null) {
          var card_network_opt = parseInt(this.getAttribute('data-card-network'));
          if (parseInt(card_network_option) != card_network_opt) { // mismatch filter card_network
            otherTwoOptsMismatched = 1;
          }
        }
        if (otherTwoOptsMismatched == 0 && credit_score_option != null) {
          var credit_score_opt = parseInt(this.getAttribute('data-credit-score'));
          if (parseInt(credit_score_option) != credit_score_opt) { // mismatch filter credit_score
            otherTwoOptsMismatched = 1;
          }
        }

        if (otherTwoOptsMismatched == 0) {
          $(this).show();
        } else {
          var showOrNot = $(this).find('span.detail').attr('data-show');
          if (parseInt(showOrNot) == 1) { // hide detail row
            $(this).find('span.detail').attr('data-show', '0');
            $(this).find('span.detail').text('Show Details');
            $(this).next('tr.detail_row').hide();
          }

          $(this).hide();
        }
      } else {
        var showOrNot = $(this).find('span.detail').attr('data-show');
        if (parseInt(showOrNot) == 1) { // hide detail row
          $(this).find('span.detail').attr('data-show', '0');
          $(this).find('span.detail').text('Show Details');
          $(this).next('tr.detail_row').hide();
        }
        // hide data row
        $(this).hide();
      }
    });
    */
  });

  $("#card_network_content input[name='card_network_option']").click(function(){
    var annual_fee_option = $('input:radio[name=annual_fee_option]:checked').val();
    var card_network_option = parseInt($('input:radio[name=card_network_option]:checked').val());
    var credit_score_option = $('input:radio[name=credit_score_option]:checked').val();

    $('tr.data_row').each(function() {
      var card_network_opt = parseInt(this.getAttribute('data-card-network'));
      if (card_network_option == card_network_opt) {
        var otherTwoOptsMismatched = 0;
        if (annual_fee_option != null) {
          var annual_fee_opt = parseInt(this.getAttribute('data-annual-fee'));
          if (parseInt(annual_fee_option) != annual_fee_opt) {
            otherTwoOptsMismatched = 1;
          }
        }
        if (otherTwoOptsMismatched == 0 && credit_score_option != null) {
          var credit_score_opt = parseInt(this.getAttribute('data-credit-score'));
          if (parseInt(credit_score_option) != credit_score_opt) {
            otherTwoOptsMismatched = 1;
          }
        }

        if (otherTwoOptsMismatched == 0) {
          $(this).show();
        } else {
          var showOrNot = $(this).find('span.detail').attr('data-show');
          if (parseInt(showOrNot) == 1) { // hide detail row
            $(this).find('span.detail').attr('data-show', '0');
            $(this).find('span.detail').text('Show Details');
            $(this).next('tr.detail_row').hide();
          }

          $(this).hide();
        }
      } else {
        var showOrNot = $(this).find('span.detail').attr('data-show');
        if (parseInt(showOrNot) == 1) { // hide detail row
          $(this).find('span.detail').attr('data-show', '0');
          $(this).find('span.detail').text('Show Details');
          $(this).next('tr.detail_row').hide();
        }

        // hide data row
        $(this).hide();
      }
    });
  });

  $("#credit_score_content input[name='credit_score_option']").click(function(){
    var annual_fee_option = $('input:radio[name=annual_fee_option]:checked').val();
    var card_network_option = $('input:radio[name=card_network_option]:checked').val();
    var credit_score_option = parseInt($('input:radio[name=credit_score_option]:checked').val());

    $('tr.data_row').each(function() {
      var credit_score_opt = parseInt(this.getAttribute('data-credit-score'));
      if (parseInt(credit_score_option) == credit_score_opt) {
        var otherTwoOptsMismatched = 0;
        if (annual_fee_option != null) {
          var annual_fee_opt = parseInt(this.getAttribute('data-annual-fee'));
          if (parseInt(annual_fee_option) != annual_fee_opt) {
            otherTwoOptsMismatched = 1;
          }
        }
        if (otherTwoOptsMismatched == 0 && card_network_option != null) {
          var card_network_opt = parseInt(this.getAttribute('data-card-network'));
          if (parseInt(card_network_option) != card_network_opt) {
            otherTwoOptsMismatched = 1;
          }
        }

        if (otherTwoOptsMismatched == 0) {
          $(this).show();
        } else {
          var showOrNot = $(this).find('span.detail').attr('data-show');
          if (parseInt(showOrNot) == 1) { // hide detail row
            $(this).find('span.detail').attr('data-show', '0');
            $(this).find('span.detail').text('Show Details');
            $(this).next('tr.detail_row').hide();
          }

          $(this).hide();
        }
      } else {
        var showOrNot = $(this).find('span.detail').attr('data-show');
        if (parseInt(showOrNot) == 1) { // hide detail row
          $(this).find('span.detail').attr('data-show', '0');
          $(this).find('span.detail').text('Show Details');
          $(this).next('tr.detail_row').hide();
        }

        // hide data row
        $(this).hide();
      }
    });
  });
});

