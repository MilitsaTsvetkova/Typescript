const carMakers: string[] = ["Subaru", "Ford", "Mazda"];
const carsByMake: string[][] = [["ford"], ["camaro"], ["corolla"]];

//flexible types

const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-20-12");
importantDates.push(new Date());
