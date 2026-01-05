/**
 * Write a javascript function to get the current date in YYYY-MM-DD format.
 *
 *
 */

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based
  const day = date.getDate();

  console.log(`${year}`);
  console.log(`${month}`);
  console.log(`${day}`);

  console.log(
    `${month.toString().padStart(2, 0)}-${day
      .toString()
      .padStart(2, 0)}-${year}`
  );
}

getCurrentDate(); // e.g., '2024-06-15'
