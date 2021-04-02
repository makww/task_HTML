document.addEventListener('DOMContentLoaded', () => {

    const available = document.querySelector("#available");
    const amount = document.querySelector("#amount");
    const bank = document.querySelector('.bank');
    const inputField = bank.querySelector("#input-field");

    amount.max = available.textContent;

    function chipsAmount() {
        inputField.value = amount.value;
    }

    amount.addEventListener('input', () => {
        chipsAmount();
    });

    bank.addEventListener('click', (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'min':
                amount.value = 1;
                chipsAmount();
                break;
            case 'max':
                amount.value = available.textContent;
                chipsAmount();
                break;
            case 'bank':
                amount.value = available.textContent;
                chipsAmount();
                break;
            case 'halfBank':
                amount.value = available.textContent / 2;
                chipsAmount();

        }
    });

});