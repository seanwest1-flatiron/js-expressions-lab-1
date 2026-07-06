day1TempF = 32

day2TempC = 25
day2TempF = (day2TempC * 9 / 5) + 32

day3TempF = 70

day4TempC = 18
day4TempF = (day4TempC * 9 / 5) + 32

day5TempF = 80

day6TempC = 15
day6TempF = (day6TempC * 9 / 5) + 32

day7TempF = 72

day8TempC = 28
day8TempF = (day8TempC * 9 / 5) + 32

day9TempF = 68

day10TempC = 20
day10TempF = (day10TempC * 9 / 5) + 32

day11TempF = 75

day12TempC = 23
day12TempF = (day12TempC * 9 / 5) + 32

day13TempF = 82
day14TempC = 30
day14TempF = (day14TempC * 9 / 5) + 32

day15TempF = 65
day16TempC = 22
day16TempF = (day16TempC * 9 / 5) + 32

day17TempF = 77
day18TempC = 26
day18TempF = (day18TempC * 9 / 5) + 32

day19TempF = 78
day20TempC = 24
day20TempF = (day20TempC * 9 / 5) + 32

day21TempF = 73
day22TempC = 21
day22TempF = (day22TempC * 9 / 5) + 32

day23TempF = 79
day24TempC = 27
day24TempF = (day24TempC * 9 / 5) + 32

day25TempF = 71
day26TempC = 19
day26TempF = (day26TempC * 9 / 5) + 32

day27TempF = 74
day28TempC = 17
day28TempF = (day28TempC * 9 / 5) + 32

day29TempF = 76
day30TempC = 29
day30TempF = (day30TempC * 9 / 5) + 32

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF
tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32) * 5 / 9

//! Start the calculation of the average temperatures
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
avg_temperature_in_celsius = tot_temperature_in_celsius / 30

//! Console.log the results for your own inspection
console.log(avg_temperature_in_fahrenheit, avg_temperature_in_celsius)

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};
