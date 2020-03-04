const ejer1 = () => {

    let printEjer1 = "";
    while (printEjer1.length < 7) {
        printEjer1 += "#";
        document.querySelector("#ejer-1").innerHTML += printEjer1 + "<br/>";
    }

};
const ejer2 = () => {
    const pattern1 = "Fizz";
    const pattern2 = "Buzz";

    for (let i = 0; i < 101; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            document.querySelector("#ejer-2").innerHTML += i + ": " + pattern1 + "" + pattern2 + "<br/>";
        } else if (i % 5 == 0) {
            document.querySelector("#ejer-2").innerHTML += i + ": " + pattern2 + "<br/>";
        } else if (i % 3 == 0) {
            document.querySelector("#ejer-2").innerHTML += i + ": " + pattern1 + "<br/>";
        };
    }


};

const ejer3 = () => {
    let size = 8;
    let divPrincipal = "#ejer-3";
    var board = "";
    for (let i = 0; i < size; i++) {
        $(divPrincipal).append(`<span index='${i}'></span> `);
        for (let z = 0; z < size; z++) {
            if ((i + z) % 2 == 0) {
                $(divPrincipal +"span[index="+i+"]").append(`<span index='${z}' >-</span> `);
            } else {
                $(divPrincipal +`span[index='${i}']`).append(`<span index='${z}' >#</span> `);
            }
        }
        $(divPrincipal +`span[index='${i}']`).append("</br>");
    }
    /* 
        $(`#ejer-3 span[index='${index}']`).append(`${pattern2}`)
        while ($("#ejer-3").children().length < 9) {
            var pattern = `<span index='${index}'>${index % 2 == 0 ? "#" : "1"}</span>`;
            debugger;
            var pattern2 = `<span index='${index2}'>${index2 % 2 == 0 ? "#" : "1"}</span>`;
            $("#ejer-3").append(`${pattern}`);
            while ($(`#ejer-3 span[index='${index}']`).children().length < 9) {
                $(`#ejer-3 span[index='${index}']`).append(`${pattern2}`);
                index2++;
            }
            index2 = 0;
            index++; */
}


