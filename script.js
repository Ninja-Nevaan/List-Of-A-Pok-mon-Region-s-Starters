pokemon_array= [];

function submit(){
    var p1= document.getElementById("pokemon_1").value ;
    var p2= document.getElementById("pokemon_2").value ;
    var p3= document.getElementById("pokemon_3").value ;

    pokemon_array.push(p1);
    pokemon_array.push(p2);
    pokemon_array.push(p3);

    console.log(pokemon_array);

    document.getElementById("display_name").innerHTML=pokemon_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    pokemon_array.sort();

    document.getElementById("display_name").innerHTML=pokemon_array;
}