/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

// Function Definition
function calculateBill(TotalBill, TaxRate) {
        // this is the function body
        // eslint-disable-next-line no-unused-vars

        const total = TotalBill + (TaxRate / 100) * TotalBill ;

        return total;
}

// Function call or run
console.log(`Your Total is $${calculateBill(200.00, 8.25)}`);
