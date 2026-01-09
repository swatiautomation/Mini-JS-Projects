function checkDays(dayNumber){
    let day;
    switch (dayNumber) {
        case 0:
            day="sunday";
            break;
            case 1:
                day="Monday";
                break;
                case 2:
                    day="Tuesday";
                    break;
                    case 3:
                        day="Wednesday";
                        break;
                        case 4:
                            day="Thrusday";
                            break;
                            case 5:
                                day="Friday";
                                break;
    
        default:
            console.log("invalid day");
            break;
    }
    return day;

}
console.log(checkDays(4));


let browser = "opera";
switch (browser) {
    case "chrome":
        console.log("launch chrome");
        break;
        case "firefox":
            console.log("launch firefox");
            break;
            case "edge":
                console.log("launch edge");
                break;

    default:
        console.log("unsupported browser");
        break;
}

