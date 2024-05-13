// Create code for a countdown timer that can be executed in the console window, and
// will show the total milliseconds, days, hours, minutes, and seconds remaining until a
// target date is reached:

// 1. Create an end date that you want to count down to. Format it in a date type
// format within a string.
// 2. Create a countdown function that will parse the endDate() and subtract the
// current date from that end date. This will show the total in milliseconds.
// Using Date.parse() you can convert a string representation of a date to a
// numeric value as a number of milliseconds since January 1, 1970, 00:00:00
// UTC.
// 3. Once you have the total milliseconds, to get the days, hours, minutes, and
// seconds you can take the following steps:
// • To get days you can divide the number of milliseconds in a date,
// removing the remainder with Math.floor().
// • To get hours you can use modulus to capture just the remainder once
// the total days are removed.
// • To get minutes you can use the value of milliseconds in a minute and
// using the modulus capture the remainder.
// • Do the same for seconds by dividing the number by seconds in
// milliseconds and getting the remainder. If you use Math.floor() you
// can round down removing any remaining decimal places that will be
// shown in the lower values.
// 4. Return all the values within an object with property names indicating what
// the unit of time the values refer to.
// 5. Create a function to use a setTimeout() to run the update() function every
// second (1,000 milliseconds). The update() function will create a variable that
// can temporarily hold the object return values of countdown(), and create an
// empty variable that will be used to create the output values.
// 6. Within the same function, using the for loop get all the properties and values
// of the temp object variable. As you iterate through the object update the
// output string to contain the property name and property value.
// 7. Using console.log(), print the output result string into the console.

const endDate = new Date("2024-05-14T23:50:59.444+03:00");

function countDown (endDate) {
  let remainingMilliseconds = Date.parse(endDate) - Date.parse(new Date());
  let remainingDays = Math.floor(remainingMilliseconds / 86400000);
  let remainingHours = Math.floor((remainingMilliseconds % 86400000) / 3600000);
  let remainingMinutes = Math.floor(
    ((remainingMilliseconds % 86400000) % 3600000) / 60000
  );
  let remainingSeconds = Math.floor(
    (((remainingMilliseconds % 86400000) % 3600000) % 60000) / 1000
  );

  return {
    "Remaining days": remainingDays,
    "Remaing hours": remainingHours,
    "Remainig minutes": remainingMinutes,
    "Remaining seconds": remainingSeconds,
  };
};

countDown(endDate);

