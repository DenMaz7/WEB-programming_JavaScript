function triangle(value1 = 0, type1 = "", value2 = 0, type2 = ""){
    
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Будь ласка, перечитайте інструкцію та введіть правильні типи елементів.");
        return "failed";
    }

    if(type1 === type2 && type1 != "leg"){
        console.log("Ви ввели несумісну пару типів елементів.");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0 ) {
        console.log("Значення елементів повинні бути більшими за нуль.");
        return "failed";
    }

    let hypotenuse, leg, otherLeg, alpha, beta;
    
    if (type1 === "leg" && type2 === "leg") {
        leg = Math.min(value1, value2);
        otherLeg = Math.max(value1, value2);
        hypotenuse = Math.sqrt(leg * leg + otherLeg * otherLeg);
        beta = Math.atan(leg / otherLeg) * (180 / Math.PI);
        alpha = 90 - beta;
    }
    else if (type1 === "leg" || type2 === "leg"){
        if (type1 === "hypotenuse" || type2 === "hypotenuse"){
            leg = (type1 === "leg") ? value1 : value2;
            hypotenuse = (type1 === "hypotenuse") ? value1 : value2;
            if(hypotenuse < leg){
                console.log("Катет не може бути більшим за гіпотенузу.");
                return "failed";
            }
            else{
                otherLeg = Math.sqrt(hypotenuse * hypotenuse - leg * leg);
                beta = Math.asin(leg / hypotenuse) * (180 / Math.PI);
                alpha = 90 - beta;
            }
        }
        if (type1 === "opposite angle" || type2 === "opposite angle"){
            leg = (type1 === "leg") ? value1 : value2;
            beta = (type1 === "opposite angle") ? value1 : value2;
            hypotenuse = leg / Math.sin(beta * (Math.PI / 180));
            otherLeg = Math.sqrt(hypotenuse * hypotenuse - leg * leg);
            alpha = 90 - beta;
            // beta = angle;
        }
        if (type1 === "adjacent angle" || type2 === "adjacent angle"){
            leg = (type1 === "leg") ? value1 : value2;
            alpha = (type1 === "adjacent angle") ? value1 : value2;
            otherLeg = leg * Math.tan(alpha * (Math.PI / 180));
            hypotenuse = leg / Math.cos(alpha * (Math.PI / 180));
            beta = 90 - alpha;
            // alpha = angle;
        }
    }
    else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        hypotenuse = (type1 === "hypotenuse") ? value1 : value2;
        alpha = (type1 === "angle") ? value1 : value2;
        leg = hypotenuse * Math.cos(alpha * (Math.PI / 180));
        otherLeg = hypotenuse * Math.sin(alpha * (Math.PI / 180));
        beta = 90 - alpha;
        // alpha = angle;
    }
    // else {
    //     console.log("Ви вказали некоректні типи, перечитайте, будь ласка, інструкцію.");
    //     return "failed";
    // }      

    if(beta >= 90 || alpha >= 90){
        console.log("У прямокутному трикутнику не може бути тупого кута.");
        return "failed";
    }
    
    console.log(`a = ${leg}\nb = ${otherLeg}\nc = ${hypotenuse}\nalpha = ${alpha}°\nbeta = ${beta}°`);
    return "success";

}

triangle(13, "leg", 35, "hypotenuse");
triangle(13, "leg", 25, "opposite angle");
triangle(18, "leg", 21, "adjacent angle");
// triangle(21, "adjacent angle", 18, "leg");
triangle(5, "hypotenuse", 0, "angle");
triangle(121, "angle", 13, "hypotenuse");
triangle(84, "leg", 14, "leg");