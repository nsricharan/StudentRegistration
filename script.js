function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function showPaymentSection() {
    var paymentMethod = document.getElementById("payment-method").value;
    var paymentSections = document.querySelectorAll('.payment-section');

    for (var i = 0; i < paymentSections.length; i++) {
        paymentSections[i].style.display = 'none';
    }

    if (paymentMethod === 'paypal') {
        document.getElementById("paypal-section").style.display = 'block';
    } else if (paymentMethod === 'debitcard') {
        document.getElementById("debitcard-section").style.display = 'block';
    }
}